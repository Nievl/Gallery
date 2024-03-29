<?php

$servername = "localhost:3306";
$username = "u1589_test";
$password = "Pe260c1j$";
$dbname = "u1589988_gallery";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_set_charset($conn, "utf8mb4");
$sql = "SELECT `id`, `name`, `path`, `thumbnail`, `year`, `description`, `date_creation`, `date_update` FROM `albums`";
$result = $conn->query($sql);

$albums = array(); // Initialize an array to store albums data

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {

        $albums[] = $row;
    }
    header('Content-Type: application/json');

    echo json_encode($albums);
} else {
    header('Content-Type: application/json');
    echo json_encode(array('error' => '0 results'));
}

$conn->close();

?>