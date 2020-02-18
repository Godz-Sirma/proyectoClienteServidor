<?php
    if($_GET['kiTitulo']==1){
        print'
        {
            "kiTitulo":1,
            "xiDni":1111,
            "asNombre":"Ford",
            "asApellido":"Tachon",
            "asDireccion":"Bíceps Avenue",
            "asImagen":"./assets/imagenes/fordtachon.png",
            "aiEdad":28,
            "asMensaje":"Eres muy grande y bello"
        }
        ';
    }
    if($_GET['kiTitulo']==2){
        print'
        {
            "kiTitulo":2,
            "xiDni":2222,
            "asNombre":"Toy",
            "asApellido":"Mamao",
            "asDireccion":"Pierna Street",
            "asImagen":"/assets/imagenes/toymamao.png",
            "aiEdad":22,
            "asMensaje":"Tus piernas van a parecer tocones"
        }
        ';
    }
    if($_GET['kiTitulo']==3){
        print'
        {
            "kiTitulo":3,
            "xiDni":3333,
            "asNombre":"Sor",
            "asApellido":"Presa",
            "asDireccion":"Nuca Square",
            "asImagen":"/assets/imagenes/sorpresa.png",
            "aiEdad":25,
            "asMensaje":"JAJA salu2"
        }
        ';
    }

?>