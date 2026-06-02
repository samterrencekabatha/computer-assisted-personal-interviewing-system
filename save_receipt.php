<?php

header("Content-Type: application/json");

$data = file_get_contents("php://input");

if(!$data){
    echo json_encode([
        "status"=>"error",
        "message"=>"No data received"
    ]);
    exit;
}

if(!file_exists("receipts")){
    mkdir("receipts", 0777, true);
}

$filename =
"receipts/" .
date("Ymd_His") .
"_receipt.json";

file_put_contents($filename, $data);

echo json_encode([
    "status"=>"success",
    "message"=>"Receipt saved"
]);

?>