<?php
$file = 'link.txt';
if (file_exists($file)) {
    $url = trim(file_get_contents($file));
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        header("Location: $url", true, 302);
        exit;
    }
}
echo "Ссылка временно недоступна";
?>
