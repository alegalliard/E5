$( function() {
    var totalTags = 0;
    var totalChapters = 3;
    
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
        var list = $('.chapter-list');
        list.show();
        
        totalChapters++;
        
        var newChapter = $('#capitulo').val();
        
        var HTMLchapter = '<li class="chapter">'
                          +   '<a href="#editar" class="active">Capítulo '
                          +   totalChapters 
                          +   ' -'
                          +   newChapter
                          +   '</a>'
                          +   '<button class="edit-chapter">'
                          +       '<i class="ic-">x</i>'
                          +   '</button>'
                          +   '<button class="delete-chapter">'
                          +       '<i class="ic-edit-small"></i>'
                          +   '</button>'
                          + '</li>';
        list.append(HTMLchapter);
        $('#capitulo,#capitulo-desc').val('');
        
    });
    
    $('.switch-projeto').click(function(e){
        $('#voltar-projetos, #abre-projeto, #meus-projetos, #novo-projeto').toggle();
        
        e.preventDefault();
    });
    
    tinymce.init({ selector:'.tinyMce' });
    
});