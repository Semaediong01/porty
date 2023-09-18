const sidebtn = document.querySelector('.sidebar');
const sideborder = document.querySelector('.sideborder');
const closebtn = document.querySelector('.close-btn');

sidebtn.addEventListener('click', function(){
    // console.log(sideborder.classList);
    sideborder.classList.add('sideclose');
   sideborder.classList.toggle('showsidebar');
   
});

closebtn.addEventListener('click', function(){
    sideborder.classList.add('showsidebar');
})