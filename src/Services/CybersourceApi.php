<?php

namespace App\Services;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CybersourceApi
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function fetchGitHubInformation()
    {
        $request_host = "apitest.cybersource.com";
        $merchant_id = "visanetgt_fuentesdelnorte";
        $merchant_key_id = "a466340f-e936-41fe-97ea-676eb09307ea";
        $merchant_secret_key = "S9vBxoLAJh9wvSMnIGuARr85ThX0JuzHW7Cz2Jm4Bo8=";

        $payload = json_encode($this->setPayload([]));
        $resource = "/pts/v2/payments/";
        $method = "post";
        $statusCode = -1;
        $url = "https://" . $request_host . $resource;

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
        // $statusCode = 200
        // $contentType = 'application/json'
        // $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]

        return $content;
    }

    public function GenerateDigest($requestPayload)
    {
        $utf8EncodedString = utf8_encode($requestPayload);
        $digestEncode = hash("sha256", $utf8EncodedString, true);
        return base64_encode($digestEncode);
    }

    public function setPayload($data)
    {

        $data = [
            'code' => '069551001',
            'commerceIndicator' => 'internet',
            'firstName' => 'doe',
            'lastName' => 'john',
            'address1' => 'n',
            'postalCode' => 'n',
            'locality' => 'n',
            'administrativeArea' => 'n',
            'country' => 'GT',
            'phoneNumber' => '999999999',
            'email' => 'n',
            'totalAmount' => '10',
            'currency' => 'GTQ',
            'expirationYear' => '2031',
            'number' => '5555555555554444',
            // 'securityCode' => '123',
            'expirationMonth' => '12',
            // 'type' => '002',
        ];

        return [
            // 'clientReferenceInformation' => ['code' => $data['code']],
            // 'processingInformation' => ['commerceIndicator' => $data['commerceIndicator']],
            'orderInformation' => [
                'billTo' => [
                    'firstName' => $data['firstName'],
                    'lastName' => $data['lastName'],
                    'address1' => $data['address1'],
                    'postalCode' => $data['postalCode'],
                    'locality' => $data['locality'],
                    'administrativeArea' => $data['administrativeArea'],
                    'country' => $data['country'],
                    'phoneNumber' => $data['phoneNumber'],
                    'email' => $data['email']
                ],
                'amountDetails' => [
                    'totalAmount' => $data['totalAmount'],
                    'currency' => $data['currency']
                ]
            ],
            'paymentInformation' => [
                'card' => [
                    'expirationYear' => $data['expirationYear'],
                    'number' => $data['number'],
                    // 'securityCode' => $data['securityCode'],
                    'expirationMonth' => $data['expirationMonth'],
                    // 'type' => $data['type'],
                ]
            ]
        ];

        // $payload = "{\n" .
        //     "  \"clientReferenceInformation\": {\n" .
        //     "    \"code\": \"069551001\"\n" .
        //     "  },\n" .
        //     "  \"processingInformation\": {\n" .
        //     "    \"commerceIndicator\": \"internet\"\n" .
        //     "  },\n" .
        //     "  \"orderInformation\": {\n" .
        //     "    \"billTo\": {\n" .
        //     "      \"firstName\": \"john\",\n" .
        //     "      \"lastName\": \"doe\",\n" .
        //     "      \"address1\": \"201 S. Division St.\",\n" .
        //     "      \"postalCode\": \"48104-2201\",\n" .
        //     "      \"locality\": \"Ann Arbor\",\n" .
        //     "      \"administrativeArea\": \"MI\",\n" .
        //     "      \"country\": \"US\",\n" .
        //     "      \"phoneNumber\": \"999999999\",\n" .
        //     "      \"email\": \"test@cybs.com\"\n" .
        //     "    },\n" .
        //     "    \"amountDetails\": {\n" .
        //     "      \"totalAmount\": \"10\",\n" .
        //     "      \"currency\": \"GTQ\"\n" .
        //     "    }\n" .
        //     "  },\n" .
        //     "  \"paymentInformation\": {\n" .
        //     "    \"card\": {\n" .
        //     "      \"expirationYear\": \"2031\",\n" .
        //     "      \"number\": \"5555555555554444\",\n" .
        //     "      \"securityCode\": \"123\",\n" .
        //     "      \"expirationMonth\": \"12\",\n" .
        //     "      \"type\": \"002\"\n" .
        //     "    }\n" .
        //     "  }\n" .
        //     "}";
        
    }
}
