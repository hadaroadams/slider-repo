console.log("hello");
let btns = document.querySelectorAll('button');
let slides = document.querySelectorAll('article');

let num = 0

btns.forEach(item => {
    item.onclick=()=>{
        if(item.id=="next"){
            slide('next')
        }
        if(item.id=="prev"){
            console.log("prev")
            slide('prev')
        }
        console.log(num)
    }    
});

function slide(a){
    if(a =="next"){
        num--
        if(num<0){
            btns[0].classList.remove('clear')
            slides.forEach((item)=>{
                item.style.transform = `translateX(${num*100}%)`
            })
            if(num < -3){
                btns[1].classList.add('clear')
            }else{
                btns[1].classList.remove('clear')
            }
        }
    }else{
            btns[1].classList.remove('clear')
            num++
            slides.forEach((item)=>{
                item.style.transform = `translateX(${num *100}%)`
            })
        if(num >=0){
            btns[0].classList.add('clear')
        }
}
}
