<?php

error_reporting(E_ALL);
try {
    unknown();
} catch (Error $error) {
    print("Ошибка:" . $error->getMessage());
}
