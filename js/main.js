// main.js
window.addEventListener("load", () => {

// 고객센터
const topMenuDD = document.querySelectorAll('dl.topMenu>dd');
topMenuDD[4].addEventListener('click', e =>{
  topMenuDD[4].classList.toggle('on');

  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title', '고객센터 닫기');

  }else {
    e.currentTarget.children[0].setAttribute('title', '고객센터 열기');

  }
})


const header_wrap = document.querySelector('.header_wrap');
const gnb_lis = document.querySelectorAll('.gnb>ul>li');
const gnb_ul = document.querySelectorAll('.gnb>ul>li>ul');

for(let i=0; i<gnb_lis.length; i++){
  gnb_lis[i].addEventListener('mouseover', ()=>{

    //고객센터에 on 붙어 있으면 고객센터의 on 지움
    if(topMenuDD[4].classList.contains('on')){
      topMenuDD[4].classList.remove('on');
    
    }
    //검색박스에 on 붙어 있으면 검색박스의 on 지움
    if(form_srch.classList.contains('on')){
      btn_srch.classList.remove('on');
      form_srch.classList.remove('on');
    }

    header_wrap.classList.add('on');
    for(let i=0; i<gnb_ul.length; i++){
      gnb_ul[i].classList.add('on');
    }
  })

  gnb_lis[i].addEventListener('mouseout', ()=>{
    header_wrap.classList.remove('on');
    for(let i=0; i<gnb_ul.length; i++){
      gnb_ul[i].classList.remove('on');
    }
  })
  gnb_lis[i].children[0].addEventListener('focus', ()=>{
    header_wrap.classList.add('on');
    for(let i=0; i<gnb_ul.length; i++){
      gnb_ul[i].classList.add('on');
    }
  })

  gnb_lis[i].children[0].addEventListener('blur', ()=>{
    header_wrap.classList.remove('on');
    for(let i=0; i<gnb_ul.length; i++){
      gnb_ul[i].classList.remove('on');
    }
  })
}


// 검색 열기 닫기 
const btn_srch = document.querySelector('span.srch_open');
const form_srch = document.querySelector('form.srch');

btn_srch.addEventListener('click', e =>{
  e.preventDefault();
  btn_srch.classList.toggle('on');
  form_srch.classList.toggle('on');

  if(e.currentTarget.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title', '검색입력서식 닫기');

  }else {
    e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기');

  }
})


// 로그인
const appear = document.querySelector('.appear');
const loop = document.querySelector('.loop');

let imgs_appear = '';
let imgs_loop ='';

for(let i=0;i<57;i++){
  if(i<10)i='0'+ i
  imgs_appear += `<img src='images/appear/appear_000${i}.png' alt='appear_000${i}.png' />`;
}

for(let i=0;i<82;i++){
  if(i<10)i='0'+i
  imgs_loop += `<img src='images/loop/loop_000${i}.png' alt='appear_000${i}.png' />`;
}

appear.innerHTML = imgs_appear;
loop.innerHTML = imgs_loop;



// 로그인 애니메이션 
const appearImgs = document.querySelectorAll('.appear>img');
const loopImgs = document.querySelectorAll('.loop>img');
const delay = 0.05

for(let i=0; i<57; i++){
   appearImgs[i].style.animation = `ani 2.85s linear ${0.05*i}s 1`;
}

for(let i=0; i<82; i++){
   loopImgs[i].style.animation = `ani 4.1s linear ${2.85+(0.05*i)}s infinite`;
}


// content1 애니메이션
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0; j<quickSpan.length; j++){
  let images ='';
  for(let i=0; i<20; i++){
    if(i<10) i='0'+i
    images += `<img src = "images/quick0${j+1}/quick0${j+1}_000${i}.png" alt="quick0${j+1}/quick0${j+1}_000${i}.png" />`;
  }
  quickSpan[j].innerHTML = images;
}

// li에 마우스 올리면 이미지 애니메이션
//마우스 떼면 이미지 애니메이션 삭제
const content1Li = document.querySelectorAll('.content1 ul li');

