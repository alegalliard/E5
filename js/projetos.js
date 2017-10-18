$( function() {
    var totalTags = 0;
    var totalFiles = 0;
    
    $('.add-tag i').on('click', function(e){
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
    
    
    $('.add-attach').on('click', function(e){
        e.preventDefault();
        var list = $('.chapter-list');
        list.show();
        
        totalFiles++;
        
        var newChapter = $('.attach-input').val();
        
        var HTMLchapter = '<li class="chapter">'
                          +   '<a href="#editar" class="active">Arquivo '
                          +   totalFiles 
                          +   ' -'
                          +   newChapter
                          +   '</a>'
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
    
    $('.attach-input').on('change', function(){
        $('label[for=attach]').text($(this)[0].files[0].name);
    });
    

    
});