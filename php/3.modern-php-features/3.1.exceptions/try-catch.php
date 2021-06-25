<?php

function troubleMaker() {
    if (!file_put_contents("/etc/usr/data", "test data")) {
        throw new \Exception("Файл недоступен для записи!");
    }
}

try {
    troubleMaker();
}

catch (Throwable $e) {
    error_log("Не удалось записать данные. Ошибка: " . $e->getMessage());
}
