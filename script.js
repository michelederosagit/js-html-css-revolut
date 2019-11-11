$(document).ready(function() {
    
    // Dropdown min-width 1020px;
    $(".dropdown-global").click(function(){
    //Controllo che nessun Dropdown abbia la classe active
    var isVisible = $(this).find(".dropdown-content").hasClass("active");
    
    // Rimuovo a prescindere tutte le classi active
    $(".dropdown-content").removeClass("active");
    $(this).css("color", "#8b959e"); // Modifico il colore
    $(this).find("span").html("<i class=\"fas fa-angle-down\"></i>"); // Modifico l'icona
    // Se nessun drop ha la classe active allora eseguo questo
    if (isVisible == false){
        $(this).find(".dropdown-content").toggleClass("active");
        $(this).css("color","black");
        $(this).find("span").html("<i class=\"fas fa-angle-up\"></i>");
    }
    });

    // Apertura e chiusura menu mobile. 
    // Aggiungo la classe active se l'hamburger viene cliccato
    $(".fas.fa-bars").click(function(){
        $(".mobile-content").addClass("active");
    });

    // Rimuovo la classe active se l'hamburger viene chiuso
    $(".close").click(function(){
        $(".mobile-content").removeClass("active");
    });

    // Apertura e chiusura Drop da Mobile
    $(".mobile-drop").click(function(){
        //Controllo che non ci siano già dopdown da mobile aperti
        var mobileMenu = $(this).find(".mobile-drop-content").hasClass("active");

        //Rimuovo a prescindere tutte le classi active
        $(".mobile-drop-content").removeClass("active");

        //Se nessun drop ha la classe active allora eseguo questo
        if (mobileMenu == false){
            $(this).find(".mobile-drop-content").toggleClass("active");
            $( ".mobile-drop-content" ).fadeIn( "slow");
        };
    });
});