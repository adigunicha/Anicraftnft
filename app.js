let prevscroll = window.pageYOffset
window.onscroll=function(){
    let currentscroll=window.pageYOffset
    if(prevscroll>currentscroll){
      document.querySelector('nav').style.top="0px"

    }
    else{
        document.querySelector('nav').style.top="-100px" 
    }
  
    prevscroll=currentscroll

    if (window.scrollY >= 100) {
        document.querySelector('nav').classList.add("active")
      } else {
        document.querySelector('nav').classList.remove("active")
      }
}
const canclemenu=document.querySelector('.canclemenu')
const menubar=document.querySelector('.burgermenu')
const navbar=document.querySelector('.navtext')
menubar.addEventListener('click',()=>{
  navbar.style.display="flex"
  canclemenu.style.display="flex"
})

var elementindiv =navbar.querySelectorAll('*')
elementindiv.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    navbar.style.display="none"
    canclemenu.style.display="none"
  })
})
