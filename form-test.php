<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Получение данных по артикулу</title>
</head>
<body>
    <h1>Получение данных по артикулу</h1>
    <form method="GET" action="">
        <label for="artInput">Артикул:</label>
        <input type="text" id="artInput" name="art" value="<?php echo $art; ?>">
        <button type="submit">Отправить</button>
    </form>
    
    <?php if (!empty($tableHtml)): ?>
        echo '<h2 style="margin-top: 20px;">Результаты:</h2>'
        echo '<div class="table table-lightblue table-striped">
            <?php echo $tableHtml; ?>
        </div>'        
    <?php endif; ?>
    <script src="jquery-3.7.0.min.js"></script>
    <script src="js.js"></script>
    <script src="bootstrap.bundle.min.js"></script>
</body>
</html>


<?php
$login = '493358_stroyzar';
$pass = 'sAVDkrEbqd';
$art = isset($_GET['art']) ? $_GET['art'] : '';
$cross = 0;

if (!empty($art)) {
    $url = "https://api.forum-auto.ru/v2/listgoods?login=$login&pass=$pass&art=$art&cross=$cross";
    $response = file_get_contents($url);

    if ($response !== false) {
        $data = json_decode($response, true);
        if (is_array($data)) {
            echo '<div class="container">';
                echo '<div class=row>';            
                    echo '<table class="table table-dark table-striped col-md-8 col-sm-8 col-lg-6">';
                    echo '<tr><th>Артикул</th><th>Бренд</th><th>Наименование</th><th>Доставка (дни)</th><th>Цена</th></tr>';
                    
                    foreach ($data as $item) {
                        echo '<tr>';
                        echo '<td>'.$item['art'].'</td>';
                        echo '<td>'.$item['brand'].'</td>';
                        echo '<td>'.$item['name'].'</td>';
                        echo '<td>'.$item['d_deliv'].'</td>';
                        echo '<td>'.$item['price'].'</td>';
                        echo '</tr>';
                    }
                    
                    echo '</table>';
                echo '</div>';
            echo '</div>';
        } else {
            echo 'Ошибка при обработке данных.';
        }
    } else {
        $tableHtml = 'Ошибка получения данных';
    }
}
?>
