$( function() {
    $('.go-out').on('click', function() {
        window.location = $(this).find('a').attr('href');
    });

    var perfilType = function(){
        var ref = window.location.href;
        var getParams = ref.split("?");

        if(getParams.length > 1){
            var activatePerfil = null;

            if(/aluno/.test(getParams[1]))
                activatePerfil = 'aluno';
            else if(/docente/.test(getParams[1]))
                activatePerfil = 'docente';
            else if(/tecnico/.test(getParams[1]))
                activatePerfil = 'tecnico';
            else if(/administrativo/.test(getParams[1]))
                activatePerfil = 'administrativo';
            else
                activatePerfil = 'outro';

            return activatePerfil;
        }

        return 'outro'
    }

    var DOMchangesPerfil = function(){   
        var perfilRadio = $('#perfil4');

        if(perfilType() == 'outro')
            $('.do-ita').hide();
        else
            $('.do-ita').show();

        if(perfilType() == 'tecnico' || perfilType() == 'administrativo')
            $('.tecnico-adm').show();
        else
            $('.tecnico-adm').hide();

        if(perfilType() == 'outro')
            $('.outro').show();
        else
            $('.outro').hide();


        switch(perfilType()){
            case 'docente':
                perfilRadio = $('#perfil1');
            break;
            case 'aluno':
                perfilRadio = $('#perfil2');
            break;
            case 'administrativo':
            case 'tecnico':
                perfilRadio = $('#perfil3');
            break;
        }

        perfilRadio.prop('checked',true);
        $('[name=tipo-perfil]').prop('disabled',true);

    }

    DOMchangesPerfil();
 });