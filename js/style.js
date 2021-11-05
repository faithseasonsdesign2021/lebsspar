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

navigationButton();
styling();