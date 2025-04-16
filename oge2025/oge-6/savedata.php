<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $score = isset($_POST['score']) ? $_POST['score'] : '';
    $attempts = isset($_POST['attempts']) ? $_POST['attempts'] : '';
    $errors = isset($_POST['errors']) ? $_POST['errors'] : '';
    
    if (!empty($name)) {
        // Получаем текущее время
        $timestamp = date('Y-m-d H:i:s');

        // Формируем строку данных
        $data = "<tr><td>$timestamp</td><td>$name</td><td>$score</td><td>$attempts</td><td>$errors </td></tr>";
        $file = 'results.html';

        // Записываем данные в файл
        file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

        echo 'Данные успешно сохранены!';
    } else {
        echo 'Ошибка: Не все данные были отправлены.'.$name.' '.$score;
    }
} else {
    echo 'Ошибка: Неверный метод запроса.';
}
?>