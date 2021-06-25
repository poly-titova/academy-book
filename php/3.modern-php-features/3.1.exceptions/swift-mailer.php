<?php

$transport = Swift_SmtpTransport::newInstance();
$mailer = Swift_Mailer::newInstance($transport);

try {
    $message = Swift_Message::newInstance()->setSubject("Тестовое сообщение")->setTo("user@mail.com")->setBody("msg text");
    $result = $mailer->send($message);
} catch (Swift_TransportException $e) {
    error_log("Не удалось отправить сообщение. Ошибка: " . $e->getMessage());
}
