const imgs = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control_prev');
const nextBtn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
     imgs[n].style.display = 'block';
}
changeSlide();

prevBtn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
 })

 nextBtn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    } else {
        n = 0;
    }
    changeSlide();
 })

 // Auto slide every 3 seconds

 const scrollContainer = document.querySelectorAll('.products');
    for(const item of scrollContainer)
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });