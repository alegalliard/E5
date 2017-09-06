<?php date_default_timezone_set('Australia/Melbourne');
$date = date('h-i-s-a', time());
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>ITA</title>
    <meta name="description" content="">
    <meta name="robots" content="index, follow">
<!--  Se for importante indexar o site no Google, não se esqueça 
       de permitir a personalização  da TITLE (até 60 chars), a 
       META-DESCRIPTION (até 140 chars) 
       e META-ROBOTS para cada página. 
       
       Páginas restritas: Não é necessário personalizar a meta-description, 
       somente a title. Robots deve constar com content noindex,nofollow
       
       -->
    
    
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="css/main.css?<?php echo $date ; ?>">
    <link rel="stylesheet" href="vendor/jquery-ui-1.12.1.custom/jquery-ui.min.css">
    <link rel="stylesheet" href="vendor/jquery-ui-1.12.1.custom/jquery-ui.theme.min.css">
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/materialize/js/bin/materialize.min.js"></script>
    <script src="vendor/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
    <script>
        $( function() {
            $( "#datepicker" ).datepicker({
                autoSize: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                dateFormat: "dd-mm-yy",
                monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
                dayNamesMin:["D", "S", "T", "Q", "Q", "S", "S"]

            });
            
            $('.icon-list').on('click', function(){
                $('.full-itens').show();
                $('.icon-list').hide();
            });
            $('.collapse').on('click', function(){
                $('.full-itens').hide();
                $('.icon-list').show();
            });
            
        });
    </script>
</head>
<body>
   <?php
    include('inc/home/menu.php');
    include('inc/home/block1.php');
    include('inc/home/block2.php');
    include('inc/home/block3.php');
    include('inc/home/block4.php');
    include('inc/home/block5.php');
    include('inc/home/footer.php');
    
    ?>
   
    
</body>
</html>