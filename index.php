<?php date_default_timezone_set('Australia/Melbourne');
$date = date('h-i-s-a', time());
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="css/main.css?<?php echo $date ; ?>">
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/materialize/js/bin/materialize.min.js"></script>
</head>
<body>
   <?php
    include('inc/home/block1.php');
    include('inc/home/block2.php');
    include('inc/home/block3.php');
    include('inc/home/block4.php');
    include('inc/home/block5.php');
    include('inc/home/footer.php');
    
    ?>
   
    
</body>
</html>