<?php
// db_connect.php

$servername = "localhost"; // Update with your database server name
$username = "root";        // Update with your database username
$password = "";            // Update with your database password
$dbname = "pet_shop";      // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
