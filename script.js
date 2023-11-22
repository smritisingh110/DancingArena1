burger=document.querySelector('.burger')
head=document.querySelector('.head')
visiblenav=document.querySelector('.visibility-class')
headerbgColor=document.querySelector('.headerbgColor')

burger.addEventListener('click',()=>{

    visiblenav.classList.toggle('visibility-class')
    head.classList.toggle('head')
    headerbgColor.classList.toggle('headerbgColor')
})