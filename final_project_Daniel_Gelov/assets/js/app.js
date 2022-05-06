
$(document).ready(function() {
 $('.buffon').on('click', function() {
      $('.buffon').css({
        'font-style' : 'italic',
      });
 });  

 $('.ucl').mouseenter(function() {
    if($('.year').css('display') == 'none') {
      $('.year').fadeIn("slow")
    } else {
      $('.year').fadeOut("slow")
    }
 })
 $('.dropdown').mouseleave(function() {
      $('.year').fadeOut("slow")
 });

 $('.next').on('click', function() {
    let currentImg = $('.active-img');
    let nextImg = currentImg.next();

    console.log(nextImg.length);

    if(nextImg.length) {
      currentImg.removeClass('active-img');
      nextImg.addClass('active-img');
    }
  });

  $('.prev').on('click', function() {
    let currentImg = $('.active-img');
    let prevImg = currentImg.prev();

    if(prevImg.length) {
      currentImg.removeClass('active-img');
      prevImg.addClass('active-img');
    }
  });

  $('#info4').mouseenter(function() {
      $('.match').fadeIn("slow")
  });
  $('#info4').mouseleave(function() {
      $('.match').fadeOut("slow")
  });

  function nameValidation() {
        let firstName = $('input[name = first-name]');
        let lastName = $('input[name = last-name]');

        if (firstName.val() == 0 || !isNaN(firstName.val())) {
            firstName.addClass('danger');
            alert('Please enter your valid first name');
        } else {
            firstName.removeClass('danger')
        }
        if (lastName.val() == 0 ||  !isNaN(firstName.val())) {
            lastName.addClass('danger');
            alert('Please enter your valid last name');
        } else {
            lastName.removeClass('danger');
        }

    }
        function emailValidation () {
            let email = $('input[name = email]');
            if (email.val() != 0) {
                email.removeClass('danger');
            } else {
                email.addClass('danger');
                alert('Plase enter your email');
            }
        }

        function textValidation() {
            let message = $('textarea');
            let messageLength = message.val().length;

            if(message.val() == 0) {
                message.addClass('danger');
                alert('Please enter some text');
            } else {
                if (messageLength > 250) {
                    message.addClass('danger');
                    alert('Your message is too long');
                } else {
                    message.removeClass('danger');
                }
            }
        }

        $('.btn-1').on('click' , function(e) {
            e.preventDefault();
            nameValidation();
            emailValidation()
            textValidation();
        })
});

// tabs
 $(function () {
    $('#news').tabs()
  })
//galeri

filterSelection("all")
 function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
  function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
} 
  function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//twitter
$('#twitter_slider .owl-carousel').owlCarousel({
            stagePadding: 200,
            loop:true,
            margin:0,
            nav:false,
            items:1,
            lazyLoad: true,
            autoplay: true,
          autoplayTimeout:5000,
          autoplayHoverPause:true,
            nav:false,
          responsive:{
                0:{
                    items:1,
                    stagePadding: 60
                },
                600:{
                    items:1,
                    stagePadding: 100
                },
                1000:{
                    items:1,
                    stagePadding: 200
                },
                1200:{
                    items:1,
                    stagePadding: 250
                },
                1400:{
                    items:1,
                    stagePadding: 300
                },
                1600:{ 
                    items:1,
                    stagePadding: 350
                },
                1800:{
                    items:1,
                    stagePadding: 400
                }
            }
        });


