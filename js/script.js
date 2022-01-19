



    function Validate() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        var text;

        error_message.style.padding = "10px"

        if (name.length < 4) {
            text = "Please enter a valid name";
            error_message.innerHTML = text;
            return false;
        }

        if (email.indexOf("@") == -1 || email.length < 6) {
            text = "Please enter a valid email";
            error_message.innerHTML = text;
            return false;
        }

        if (message.length <= 140) {
            text = "Message should be more than 140 characters";
            error_message.innerHTML = text;
            return false;
        }
        alert("Form submitted successfully!")
        return true;
    };


// counterMaster
// $(document).ready(function () {
//     $(".counter").counterUp({
//         delay: 10,
//         time: 1500
//     })
// })
$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 1500,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });

})

// Counter master ends
// Initialize Swiper in testimonials
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 100,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});

// from template 