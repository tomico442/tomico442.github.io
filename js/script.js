// event pada saat link di klik
$(document).ready(function () {
    $('a.page-scroll').on('click', function(e){
    
        //get href
        var tujuan = $(this).attr('href');
        // get element ybs
        var elementTujuan = $(tujuan);
        //Move Scroll
        $('html , body').animate({
            scrollTop: elementTujuan.offset().top
        }, {
            easing: 'easeInOutBounce',
            duration: 5000
        });
        
    
        e.preventDefault();
    });

    });

