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

    $('.modal .signup .close, .wrapper .nav .signup').click( () => {
        $('.modal').toggle('show');
    })

    $('.modal .signup .signupBtn').click( () => {
        if($('#login').val() && $('#email').val() && $('#password').val() == $('#repassword').val()){ 
            $.ajax({
                url: `${APIurl}/signup`,
                method: 'POST',
                data:{
                    name: $('#login').val(),
                    email: $('#email').val(),
                    password: $('#password').val()
                }
            })
        }
    })

    function pipeDate(dt){
        var date =  new Date(dt*1000);
        var day = date.getUTCDate();
        var month = date.getMonth()+1;
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        return {day: this.zeroAdd(day), month: this.zeroAdd(month), hours: this.zeroAdd(hours), minutes: this.zeroAdd(minutes)};
    }
   function zeroAdd(number) {
        if (number < 10) return ('0' + number);
        else return number;
    }

});