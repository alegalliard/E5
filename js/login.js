$( function() {
    var mess = $('.alert');
    
    $('#entrar').on('click', function(e){
        e.preventDefault();
        
        var login = $('#login').val();
        var senha = $('#pass').val();

        if(login.length < 4 || senha.length < 4)
            mess.text('Digite seu login e senha');
        
        else if(login != 'teste-ita' || senha != 123456)
            mess.text('Login ou senha inválidos');
        
        else
            window.location = 'usuario-logado.html';
            
        mess.show();
        window.setTimeout(function(){
         mess.fadeOut();   
        },5000);
    });
    
    
    
    $('.switch-session').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var parent = $(this).data('parent');
        $(target).show();
        $('#'+parent).hide();
    });
    
    
    
    $('#recuperar').on('click', function(e){
        var prontuario = $('#prontuario').val();
        var email = $('#email').val();
        
        if(prontuario.length < 4 && email.length < 4)
            mess.text('Digite um cadastro válido');
        
        if(prontuario == 'teste-ita' || email == 'teste@ita.com.br') {
            mess.removeClass('error');
            mess.addClass('success');
            mess.html('<strong>Confirmação:</strong><br>Uma nova senha foi enviada para o seu email cadastrado.');
        } else {
            mess.text('Registro não encontrado');
        }
        mess.show();
        
        window.setTimeout(function(){
         mess.fadeOut(); 
            mess.toggleClass('error success');
        },5000);
        
        e.preventDefault();
    });
});