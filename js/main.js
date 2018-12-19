$(document).ready(function() {
    const APIurl = 'http://localhost:1337';
    
    $('.signin').click( () => {
        if($('.login').val() && $('.password').val()){
            $.ajax({
                url: `${APIurl}/signin`,
                method: 'POST',
                data:{
                    login: $('.login').val(),
                    password: $('.password').val()
                }
            })
        }
    }) 

});