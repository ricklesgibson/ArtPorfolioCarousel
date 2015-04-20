var myCarousel = $('#myCarousel')
, carouselLinkedNav = $('.carousel-linked-nav')
, carouselLinkedProjects = $('.carousel-linked-projects')
, allSlides = $('#allSlides').find('div.item')
// invoke the carousel
$('#myCarousel').carousel({
  interval: 3000
});

/* SLIDE ON CLICK */ 

carouselLinkedNav.find('li > a').click(function() {
    var $this = $(this)
    // grab href, remove pound sign, convert to number
      , item = $this.attr('href').substring(1) | 0;

    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);

    // remove current active class
    carouselLinkedNav.find('.active').removeClass('active');

    // add active class to just clicked on item
    $this.closest('li').addClass('active');

    // don't follow the link
    return false;
});

carouselLinkedProjects.find('div > a').click(function() {
    console.log(carouselLinkedProjects.find(' li > a'));
    carouselLinkedProjects.find('div').removeClass('active')
    $(this).closest('div').addClass('active')
    
    var currentProject = $(this).data('project')
    
     myCarousel.find('.item').remove()
     $slides = allSlides.filter( function () { 
          return $(this).data('project') == currentProject 
     })
     
     $slides.eq(0).addClass('active')
     
     console.log(this, currentProject , $slides )
     
     myCarousel.find('.carousel-inner').append($slides)
     
     myCarousel.carousel("pause").removeData().carousel(0)
    
    return false
});
/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
myCarousel.bind('slid', function() {

    // remove active class
    carouselLinkedNav.find('.active').removeClass('active');

    // get index of currently active item
    var idx = myCarousel.find('item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});


// end carousel


// theme scripts

// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

// end theme JS