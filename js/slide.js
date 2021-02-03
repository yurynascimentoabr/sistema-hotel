$(".abrir").on("click", function(){
    event.preventDefault();
    //Select do quarto, para preparação do código da reserva; LOGIN CLIENTE!

    $("#portfolioModal1").modal("hide");
        $("#portfolioModal2").modal("hide");
            $("#portfolioModal3").modal("hide");
     $("#portfolioModal7").modal({show: true});
})

$(document).ready(function(){
    
    $("#log").on('click', function(){
        event.preventDefault();
        $(".login2").removeClass('login2');
         $(".login1").addClass('login2');
     
    });
   
});