<?php

namespace App\Services;

use App\Entity\Reservacion;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CybersourceApi
{

    public function __construct(private HttpClientInterface $client, private $CYBERSOURCE_HOST, private $CYBERSOURCE_PAYMENTS, private $cybersource_merchant_id, private $cybersource_merchant_key_id, private $cybersource_merchant_secret_key)
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
}