for(let i=0; i<content1Li.length; i++){
  content1Li[i].addEventListener('mouseover', e =>{
      for(let k=0; k<20; k++){
        let imgLi = e.currentTarget.children[0].children[0].children;
        imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`
      }
  })
}

for(let i=0; i<content1Li.length; i++){
  content1Li[i].addEventListener('mouseout', e =>{
      for(let k=0; k<20; k++){
        let imgLi = e.currentTarget.children[0].children[0].children;
        imgLi[k].style.animation = `none`;
      }
  })
}



//배너
const btnNext = document.querySelector('a.next');
const btnPrev = document.querySelector('a.prev');
let bannerNum = 0
const banner_frame = document.querySelector('.banner_frame');
const banner_section = document.querySelectorAll('.banner_frame>section');
let banner_width = document.querySelector('body').offsetWidth;
  window.addEventListener('resize', ()=>{
    banner_width =document.querySelector('body').offsetWidth;
  })
let isplaying = true;
const lastIdx = banner_section.length-1;
let sectionIdx = 0;
const bnn_rollA = document.querySelectorAll('.rolling li a');

//next 버튼
btnNext.addEventListener('click', e=>{
  e.preventDefault();
  bannerNum ++;
  if(bannerNum>=banner_section.length)bannerNum = 0;
  banner_frame.style.left = `-${bannerNum * banner_width}px`;
  secWhite(bannerNum)

})
//prev버튼
btnPrev.addEventListener('click', e=>{
  e.preventDefault();
  bannerNum --;
  if(bannerNum<0)bannerNum = banner_section.length-1;
  banner_frame.style.left = `-${bannerNum * banner_width}px`;
  secWhite(bannerNum);
})
//오토배너 setTimeout, 재귀함수 사용
const play_pause_btn = document.querySelector('.rolling>p>.play');

let autoBnn

function autoBanner() {
  autoBnn = setTimeout(() => {
    bannerNum++;
    if (bannerNum >= banner_section.length) bannerNum = 0;
    banner_frame.style.left = `-${bannerNum * banner_width}px`;
    autoBanner(); 
    secWhite(bannerNum);
  }, 5000);
  
}
autoBanner();


//재생/멈춤 버튼
play_pause_btn.addEventListener('click', e =>{
  e.preventDefault();
  if(isplaying){
    isplaying = false;
    clearTimeout(autoBnn);
  }else{
    isplaying = true;
    autoBanner();
  } 
})

// 롤링 클릭

const roll_btn = document.querySelectorAll('.banner_roll>li>a')

for(let i=0; i<roll_btn.length; i++){
  roll_btn[i].addEventListener('click', e=>{
    e.preventDefault();
    banner_frame.style.left = `-${i * banner_width}px`;

    secWhite(bannerNum);

  })
}



//section에 .white가 있으면 각 요소에 .white 붙이기
const arrowA = document.querySelectorAll('.arrow>a');
const rollingA = document.querySelectorAll('.rolling a');

let secWhite = bannerNumber =>{
  if(banner_section[bannerNumber].classList.contains('white')){
    arrowA.forEach(item =>{
      item.classList.add('white');
    })
    rollingA.forEach(item =>{
      item.classList.add('white');
    })
  }else{
    arrowA.forEach(item =>{
      item.classList.remove('white');
    })
    rollingA.forEach(item =>{
      item.classList.remove('white');
    })
  }

  bnn_rollA.forEach((item) =>{
    item.classList.remove('on');
  })
  bnn_rollA[bannerNumber].classList.add('on');
}


// 스크롤 이벤트
window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('html').scrollTop;
  
  //도넛
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
  const combine_Left = document.querySelector(".combine_Left");

  const doughnut_Center_M = document.querySelector(".doughnut_Center_M")
  const doughnut_Center_s = document.querySelector(".doughnut_Center_s")
  
  const doughnut_right_M = document.querySelector(".doughnut_right_M");
  const doughnut_right_s = document.querySelector(".doughnut_right_s");
  const combine_Right = document.querySelector(".combine_Right");

  

  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
  doughnut_Left_s.style.top = `${scroll*0.5}px`;
  combine_Left.style.top = `${scroll*0.7}px`;

  doughnut_Center_M.style.top = `${1310-scroll*0.6}px`;
  doughnut_Center_s.style.top = `${scroll*0.7}px`;

 if(parseInt(combine_Right.style.top) > 951)
    {doughnut_right_M.style.top = `${scroll*0.6}px`;} 


  doughnut_right_s.style.top = `${scroll*0.4}px`;
  combine_Right.style.top = `${scroll*0.6}px`;
})

/* content3 */
const all = document.querySelectorAll('.content3_inner>div>ul>li')

for(let i=0;i<all.length;i++){
  all[i].addEventListener('mouseover', ()=>{
    all[i].classList.add('on');
  })
  all[i].addEventListener('mouseout', ()=>{
    all[i].classList.remove('on');
  })
}

//대분류
// li a 하나하나 클릭했을때
// class 속성값 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당클래스이름에 해당되는 li만 보이게 설정; 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
// 변수값이랑 정확하게 일치하는 케이스찾아서
// 해당클래스 이름에 해당되는 li들만 보이게 설정한다.
const ent = document.querySelectorAll('.content3_inner>div>ul>li.ent');
const shop = document.querySelectorAll('.content3_inner>div>ul>li.shop');
const dinner = document.querySelectorAll('.content3_inner>div>ul>li.dinner');
const box = document.querySelectorAll('.content3_inner>div>ul>li.box');
const cats = document.querySelectorAll('.content3_inner>ul>li')
let nowcat ='';

for(let i=0; i<cats.length; i++){
  cats[i].addEventListener('click', e =>{
    e.preventDefault();
    for(let i=0; i<cats.length; i++){
      cats[i].classList.remove('on')
    }
    

    if(!i==0){
    for(let i=0; i<all.length; i++){
      all[i].style.display = 'none'}
    }else{
      for(let i=0; i<all.length; i++){
        all[i].style.display = 'block'
      }
    }
    
    const nowcat = cats[i].getAttribute('class')
    switch (nowcat) {
      case 'all':
        cats_on(all)
        break;
      case 'ent':
        cats_on(ent)
        break;
      case 'shop':
        cats_on(shop)
        break;
      case 'dinner':
        cats_on(dinner)
        break;
      case 'box':
        cats_on(box)
        break;
      }
      cats[i].classList.add('on')
  })
}

function cats_on(item){
  for(let i=0; i<item.length;i++){
    item[i].style.display = 'block'
  }
}

//패밀리사이트
const familySite = document.querySelector('.family_site');

familySite.addEventListener('click' ,e=>{
  e.preventDefault();
  familySite.classList.toggle('on')
})
// top
const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', e => {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
})
// 스크롤 위치에 따라 top버튼이 사라졌다 나왔다 위치고정까지
window.addEventListener('scroll',()=>{
  let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll<=100){
    topBtn.classList.remove('on','ab');
  }else if(scroll>2400){
    topBtn.classList.add('ab');
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('ab');
    topBtn.classList.add('on');
  }
})




// 모바일
// 햄버거 버튼 클릭
const mobBtn = document.querySelector(".moBtn");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");
const mob = document.querySelector(".mob");
const mob_close = document.querySelector(".moBtn_close");

mobBtn.addEventListener("click", e => {
  e.preventDefault();
  body.classList.add("on");
  bg.classList.add("on");
  mob.classList.add("on");
  mob_close.classList.add("on");
})

// 전체메뉴 닫기 클릭
mob_close.addEventListener("click", e => {
  e.preventDefault();
  body.classList.remove("on");
  bg.classList.remove("on");
  mob.classList.remove("on");
  mob_close.classList.remove("on");
})

// 탑메뉴 고객센터 클릭
const mo_top_5th = document.querySelector(".mob_topMenu>dd:nth-of-type(5)");
console.log(mo_top_5th)


mo_top_5th.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.querySelector("a").setAttribute("title", "고객센터 닫기");
  } else{
    e.currentTarget.querySelector("a").setAttribute("title", "고객센터 열기");
  }
})

// 주메뉴 하위 ul
const mo_gnb = document.querySelectorAll(".mob_gnb>ul>li");

function act(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

for(let i=0; i<mo_gnb.length; i++){
  mo_gnb[i].addEventListener("click", e => {
    e.preventDefault();
    act(i,mo_gnb);
  })
}

})