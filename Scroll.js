const mainTitle = document.querySelector('.title');
const mainNav=document.querySelector('.mainNavbar');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const d_text = entry.target.querySelector('.Description_text');

    if (entry.isIntersecting) {
      console.log("yes");
      //d_text.classList.add('get_bigger');
      //mainTitle.classList.add('MainTitle');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    //d_text.classList.remove('get_bigger');
    mainTitle.classList.remove('MainTitle');
  });
});

observer1.observe(document.querySelector('.Description'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const latest_Merch_title = entry.target.querySelector('.Latest_Merch_title');

    const latest_Merch_container_1 = entry.target.querySelector('.Latest_Merch_container:nth-child(1)');
    const latest_Merch_container_2 = entry.target.querySelector('.Latest_Merch_container:nth-child(2)');
    const latest_Merch_container_3 = entry.target.querySelector('.Latest_Merch_container:nth-child(3)');

    if (entry.isIntersecting) {
      console.log("yes");
      latest_Merch_title.classList.add('typing');
      latest_Merch_container_1.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_2.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_3.classList.add('Latest_Merch_container_animate');
      //mainNav.classList.add('sticky');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    latest_Merch_title.classList.remove('typing');
    latest_Merch_container_1.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_2.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_3.classList.remove('Latest_Merch_container_animate');
    //mainNav.classList.remove('sticky');
  });
});

observer2.observe(document.querySelector('.Latest_Merch'));



//Changing content of title
var indicators=document.getElementsByClassName('indicators');

let myCarousel = document.querySelector('#Home-Carousel');
 myCarousel.addEventListener('slide.bs.carousel', (event) => {
   indicators.item(event.from).classList.remove("active");
   indicators.item(event.to).classList.add("active");
   for(let i=0; i<indicators.length; i++){
      if(indicators[i].classList.contains("active")){
        if(i==0){
          //mainTitle.innerHTML="COURS DE<br>PROGRAMMING💻";
          //mainTitle.style.marginLeft="15%";
          //mainTitle.style.top="40%";
          document.body.style.background="blue";
        }
        if(i==1){
          //mainTitle.innerHTML="COURS DE<br>MATHÉMATIQUE🔢";
          //mainTitle.style.marginLeft="15%";
          //mainTitle.style.top="40%";
          document.body.style.background="goldenrod";
        }
        if(i==2){
          //mainTitle.innerHTML="COURS DE FRANÇAIS✍️";
          //mainTitle.style.marginLeft="5%";
          //mainTitle.style.top="50%";
          document.body.style.background="yellowgreen";
        }
      }
   }
 });