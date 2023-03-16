
function ham() {
    let nav=document.querySelector('nav');
   if(nav.style.display==='none' || nav.style.display===''){
    nav.style.display='flex';
    console.log(nav.style.display);
   }
   else{
    nav.style.display='none';
    console.log(2);
   };
  };