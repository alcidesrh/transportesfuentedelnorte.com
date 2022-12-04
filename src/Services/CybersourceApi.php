<?php

namespace App\Services;

use App\Entity\ClienteReservacion;
use App\Entity\Reservacion;
use App\Entity\Tarjeta;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CybersourceApi
{
    public const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';
    public const AUTHENTICATION_SUCCESSFUL = 'AUTHENTICATION_SUCCESSFUL';
    public const PENDING_AUTHENTICATION = 'PENDING_AUTHENTICATION';
    public const AUTHORIZED_RISK_DECLINED = 'AUTHORIZED_RISK_DECLINED';
    public const AUTHORIZED = 'AUTHORIZED';

    private ?ClienteReservacion $cliente = null;
    private array|null $pago_datos = [];

    private $paymentInformation;
    private $clientReferenceInformation;
    private $orderInformation;

    public function __construct(private Reservacion $reservacion, private HttpClientInterface $client, private RequestStack $requestStack, private EntityManagerInterface $entityManagerInterface, private $host, private $endpoints, private $cybersource_merchant_id, private $cybersource_merchant_key_id, private $cybersource_merchant_secret_key)
    {
        $request = $this->requestStack->getCurrentRequest();
        $this->cliente = $this->reservacion->getCliente();
        if (!($request->request->has('cliente_reservacion') && $this->pago_datos = $request->request->all()['cliente_reservacion']['pago_datos'])) {
            $this->pago_datos = $request->getSession()->get('pago_datos');
        }
        $this->setData();
    }

    public function request($endpoint_key, $data = null)
    {
        $endpoint = $this->endpoints[$endpoint_key];
        $request_host = $this->host;
        $merchant_id = $this->cybersource_merchant_id;
        $merchant_key_id = $this->cybersource_merchant_key_id;
        $merchant_secret_key = $this->cybersource_merchant_secret_key;

        $url = 'https://'.$request_host.$endpoint;

        $resource = utf8_encode($endpoint);

        $date = date('D, d M Y G:i:s ').'GMT';

        $signatureString = '';

        $headerParams = [];
        $headers = [];

        $headerParams['Accept'] = 'application/hal+json;charset=utf-8';
        $headerParams['Content-Type'] = 'application/json;charset=utf-8';

        foreach ($headerParams as $key => $val) {
            $headers[] = "{$key}: {$val}";
        }

        $digest = '';

        $method = 'post';

        if (!$data) { // Get method
            $signatureString = 'host: '.$request_host."\ndate: ".$date."\n(request-target): ".$method.' '.$resource."\nv-c-merchant-id: ".$merchant_id;
            $headerString = 'host date (request-target) v-c-merchant-id';
        } else { // Post method
            // Get digest data
            $payload = json_encode($data);

            $digest = $this->GenerateDigest($payload);

            $signatureString = 'host: '.$request_host."\ndate: ".$date."\n(request-target): ".$method.' '.$resource."\ndigest: SHA-256=".$digest."\nv-c-merchant-id: ".$merchant_id;
            $headerString = 'host date (request-target) digest v-c-merchant-id';
        }

        $signatureByteString = utf8_encode($signatureString);
        $decodeKey = base64_decode($merchant_secret_key);
        $signature = base64_encode(hash_hmac('sha256', $signatureByteString, $decodeKey, true));
        $signatureHeader = [
            'keyid="'.$merchant_key_id.'"',
            'algorithm="HmacSHA256"',
            'headers="'.$headerString.'"',
            'signature="'.$signature.'"',
        ];

        $signatureToken = 'Signature:'.implode(', ', $signatureHeader);

        $host = 'Host:'.$request_host;
        $vcMerchant = 'v-c-merchant-id:'.$merchant_id;
        $authHeaders = [
            $vcMerchant,
            $signatureToken,
            $host,
            'Date:'.$date,
        ];

        if ($data) {
            $digestArray = ['Digest: SHA-256='.$digest];
            $authHeaders = array_merge($authHeaders, $digestArray);
        }

        $headerParams = array_merge($headers, $authHeaders);

        $response = $this->client->request(
            'POST',
            $url,
            [
                'headers' => $headerParams,
                'body' => $payload,
            ]
        );

        $statusCode = $response->getStatusCode();
        if ($statusCode >= 200 && $statusCode <= 299) {
            return $response->toArray();
        }

        return $statusCode;
    }

    public function GenerateDigest($requestPayload)
    {
        $utf8EncodedString = utf8_encode($requestPayload);
        $digestEncode = hash('sha256', $utf8EncodedString, true);

        return base64_encode($digestEncode);
    }

    public function setData()
    {
        if ($this->pago_datos) {
            $this->paymentInformation = [
                'paymentInformation' => [
                    'card' => [
                        'type' => $this->entityManagerInterface->getRepository(Tarjeta::class)->find($this->pago_datos['tarjeta'])->getCodigo(),
                        'expirationMonth' => $this->pago_datos['expira_mes'],
                        'expirationYear' => $this->pago_datos['expira_year'],
                        'number' => preg_replace('/\s+/', '', $this->pago_datos['numero']),
                        // 'securityCode' => '453',
                    ],
                ],
            ];
        }
        $this->clientReferenceInformation = [
            'clientReferenceInformation' => [
                'code' => $this->reservacion->getId(),
            ],
        ];

        if ($this->cliente) {
            $this->orderInformation = [
                'orderInformation' => [
                    'amountDetails' => [
                        'currency' => $this->reservacion->getMoneda(),
                        'totalAmount' => $this->reservacion->getPrecioVisual(),
                    ],
                    'billTo' => [
                        'address1' => $this->cliente->getDireccion(),
                        // 'address2' => $this->cliente->getDireccion(),
                        'locality' => $this->cliente->getCiudad()->getName(),
                        'country' => $this->cliente->getPais()->getIso2(),
                        'firstName' => $this->cliente->getNombre(),
                        'lastName' => $this->cliente->getApellido(),
                        'email' => $this->cliente->getEmail(),
                        'administrativeArea' => $this->cliente->getProvincia()->getIso2(),
                        'postalCode' => $this->cliente->getCodigoPostal(),
                        // 'phoneNumber' => '"18007097779",',
                    ],
                ],
            ];
        }
    }

    public function payerAuthenticationSetupService()
    {
        $response = $this->request('authentication_1__setup_service', [
            ...$this->clientReferenceInformation,
            ...$this->paymentInformation,
        ]);

        if (is_array($response) && isset($response['consumerAuthenticationInformation'])) {
            if (isset($response['consumerAuthenticationInformation']['accessToken'])) {
                return [
                    'status' => CybersourceApi::AUTHENTICATION_SUCCESSFUL,
                    'accessToken' => $response['consumerAuthenticationInformation']['accessToken'],
                    'deviceDataCollectionUrl' => $response['consumerAuthenticationInformation']['deviceDataCollectionUrl'],
                    'referenceId' => $response['consumerAuthenticationInformation']['referenceId'],
                ];
            }
        }

        return $response;
    }

    public function payerAuthenticationCheckEnrollmentService($referenceId, $returnUrl)
    {
        $data = [
            ...$this->clientReferenceInformation,
            ...$this->orderInformation,
            ...$this->paymentInformation,
            ...[
                'consumerAuthenticationInformation' => [
                    'returnUrl' => $returnUrl,
                    'referenceId' => $referenceId,
                    // 'transactionMode' => 'S',
                    'challengeCode' => '05',
                    // 'messageCategory' => 80,
                ],
                'processingInformation' => [
                    'actionList' => [
                        0 => 'CONSUMER_AUTHENTICATION',
                    ],
                ],
                'deviceInformation' => [
                    'fingerprintSessionId' => $this->requestStack->getSession()->get('uuid'),
                ],
            ],
        ];

        $response = $this->request('payment', $data);

        if (is_array($response)) {
            if (CybersourceApi::PENDING_AUTHENTICATION == $response['status']) {
                $window = json_decode(base64_decode($response['consumerAuthenticationInformation']['pareq']));
                list($height, $width) = match ($window->challengeWindowSize) {
                    '01' => [250, 400],
                    '02' => [390, 400],
                    '03' => [500, 400],
                    '04' => [600, 400],
                    default => ['100%', '100%'],
                };

                return [
                    'status' => CybersourceApi::PENDING_AUTHENTICATION,
                    'height' => $height,
                    'width' => $width,
                    'stepUpUrl' => $response['consumerAuthenticationInformation']['stepUpUrl'],
                    'accessToken' => $response['consumerAuthenticationInformation']['accessToken'],
                    'authenticationTransactionId' => $response['consumerAuthenticationInformation']['authenticationTransactionId'],
                ];
            }
            if (CybersourceApi::AUTHORIZED_RISK_DECLINED == $response['status'] || CybersourceApi::AUTHENTICATION_FAILED == $response['status']) {
                return ['status' => $response['status'], 'detalle' => isset($response['consumerAuthenticationInformation']['cardholderMessage']) ?: '. '.$response['errorInformation']['message']];
            }
            if (CybersourceApi::AUTHORIZED == $response['status'] || CybersourceApi::AUTHENTICATION_SUCCESSFUL == $response['status']) {
                return $response;
            }
        }

        return false;
    }

    public function payerAuthenticationValidationService($authenticationTransactionId)
    {
        $data = [
            ...$this->clientReferenceInformation,
            ...$this->orderInformation,
            ...$this->paymentInformation,
            ...[
                'consumerAuthenticationInformation' => [
                    'authenticationTransactionId' => $authenticationTransactionId,
                ],
            ],
            'processingInformation' => [
                'actionList' => [
                    0 => 'VALIDATE_CONSUMER_AUTHENTICATION',
                ],
            ],
            'deviceInformation' => [
                'fingerprintSessionId' => $this->requestStack->getSession()->get('uuid'),
            ],
        ];
        $response = $this->request('payment', $data);

        if (is_array($response)) {
            if (CybersourceApi::AUTHORIZED_RISK_DECLINED == $response['status'] || CybersourceApi::AUTHENTICATION_FAILED == $response['status']) {
                return ['status' => CybersourceApi::AUTHENTICATION_FAILED, 'detalle' => $response['consumerAuthenticationInformation']['authenticationStatusMsg'].'. '.$response['errorInformation']['message']];
            }

            return $response;
        }

        return false;
    }
}
