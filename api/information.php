<?php

$host = "localhost";
$user = "root";
$password = "KixQ117gN";
$dbname = "silex_test";
$id = "";

$con = mysqli_connect($host, $user, $password, $dbname);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

switch ($method) {
    case 'GET':
        $id = $_GET['id'];
    break;
    case 'POST':
        $selectedType = $_POST["selectedType"];
        $fileTitle = $_POST["fileTitle"];
        $uploader = $_POST["uploader"];
        $remark = $_POST["remark"];
    break;
}

$result = mysqli_query($con)

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; ＄i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($con);
}


$con->close();

