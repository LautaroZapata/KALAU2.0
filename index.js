document.addEventListener('DOMContentLoaded', function () {
    let menuSide = document.getElementById("menuSide");
let btnOpen = document.getElementById("btnOpen");
let body = document.getElementById("body");

btnOpen.addEventListener("click", menuOpenClose);

function menuOpenClose () {
    body.classList.toggle("bodyMovimiento");
    menuSide.classList.toggle("menuSideMovimiento");
}


let proyectosContainer = document.getElementById('videoCardsSection');

let imagenes = [
    {
        imgs:"LaNotaHDCelosa",
        link:"https://www.youtube.com/watch?v=M4Uk8jsDt8w&ab_channel=LaNotaHD"
    },
    {
        imgs:"NossDior",
        link:"https://www.youtube.com/watch?v=DhyfOU1MdqM&ab_channel=Noss"
    },
    {
        imgs:"NegrataPaRomperLaDiscoteca",
        link:"https://www.youtube.com/watch?v=BN-4UItroVo&ab_channel=ZEROCREWUY"
    },
    {
        imgs:"KidObbieExotica",
        link:"https://www.youtube.com/watch?v=KeVImYU-f2k&ab_channel=KiddObbie%E2%99%AA"
    },
    {
        imgs:"DaniTheKidFigura",
        link:"https://www.youtube.com/watch?v=l_80AK5X328&ab_channel=DaniTheKidd"
    },
    {
        imgs:"TitaCParaNoPerderte",
        link:"https://www.youtube.com/channel/UCCnLX6_51hypw3xqT8BCiNA"
    },
    {
        imgs:"AstyanAFuego",
        link:"https://www.youtube.com/watch?v=u9_LYDdVuiA&ab_channel=AstyanG"
    },
    {
        imgs:"LaNotaHDConfesion",
        link:"https://www.youtube.com/watch?v=aN5QqKWS-Fk&ab_channel=LaNotaHD"
    },
    {
        imgs:"Matu4Cubanas",
        link:"https://www.youtube.com/watch?v=P1Mer42dOAU&ab_channel=MatuuGt"
    },
    {
        imgs:"NegrataEntreCuatroParedes0",
        link:"https://www.youtube.com/watch?v=l8ubniqiyXc"
    },
    {
        imgs:"Fabri888Yo0",
        link:"https://www.youtube.com/watch?v=vHl3L5Gmiw0"
    },
    {
        imgs:"BandejaDeChocolatesDavRo",
        link:"https://www.youtube.com/watch?v=kgDxc7mSi9w&ab_channel=DavRo"
    },
    {
        imgs:"SoulWave",
        link:"https://www.youtube.com/watch?v=dPLos39ZQio&ab_channel=WAVE"
    },
    {
        imgs:"FiatUnoUzi",
        link:"https://www.youtube.com/watch?v=o28AthGeHLQ&ab_channel=Uziwalker"
    },
    {
        imgs:"RockstarFabri888",
        link:"https://www.youtube.com/watch?v=vHl3L5Gmiw0&ab_channel=FABRI888"
    },
    {
        imgs:"ScottSumar",
        link:"https://www.youtube.com/watch?v=EizXdyfPRkE&ab_channel=ScottWRLD"
    },
    {
        imgs:"TitaTripleS",
        link:"https://www.youtube.com/watch?v=ypCigWdiq7Y&ab_channel=Tita-COficial"
    },
    {
        imgs:"MatuRunAway",
        link:"https://www.youtube.com/watch?v=4_vJp4SRsX0&ab_channel=MatuuGt"
    },
    {
        imgs:"JontinyAbusadora",
        link:"https://www.youtube.com/watch?v=aGupPe_L1jc"
    },
    {
        imgs: "BrodyLejosDeTi",
        link: "https://www.youtube.com/watch?v=4h_hag5iBtA"
    },


]

imagenes.forEach((elemento) => {
    let img = document.createElement("a");
    
    img.setAttribute("id", "aImg");
    img.setAttribute("target","_blank")
    img.setAttribute("href",elemento.link);

    let printImg = this.createElement("img");
    
    printImg.setAttribute("src","img/" + elemento.imgs + ".png");
    printImg.setAttribute("class","img-fluid");
    
    img.appendChild(printImg);
    
    proyectosContainer.appendChild(img);
})

})
