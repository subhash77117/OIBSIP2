console.log("chal n bhai ");

const hamBurger=document.getElementById('ham');
const contentHideKr=document.getElementById('hideKroLink');
const hideLink=document.getElementById('linksHidden');

hamBurger.addEventListener('click',()=>{
  hideLink.style.scale=1;
  hamBurger.style.scale=0;
  contentHideKr.style.scale=1;
});

contentHideKr.addEventListener('click',()=>{
    hideLink.style.scale=0;
    hamBurger.style.scale=1;
    contentHideKr.style.scale=0;
})

