const mainNav=document.querySelector('.mainNavbar');


const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("yes");
      mainNav.classList.add('team_main_nav');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    mainNav.classList.remove('team_main_nav');
  });
});

observer1.observe(document.querySelector('#Exploits'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const member_1 = entry.target.querySelector('#Member_list li:nth-child(1)');
    const member_2 = entry.target.querySelector('#Member_list li:nth-child(2)');
    const member_3 = entry.target.querySelector('#Member_list li:nth-child(3)');
    const title=entry.target.querySelector('#Member_title');

    if (entry.isIntersecting) {
      console.log("yes");
      member_1.classList.add('fade');
      member_2.classList.add('fade');
      member_3.classList.add('fade');
      //title.classList.add('BigToSmall');

      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    member_1.classList.remove('fade');
    member_2.classList.remove('fade');
    member_3.classList.remove('fade');
    //title.classList.remove('BigToSmall');
  });
});

observer2.observe(document.querySelector('#Équipe'));