function navigationButton(){
    $('.navigation-button').click(function(){
        $(".navigation-list-outer-wrapper").slideToggle(400);
    });
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let mask = document.getElementsByClassName("mask");
        let section = document.getElementsByClassName("landing-section");
        mask[0].style.height= "110vh";
        section[0].style.height ="110vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}

function cardButtons(){
    
    $(".btn-1").click(function(){
        $(".waxing-section-one").show();
        $(".waxing-section-two").hide();
        $(".waxing-section-three").hide();
    });

    $(".btn-2").click(function(){
        $(".waxing-section-one").hide();
        $(".waxing-section-two").show();
        $(".waxing-section-three").hide();
    });

    $(".btn-3").click(function(){
        $(".waxing-section-one").hide();
        $(".waxing-section-two").hide();
        $(".waxing-section-three").show();
    });

    //masssage buttons

    $(".massage-btn-1").click(function(){

        $(".massage-section-one").show();
        $(".massage-section-two").hide();
        $(".massage-section-three").hide();
        $(".massage-section-four").hide();

    });

    $(".massage-btn-2").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").show();
        $(".massage-section-three").hide();
        $(".massage-section-four").hide();
        
    });

    $(".massage-btn-3").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").hide();
        $(".massage-section-three").show();
        $(".massage-section-four").hide();
        
    });

    $(".massage-btn-4").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").hide();
        $(".massage-section-three").hide();
        $(".massage-section-four").show();
        
    });


    //buttons for the kiddies section 

    $(".kids-btn-1").click(function(){

        $(".kids-section-one").show();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-2").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").show();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-3").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").show();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-4").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").show();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-5").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").show();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-6").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").show();
        
    });

    //gallery section coding for buttons
    $(".massage-gallery-btn").click(function(){
        $(".massage-gallery-section").show();
        $(".nails-gallery-section").hide();
    })

    $(".nails-gallery-btn").click(function(){
        $(".massage-gallery-section").hide();
        $(".nails-gallery-section").show();
    })

}

navigationButton();
styling();
cardButtons();