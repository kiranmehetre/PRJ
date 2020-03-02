
    $(document).ready(function(){
        $('.toggle').click(function(){
           $(".menu").slideToggle("display-none");
        });
   
        var myFlipster = $('#coverflow').flipster({
            loop: true,
            scrollwheel: true,
            start: 'center',
            fadeIn: 400,
            buttons: true,
            autoplay: false,
            click: true,
            spacing: -0.6
        });

        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.querySelector('.scrollbar'), { alwaysShowTracks: true, thumbMinSize: 50 });
   
   
    });


    

    