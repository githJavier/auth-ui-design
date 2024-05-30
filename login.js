document.addEventListener("DOMContentLoaded", function(){
    //Overlay de los textos
    const overlay = document.getElementById("overlay");
    //Elementos del login
    const loginBtn = document.getElementById("loginBtn");
    const overlayLogin = document.getElementById("login-overlay-left");
    const textLogin = document.getElementById("change-login");
    //Elementos del create Account
    const createBtn = document.getElementById("createBtn");
    const textCreate = document.getElementById("change-create");
    const overlayCreate = document.getElementById("create-overlay-rigth")
    
    //Evento para cambiar al Create Account
    loginBtn.addEventListener("click", function(){
        overlay.classList.remove("overlay-text-right");
        overlay.classList.add("overlay-text-left");
        textLogin.classList.add("d-none");
        textCreate.classList.remove("d-none");
        overlayCreate.classList.remove("create-overlay");
        overlayLogin.classList.remove("login-overlay-position");
        overlayCreate.classList.add("create-overlay-position");
        overlayLogin.classList.add("login-overlay");
        //overlayLogin.classList.add("d-none");


    });
    //Evento para cambiar al login
    createBtn.addEventListener("click", function(){
        overlay.classList.remove("overlay-text-left");
        overlay.classList.add("overlay-text-right");
        textCreate.classList.add("d-none");
        textLogin.classList.remove("d-none");
        overlayCreate.classList.remove("create-overlay-position");
        overlayCreate.classList.add("create-overlay");
        overlayLogin.classList.add("login-overlay-position");
        
    });

    
        /*formCreate.classList.remove("d-none");
        textCreate.classList.remove("d-none");
        overlay.classList.add("right");

        formLogin.classList.add("d-none");
        textLogin.classList.add("d-none");*/

        /*
        setTimeout(() => {
            formCreate.classList.add("visible"); // Pequeña demora para asegurar que la transición se aplica
            formLogin.classList.add("ocultar");
        }, 10); 
    });*/

    /*Evento para cambiar al login
    createBtn.addEventListener("click", function(){
        formLogin.classList.remove("d-none");

        textLogin.classList.remove("d-none");
        formCreate.classList.add("d-none");
        
        textCreate.classList.remove("d-flex");
        textCreate.classList.add("d-none");

        setTimeout(() => {
            formCreate.classList.remove("visible");
            formLogin.classList.remove("ocultar");
        }, 10);
    });*/


});