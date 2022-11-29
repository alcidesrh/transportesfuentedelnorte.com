<?php

namespace App\Services;

use App\Entity\ClienteReservacion;
use App\Entity\Reservacion;
use App\Entity\Tarjeta;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CybersourceApi
{

    const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";
    const AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL";
    const PENDING_AUTHENTICATION = "PENDING_AUTHENTICATION";

    private ?ClienteReservacion $cliente = null;
    private Reservacion $reservacion;

    private $paymentInformation;
    private $clientReferenceInformation;
    private $orderInformation;

    public function __construct(private HttpClientInterface $client, private EntityManagerInterface $entityManagerInterface, private $host, private $endpoints, private $cybersource_merchant_id, private $cybersource_merchant_key_id, private $cybersource_merchant_secret_key)
    {
    }

    public function procesarPago(Reservacion $reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad, $fingerprintSessionId)
    {
        $request_host = $this->CYBERSOURCE_HOST;
        $merchant_id = $this->cybersource_merchant_id;
        $merchant_key_id = $this->cybersource_merchant_key_id;
        $merchant_secret_key = $this->cybersource_merchant_secret_key;


        $resource = $this->CYBERSOURCE_PAYMENTS;
        $method = "post";
        $url = "https://" . $request_host . $resource;

        $payload = json_encode($this->getPayload($reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad, $fingerprintSessionId));

        $resource = utf8_encode($resource);

        $date = date("D, d M Y G:i:s ") . "GMT";

        $signatureString = "";

        $headerParams = [];
        $headers = [];

        $headerParams['Accept'] = 'application/hal+json;charset=utf-8';
        $headerParams['Content-Type'] = 'application/json;charset=utf-8';

        foreach ($headerParams as $key => $val) {
            $headers[] = "$key: $val";
        }

        $digest = "";

        if ($method == "get") {
            $signatureString = "host: " . $request_host . "\ndate: " . $date . "\n(request-target): " . $method . " " . $resource . "\nv-c-merchant-id: " . $merchant_id;
            $headerString = "host date (request-target) v-c-merchant-id";
        } else if ($method == "post") {
            //Get digest data        
            $digest = $this->GenerateDigest($payload);

            $signatureString = "host: " . $request_host . "\ndate: " . $date . "\n(request-target): " . $method . " " . $resource . "\ndigest: SHA-256=" . $digest . "\nv-c-merchant-id: " . $merchant_id;
            $headerString = "host date (request-target) digest v-c-merchant-id";
        }

        $signatureByteString = utf8_encode($signatureString);
        $decodeKey = base64_decode($merchant_secret_key);
        $signature = base64_encode(hash_hmac("sha256", $signatureByteString, $decodeKey, true));
        $signatureHeader = array(
            'keyid="' . $merchant_key_id . '"',
            'algorithm="HmacSHA256"',
            'headers="' . $headerString . '"',
            'signature="' . $signature . '"'
        );

        $signatureToken = "Signature:" . implode(", ", $signatureHeader);

        $host = "Host:" . $request_host;
        $vcMerchant = "v-c-merchant-id:" . $merchant_id;
        $authHeaders = array(
            $vcMerchant,
            $signatureToken,
            $host,
            'Date:' . $date
        );

        if ($method == "post") {
            $digestArray = array("Digest: SHA-256=" . $digest);
            $authHeaders = array_merge($authHeaders, $digestArray);
        }

        $headerParams = array_merge($headers, $authHeaders);

        $response = $this->client->request(
            'POST',
            $url,
            [
                'headers' => $headerParams,
                'body' => $payload
            ]
        );

        $statusCode = $response->getStatusCode();
        if ($statusCode >= 200 && $statusCode <= 299) {
            return $response->toArray();
        }

        return $statusCode;
    }

    public function request($endpoint_key, $data = null)
    {

        $endpoint = $this->endpoints[$endpoint_key];
        $request_host = $this->host;
        $merchant_id = $this->cybersource_merchant_id;
        $merchant_key_id = $this->cybersource_merchant_key_id;
        $merchant_secret_key = $this->cybersource_merchant_secret_key;


        $url = "https://" . $request_host . $endpoint;

        $resource = utf8_encode($endpoint);

        $date = date("D, d M Y G:i:s ") . "GMT";

        $signatureString = "";

        $headerParams = [];
        $headers = [];

        $headerParams['Accept'] = 'application/hal+json;charset=utf-8';
        $headerParams['Content-Type'] = 'application/json;charset=utf-8';

        foreach ($headerParams as $key => $val) {
            $headers[] = "$key: $val";
        }

        $digest = "";

        $method = 'post';

        if (!$data) { //Get method
            $signatureString = "host: " . $request_host . "\ndate: " . $date . "\n(request-target): " . $method . " " . $resource . "\nv-c-merchant-id: " . $merchant_id;
            $headerString = "host date (request-target) v-c-merchant-id";
        } else { //Post method
            //Get digest data 
            $payload = json_encode($data);

            $digest = $this->GenerateDigest($payload);

            $signatureString = "host: " . $request_host . "\ndate: " . $date . "\n(request-target): " . $method . " " . $resource . "\ndigest: SHA-256=" . $digest . "\nv-c-merchant-id: " . $merchant_id;
            $headerString = "host date (request-target) digest v-c-merchant-id";
        }

        $signatureByteString = utf8_encode($signatureString);
        $decodeKey = base64_decode($merchant_secret_key);
        $signature = base64_encode(hash_hmac("sha256", $signatureByteString, $decodeKey, true));
        $signatureHeader = array(
            'keyid="' . $merchant_key_id . '"',
            'algorithm="HmacSHA256"',
            'headers="' . $headerString . '"',
            'signature="' . $signature . '"'
        );

        $signatureToken = "Signature:" . implode(", ", $signatureHeader);

        $host = "Host:" . $request_host;
        $vcMerchant = "v-c-merchant-id:" . $merchant_id;
        $authHeaders = array(
            $vcMerchant,
            $signatureToken,
            $host,
            'Date:' . $date
        );

        if ($data) {
            $digestArray = array("Digest: SHA-256=" . $digest);
            $authHeaders = array_merge($authHeaders, $digestArray);
        }

        $headerParams = array_merge($headers, $authHeaders);

        $response = $this->client->request(
            'POST',
            $url,
            [
                'headers' => $headerParams,
                'body' => $payload
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
        $digestEncode = hash("sha256", $utf8EncodedString, true);
        return base64_encode($digestEncode);
    }

    public function getPayload(Reservacion $reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad, $fingerprintSessionId)
    {
        $cliente = $reservacion->getCliente();

        return [
            'processingInformation' => ['capture' => true],
            'orderInformation' => [
                'billTo' => [
                    'firstName' => $cliente->getNombre(),
                    'lastName' => $cliente->getApellido(),
                    'address1' => $cliente->getDireccion(),
                    'postalCode' => $cliente->getCodigoPostal(),
                    'locality' => $cliente->getLocalidad(),
                    'administrativeArea' => $cliente->getAreaAdministrativa(),
                    'country' => 'GT',
                    'phoneNumber' => $cliente->getTelefono(),
                    'email' => $cliente->getEmail(),
                ],
                'amountDetails' => [
                    'totalAmount' => $reservacion->getPrecioVisual(),
                    'currency' => $reservacion->getMoneda()
                ]
            ],
            'paymentInformation' => [
                'card' => [
                    'expirationYear' => 2022, //$expira_year,
                    'number' => '4622 9431 2701 3705', //$numero,
                    'securityCode' => 838, //$codigo_seguridad,
                    'expirationMonth' => 12, //$expira_mes,
                ]
            ],
            'deviceInformation' => [
                'fingerprintSessionId' => $fingerprintSessionId
            ]
        ];
    }

    public function setData(Reservacion $reservacion, $pago_datos)
    {
        $this->reservacion = $reservacion;
        $this->cliente = $reservacion->getCliente();

        $this->paymentInformation = [
            'paymentInformation' => [
                'card' => [
                    'type' => $this->entityManagerInterface->getRepository(Tarjeta::class)->find($pago_datos["tarjeta"])->getCodigo(),
                    'expirationMonth' => $pago_datos["expira_mes"],
                    'expirationYear' => $pago_datos["expira_year"],
                    'number' => $pago_datos["numero"]
                ]
            ]
        ];
        $this->clientReferenceInformation = [
            'clientReferenceInformation' => [
                'code' => $reservacion->getId(),
            ]
        ];

        if ($this->cliente) {
            $this->orderInformation = [
                'orderInformation' => [
                    'amountDetails' => [
                        'currency' => $this->reservacion->getMoneda(),
                        'totalAmount' => $this->reservacion->getPrecioVisual()
                    ],
                    'billTo' => [
                        'address1' => $this->cliente->getDireccion(),
                        'locality' => $this->cliente->getCiudad()->getName(),
                        'country' => $this->cliente->getPais()->getIso2(),
                        'firstName' => $this->cliente->getNombre(),
                        'lastName' => $this->cliente->getApellido(),
                        'email' => $this->cliente->getEmail(),
                    ],
                ]
            ];
        }
    }
    public function payerAuthenticationSetupService()
    {
        $response = $this->request('authentication_1__setup_service', [
            ...$this->clientReferenceInformation,
            ...$this->paymentInformation
        ]);

        if (is_array($response) && isset($response["consumerAuthenticationInformation"])) {
            if (isset($response["consumerAuthenticationInformation"]["accessToken"])) {
                return array_filter($response["consumerAuthenticationInformation"], fn ($key) => in_array($key, ['accessToken', 'deviceDataCollectionUrl', 'referenceId']), ARRAY_FILTER_USE_KEY);
            }
        }

        return false;
    }

    public function payerAuthenticationCheckEnrollmentService($referenceId, $returnUrl)
    {
        $response = $this->request('authentication_2___check_enrollment', [
            ...$this->clientReferenceInformation,
            ...$this->orderInformation,
            ...$this->paymentInformation,
            ...[
                'consumerAuthenticationInformation' => [
                    'returnUrl' => $returnUrl,
                    'referenceId' => $referenceId
                ]
            ]
        ]);

        if (is_array($response)) {

            if ($response['status'] == CybersourceApi::PENDING_AUTHENTICATION) {

                $window = json_decode(base64_decode($response["consumerAuthenticationInformation"]["pareq"]));
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
                    'authenticationTransactionId' => $response["consumerAuthenticationInformation"]["authenticationTransactionId"]
                ];
            } else if ($response['status'] == CybersourceApi::AUTHENTICATION_FAILED) {
                return ['status' => CybersourceApi::AUTHENTICATION_FAILED, 'message' => $response['consumerAuthenticationInformation']['cardholderMessage']];
            }
        }



        return false;
    }

    public function payerAuthenticationValidationService($authenticationTransactionId)
    {
        $response = $this->request('authentication_3___result', [
            ...$this->clientReferenceInformation,
            ...$this->orderInformation,
            ...$this->paymentInformation,
            ...[
                'consumerAuthenticationInformation' => [
                    'authenticationTransactionId' => $authenticationTransactionId,
                ]
            ]
        ]);

        if (is_array($response)) {
            return $response;
        }
        return false;
    }
}
