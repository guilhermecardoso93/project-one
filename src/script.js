$(document).ready(() =>{


    $(".navbar__menu-btn").on("click", function () {
        $(".navbar__links").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars");
        $(this).find("i").toggleClass("fa-times");
});

    
    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
    };
    $(".slider").slick(slickOptions);

    $('.footer__form-button').on('click',() => {
        const valeu = $('#email').vaç();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : email,
            Subject : "Por favor, me adione na newletter",
            Body : `Olá,
            Eu gostaria de ser adicionado na newsletter do site.
            Meu email é ${email},

            Obrigado!
            `,
        }).then(
          message => alert(message)
        );
    })
});

