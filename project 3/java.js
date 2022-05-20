function toggleTheme()
{
    document.querySelector(".places").classList.toggle("dark");
    document.querySelector(".place_card1").classList.toggle("dark_card");
    document.querySelector(".place_card2").classList.toggle("dark_card");
    document.querySelector(".place_card3").classList.toggle("dark_card");
    document.querySelector(".place_card4").classList.toggle("dark_card");

}

function changeFont(size){
     

    if(size==="small")
    {
        document.querySelector(".places_title").style.fontSize="2em";
    }

    else if (size==="medium"){
        document.querySelector(".places_title").style.fontSize="3em";
    }

    else {
        document.querySelector(".places_title").style.fontSize="4em";
    }
}