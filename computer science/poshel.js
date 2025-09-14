document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const firstForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    if (signInBtn && signUpBtn && container) {
        signInBtn.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });

        signUpBtn.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });
    }

    if (firstForm) {
        firstForm.addEventListener("submit", (e) => e.preventDefault());
    }
    
    if (secondForm) {
        secondForm.addEventListener("submit", (e) => e.preventDefault());
    }

    console.log("Форма готова к работе!");
});