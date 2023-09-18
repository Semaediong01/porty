const sidebtn = document.querySelector('.sidebar');
const sideborder = document.querySelector('.sideborder');
const closebtn = document.querySelector('.close-btn')
const anim = document.getElementsByClassName('anim')
const occup = document.querySelector('.occup');
const occuptwo = document.querySelector('.occuptwo');
const  occupthree = document.querySelector('.occupthree')
const pics = document.querySelectorAll('.pics')
const arrow = document.querySelector('.arrow')
const boxes = document.querySelectorAll('.boxes')






sidebtn.addEventListener('click', function(){
    // console.log(sideborder.classList);
    sideborder.classList.add('sideclose');
   sideborder.classList.toggle('showsidebar');
   
});

closebtn.addEventListener('click', function(){
    sideborder.classList.add('showsidebar');
})

// function timing(){
//     if(occup.classList.contains('qwerty')){
//         console.log('sema')
//     }
//     else{
//         occup.style.cssText = ' opacity: 0;animation-name: occupation;animation-duration: 5s;'
//         occuptwo.style.cssText ='animation-name: occupationtwo;animation-delay: 5s;animation-duration: 5s;'
//         occupthree.style.cssText =' animation-name: occupationthree;animation-delay: 10s;animation-duration: 5s;'

//     }

//  }
// setInterval(timing,2000)


// function occupation(){
//     if(occup.classList.contains('opaone')){
//         occup.classList.remove('opaone')
//     }
//     else{
//         occup.classList.add('opatwo')
//         console.log('sema')
//     }
   
// }

// setInterval(occupation,500)

let currentElem = 0;
function occupation(){
    for (let i = 0; i < anim.length; i++) {
     if(anim[i].classList.contains('active-anim')){
        anim[i].classList.remove('active-anim');
        // currentElem = i;
        if (i == anim.length - 1) {
            currentElem = 0
        } else {
            currentElem = i + 1;
        }
        // anim[i+1].classList.add('active-anim');
     }
    }
    anim[currentElem].classList.add('active-anim');
   }
   setInterval(occupation,7000)

   let current = 0;
   function picture(){
    for (let j = 0; j < pics.length; j++) {
        if(pics[j].classList.contains('active-pic')){
            pics[j].classList.remove('active-pic');
            if (j == pics.length - 1) {
                current = 0
            } else {
                current = j + 1;
            }
        }
       
        
    }
    pics[currentElem].classList.add('active-pic');
   }
   setInterval(picture,3000)



   let elem = 0
   arrow.addEventListener('click', function(){
    for (let m = 0; m < boxes.length; m++) {
        if(boxes[m].classList.contains('boxes-active')){
            boxes[m].classList.remove('boxes-active');
            if (m == boxes.length - 1) {
                elem = 0
            } else {
                elem = m + 1;
            }
        }
       
        
    }
    boxes[elem].classList.add('boxes-active');

   })

