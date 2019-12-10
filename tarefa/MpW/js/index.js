

$(document).ready(function(){

    $('#loader-fotos').hide();

    $.getJSON('api/galerias.php', function(galerias){
        console.log(galerias);
        $.each(galerias, function(key, galeria){
            $("#menu-galerias").append(
                `<li class="nav-item">
                    <a class="menu nav-link" id="${galeria.id}">${galeria.nome}</a>
                </li>`
            );
        });


        $(".menu").click(function(){
            let id_galeria = $(this).attr('id');
            $('#loader-fotos').show();
            $.getJSON('api/imagens.php?gal='+id_galeria, function(imagens){
                console.log(imagens);
                $("#fotos").empty();
                $.each(imagens, function(key, imagem){
                   
                    
                    
                    $("#fotos").append(
                        `<div class="foto mt-5" class="col-md-8" id="${imagem.id}">
                            <div class="card m-2 shadow">
                                <div class="card-body">
                                    <a href="images/${imagem.arquivo}">
                                        <img src="images/${imagem.arquivo}" class="img-thumbnail shadow img" width="500"/>
                                    </a>
                                </div>
                                <div class="card-footer">
                                    <p>${imagem.descricao}</p>
                                </div>
                            </div>
                        </div>`
                    );
                   
                });
            });
            $('#loader-fotos').hide();
        });
    });

});