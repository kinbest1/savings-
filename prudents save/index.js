const aboutElem=document.querySelector('.about-js');
const visionElem=document.querySelector('.vision-js');
const missionElem=document.querySelector('.mission-js');
const valueElem=document.querySelector('.value-js');
const toggleElem=document.querySelector('.thumnail');
const ulListElem=document.querySelector('.nav-ul-div');

visionElem.addEventListener('click',()=>{
  window.location.assign('vision.html')
});
missionElem.addEventListener('click',()=>{
  window.location.assign('mission.html')
});
valueElem.addEventListener('click',()=>{
  window.location.assign('values.html')
});
aboutElem.addEventListener('click',()=>{
  window.location.assign('about.html')
});


toggleElem.addEventListener('click',()=>{
  ulListElem.classList.toggle("hideNav");
});

