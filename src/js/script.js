// TODO

// Changer la couleur du texte

const Amettreenrouge = document.querySelector("#a-mettre-en-rouge")

 Amettreenrouge.style.color = 'red'

// Réagir a un click

const EnRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")

 EnRougeSuiteAClick.addEventListener("click", (evt)=>{
    EnRougeSuiteAClick.style.color = "red"
})

// Trouver tous les H2

const collH2 = document.querySelectorAll("H2");
 collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color ="red";
    });
});