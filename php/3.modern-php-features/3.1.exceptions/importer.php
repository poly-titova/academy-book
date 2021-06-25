<?php

$importer = new ContactsImporter("/tmp/contacts.csv", ['name', 'lastname', 'dob', 'status']);
try {
    $importer->import();
} catch (SourceFileException $e) {
    error_log("Не удалось обработать csv файл: " . $e->getMessage());
} catch (FileFormatException $e) {
    error_log("Неверный форма файла импорта: " . $e->getMessage());
}
