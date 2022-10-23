<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="css/app.css">
        <link rel="stylesheet" href="css/bootstrap4.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    </head>
    <body class="antialiased">
       <div id="app"></div>
       <script src={{ asset("js/app.js") }}></script>
       <script src="js/bootstrap4-jquery.js"></script>
       <script src="js/bootstrap44-jsdeliver.js"></script>
       <script src="js/bootstrap.min.js"></script>
    </body>
</html>
