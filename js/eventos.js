$( function() {
    var detalhesExpandido = false;
    var detalhes = $('.detalhes-evento');
    $('.ver-mais').on('click', function(e){
        e.preventDefault();
        if(!detalhesExpandido) {
            detalhesExpandido = true;
            $(this).text('ver menos');
            detalhes.css('height','auto');            
        } else {
            detalhesExpandido = false;
            detalhes.removeAttr('style'); 
            $(this).text('ver mais');
        }
    });
    
    
    
    $( "#datepicker, .datepicker" ).datepicker({
        autoSize: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "dd-mm-yy",
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        dayNamesMin:["D", "S", "T", "Q", "Q", "S", "S"]

    });
    

        
    $('.modal').modal({
        ready: function(modal, trigger) { 
            loadRandomFile();
      }
    });

    

    var loadRandomFile = function() {    
        var randFile = Math.ceil(Math.floor(Math.random() * (4 - 0)) + 0);
        $.getJSON( 'js/arquivos.json', {
            format: "json"
        }).done(function( data ) {
            var arquivo = data.arquivos;
            $.each(arquivo[randFile], function(k,v){
                if(k == 'tags' && v.length > 0 ){
                    var HTML = '<ul class="tags">';
                $.each(v, function(k,t){
                    HTML += '<li class="tag"><a href="#">'+t+'</a></li>';
                });
                    HTML += '</ul>';
                    $('.file-'+k).html(HTML);
                } else {
                    $('.file-'+k).text(v);
                }
            });
        });
    }
    
    
    $('.carregar-mais').on('click', function(e){
        e.preventDefault();
        
    });
        
});