const toggleNavBarBtn=document.getElementById('toggle-navbar');
const navBarEl=document.getElementById('pc-and-tablet-navbar');
const overlayEl=document.getElementById('overlay')

let isNavBarOpen=false

const toggleNavBar=function(){
    if(!isNavBarOpen){
        navBarEl.style.right='0';
        overlayEl.style.display=`block`;
        toggleNavBarBtn.innerHTML=` <i class="fa-solid fa-close" id="menu-icon"></i> `
        isNavBarOpen=true;
    }else{
        navBarEl.style.right='-200%';
        overlayEl.style.display=`none`;
        toggleNavBarBtn.innerHTML=` <i class="fa-solid fa-bars" id="menu-icon"></i> `
        isNavBarOpen=false;
    }
}

toggleNavBarBtn.addEventListener('click',toggleNavBar);

const navLinks=document.querySelectorAll('li a');

navLinks.forEach(link=>{
    link.addEventListener('click',toggleNavBar);
})
overlayEl.addEventListener('click',toggleNavBar);

