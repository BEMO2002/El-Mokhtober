












// show lab
function showContent(option) {
    const patientContent = document.getElementById("patientContent");
    const businessContent = document.getElementById("businessContent");

    if (option === 'patient') {
        patientContent.style.display = 'block';
        businessContent.style.display = 'none';
    } else if (option === 'business') {
        patientContent.style.display = 'none';
        businessContent.style.display = 'block';
    }
}




// slide packages
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        dots: true,
        arrows :false,
        responsive :[ 
            {
                breakpoint : 990,
                settings :{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 974,
                settings :{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 1119,
                settings :{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 520,
                settings :{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 504,
                settings :{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 459,
                settings :{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
            {
                breakpoint : 767,
                settings :{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: true,
                    arrows :false,
                }
            },
        ]
});
});


//random background (About-section)
$(document).ready(function(){
    $('.image').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows :false,
        autoplay :true,
    });
});


//input search

const searchIcon = document.querySelector('.find');
const searchInput = document.querySelector('.search-input');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');

searchIcon.addEventListener('click', () => {
    searchInput.style.opacity = '1';
    overlay.style.display = 'block';
    closeButton.style.opacity = '1';
});

closeButton.addEventListener('click', () => {
    searchInput.style.opacity = '0';
    overlay.style.display = 'none';
    closeButton.style.opacity = '0';
});




//sweet alert
let alert = document.querySelectorAll(".link");
alert.forEach(button => {
    button.addEventListener("click" , function(){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Must Login First!",
            footer: '<a href="#">Why do I have this issue?</a>',
            confirmButtonColor: "#db453f",
        });
    })
});


// up button

let btn =document.querySelector(".top");
window.onscroll = function(){
        if(window.scrollY >= 600){
            btn.style.display = "block";
        }
        else{
            btn.style.display = "none";
        }
}

btn.onclick = function(){
    window.scrollTo({
        left : 0 ,
        top : 0,
        behavior :"smooth"
    });
};

// partener
$('.part').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    ]
});