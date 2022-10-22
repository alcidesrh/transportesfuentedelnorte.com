<?php

namespace App\Services;

use App\Entity\Reservacion;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CybersourceApi
{

    public function __construct(private HttpClientInterface $client, private $CYBERSOURCE_HOST, private $CYBERSOURCE_PAYMENTS, private $cybersource_merchant_id, private $cybersource_merchant_key_id, private $cybersource_merchant_secret_key)
    {
    }

    public function procesarPago(Reservacion $reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad)
    {
        $request_host = $this->CYBERSOURCE_HOST;
        $merchant_id = $this->cybersource_merchant_id;
        $merchant_key_id = $this->cybersource_merchant_key_id;
        $merchant_secret_key = $this->cybersource_merchant_secret_key;


        $resource = $this->CYBERSOURCE_PAYMENTS;
        $method = "post";
        $url = "https://" . $request_host . $resource;

        $payload = json_encode($this->getPayload($reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad));

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

    public function getPayload(Reservacion $reservacion, $numero, $expira_mes, $expira_year, $codigo_seguridad)
    {

        $cliente = $reservacion->getCliente();

        $data = [
            'code' => 'TC50171_3',
            'commerceIndicator' => 'internet',
            'firstName' => $cliente->getNombre(),
            'lastName' => 'doe',
            'address1' => '201 S. Division St.',
            'postalCode' => '48104-2201',
            'locality' => 'Ann Arbor',
            'administrativeArea' => 'MI',
            'country' => 'US',
            'phoneNumber' => '999999999',
            'email' => 'test@cybs.com',
            'totalAmount' => '10',
            'currency' => 'GTQ',
            'expirationYear' => '2031',
            'number' => '4111111111111111',
            'securityCode' => '123',
            'expirationMonth' => '12',
            'type' => '002',
        ];

        return [
            // 'clientReferenceInformation' => ['code' => $data['code']],
            // 'processingInformation' => ['commerceIndicator' => $data['commerceIndicator']],
            'orderInformation' => [
                'billTo' => [
                    // 'firstName' => $data['firstName'],
                    // 'lastName' => $data['lastName'],
                    // 'address1' => $data['address1'],
                    // 'postalCode' => $data['postalCode'],
                    // 'locality' => $data['locality'],
                    // 'administrativeArea' => $data['administrativeArea'],
                    // 'country' => $data['country'],
                    // 'phoneNumber' => $data['phoneNumber'],
                    // 'email' => $data['email'],

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
                    'totalAmount' => $reservacion->getPrecio(),
                    'currency' => $reservacion->getMoneda()
                ]
            ],
            'paymentInformation' => [
                'card' => [
                    'expirationYear' => $expira_year,
                    'number' => $numero,
                    'securityCode' => $codigo_seguridad,
                    'expirationMonth' => $expira_mes,
                    // 'type' => $data['type'],
                ]
                // 'card' => [
                //     'expirationYear' => $data['expirationYear'],
                //     'number' => $data['number'],
                //     'securityCode' => $data['securityCode'],
                //     'expirationMonth' => $data['expirationMonth'],
                //     // 'type' => $data['type'],
                // ]
            ],
        ];

        // return '{
        //     "clientReferenceInformation": {
        //       "code": "TC50171_3"
        //     },
        //     "paymentInformation": {
        //       "card": {
        //         "number": "4111111111111111",
        //         "expirationMonth": "12",
        //         "expirationYear": "2031"
        //       }
        //     },
        //     "orderInformation": {
        //       "amountDetails": {
        //         "totalAmount": "102.21",
        //         "currency": "GQT"
        //       },
        //       "billTo": {
        //         "firstName": "John",
        //         "lastName": "Doe",
        //         "address1": "1 Market St",
        //         "locality": "san francisco",
        //         "administrativeArea": "CA",
        //         "postalCode": "94105",
        //         "country": "US",
        //         "email": "test@cybs.com",
        //         "phoneNumber": "4158880000"
        //       }
        //     }
        //   }';

        return "{\n" .
            "  \"clientReferenceInformation\": {\n" .
            "    \"code\": \"TC50171_3\"\n" .
            "  },\n" .
            "  \"processingInformation\": {\n" .
            "    \"commerceIndicator\": \"internet\"\n" .
            "  },\n" .
            "  \"orderInformation\": {\n" .
            "    \"billTo\": {\n" .
            "      \"firstName\": \"john\",\n" .
            "      \"lastName\": \"doe\",\n" .
            "      \"address1\": \"201 S. Division St.\",\n" .
            "      \"postalCode\": \"48104-2201\",\n" .
            "      \"locality\": \"Ann Arbor\",\n" .
            "      \"administrativeArea\": \"MI\",\n" .
            "      \"country\": \"US\",\n" .
            "      \"phoneNumber\": \"999999999\",\n" .
            "      \"email\": \"test@cybs.com\"\n" .
            "    },\n" .
            "    \"amountDetails\": {\n" .
            "      \"totalAmount\": \"10\",\n" .
            "      \"currency\": \"GTQ\"\n" .
            "    }\n" .
            "  },\n" .
            "  \"paymentInformation\": {\n" .
            "    \"card\": {\n" .
            "      \"expirationYear\": \"2031\",\n" .
            "      \"number\": \"5555555555554444\",\n" .
            "      \"securityCode\": \"123\",\n" .
            "      \"expirationMonth\": \"12\",\n" .
            "      \"type\": \"002\"\n" .
            "    }\n" .
            "  }\n" .
            "}";
    }
}
