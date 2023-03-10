let menu = document.getElementById("menu")

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>100){
        menu.classList.add("menusecundario")
        menu.classList.remove("menuprincipal")
    }else{
        menu.classList.remove("menusecundario")
        menu.classList.add("menuprincipal")
    }
})