var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.right="-250px"
menuBtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right ="0";
    }
    else{
        sidenav.style.right ="-250px";
    }
}

