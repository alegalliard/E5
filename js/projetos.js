$( function() {
    var totalTags = 0;
    var totalChapters = 0;
    
    $('.add-tag').on('click', function(e){
        e.preventDefault();
        var newKeyword = $('#keywords-projeto');
        var name = newKeyword.val();
        if(name.length > 3){
            totalTags++;
            $('#insert-keywords').append('<li class="tag added"><a href="#">'+name+'</a><input type="hidden" name="keywods['+totalTags+']"></li>');
            
            newKeyword.val('');
        
            $(document).find('.added a').on('click', function(e){
                e.preventDefault();
                $(this).remove();
                totalTags--;
            });
        }
    });
    
    
    $('.add-chapter').on('click', function(e){
        e.preventDefault();
        var list = $('.list-chapters');
        list.show();
        
        totalChapters++;
        
        var newChapter = $('#capitulo').val();
        
        var HTMLchapter = '<li class="col s12 m12 l6">'
                +'<div class="white shadow-on-large">'
                    +'<div class="chapter-index">'
                    +    totalChapters
                    +'</div>'
                    +'<div class="chapter-block">'
                    +    '<h4 class="chapter-title">'+newChapter+'</h4>'
                    +    '<div class="links-row">'
                    +        '<a href=""><i class="ic-"></i>excluir</a>'
                    +        '<a href="">editar <i class="ic-edit-small"></i></a>'
                    +    '</div>'
                    +'</div>'
                +'</div>'
                +'</li>';
        list.append(HTMLchapter);
        
        
    });
});