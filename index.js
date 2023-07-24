
// menu toggle 

let menuIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-xmark");
let list = document.querySelector(".ulNav");


menuIcon.addEventListener("click",function(){
list.style.right="0"; 
menuIcon.style.display="none";
});

closeIcon.addEventListener("click",function(){
    list.style.right="-200px";
    menuIcon.style.display="block";
})


// Animation the Header  text


let nameHeader = document.querySelector(".headerText ul li span");

const textLode = () => {

setTimeout(() => {
    nameHeader.textContent="Mohamad";

},0);

setTimeout(() => {
    nameHeader.textContent="Developer";

},4000);

setTimeout (() => {
    nameHeader.textContent="Web Designer";
},8000);

}

textLode();

setInterval(textLode,12000);



// About me Toggle    


let tabLinks =document.getElementsByClassName("tab-links");
let tabcontents =document.getElementsByClassName("tab-contents");

function opentab (tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
window.event.currentTarget.classList.add("active-link");

document.getElementById(tabname).classList.add("active-tab");

}


// scroll to top 

let scroll = document.querySelector(".scroll");

window.onscroll = function(){
    if(window.scrollY>=1000){
        scroll.style.display="block";
    }else{
        scroll.style.display="none";
    }
}

scroll.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
};

// color menu display

let menuColor= document.querySelector(".color-menu");
let iconColor = document.querySelector(".fa-paintbrush");

iconColor.addEventListener("click", function(){
    menuColor.style.display="block";
    iconColor.style.display="none";

});

menuColor.addEventListener("click",function(){
    menuColor.style.display="none";
    iconColor.style.display="flex";

});



//  switch color for the website its work wenn i use j query
   
$(document).ready(function(){
    $(document).on("click", ".color-menu li" , function(){
        const color=$(this).data("color");

        document.documentElement.style.setProperty("--background" ,color);
    });
});

   /* 
let lis = document.querySelectorAll(".color-menu li");
let thisColor = getComputedStyle(document.documentElement).getPropertyValue("--background");

lis.forEach(li => {
  li.addEventListener("click", function () {
document.documentElement.style.setProperty("--background", $(this).data("color"));
  })
})
*/



// contact form work. 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxhmINRRhiIMx-3YkYLclt5AU18DK_iZlqf_CaFQrxpi20Rzr-SQ01S9NTqRkj4UQk3/exec'
const form = document.forms['submit-to-google-sheet'];
const msg= document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
setTimeout(function(){
    msg.innerHTML=""
},5000)
  form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})