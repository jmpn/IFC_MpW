$(document).ready(function(){
    $.getJSON('api/galerias.php', function(galerias){
        console.log(galerias);
        $.each(galerias, function(key, galeria){
            $("#menu-galerias").append('<li class="menu" id="'+galeria.id+'">'+galeria.nome+'</li>');
        });


        $(".menu").click(function(){
            let id_galeria = $(this).attr('id');
            $.getJSON('api/imagens.php?gal='+id_galeria, function(imagens){
                console.log(imagens);
                $("#fotos").empty();
                $.each(imagens, function(key, imagem){
                    $("#fotos").append('<div class="foto" id="'+imagem.id+'"><img src="images/'+imagem.arquivo+'"/><p>'+imagem.descricao+'</p></div>');
                });
            });
        
        });
    });


});