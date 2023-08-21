const boxElement11 = document.querySelector('.cardB1');
const boxElement12 = document.querySelector('.cardB2');
const boxElement13 = document.querySelector('.cardB3');
const boxElement14 = document.querySelector('.cardB4');
const boxElement2 =document.querySelector('.learn_moreB')
const boxElement3 =document.querySelector('.icon2_divB')
const boxElement4 =document.querySelector('.gg')
boxElement11.addEventListener('mouseover', () => {
  boxElement2.style.display = 'flex';
  boxElement2.style.alignItems = 'center';
  boxElement11.style.color = '#83570c';
  boxElement3.style.backgroundColor = '#7c007c';
  boxElement4.style.marginLeft = '10px';
});

boxElement11.addEventListener('mouseout', () => {
  boxElement2.style.display = 'none';
  boxElement11.style.color = 'white';
  boxElement3.style.backgroundColor = '#aa7cf5';
 
});
boxElement12.addEventListener('mouseover', () => {
  boxElement2.style.display = 'flex';
  boxElement2.style.alignItems = 'center';
  boxElement12.style.color = '#83570c';
  boxElement3.style.backgroundColor = '#7c007c';
  boxElement4.style.marginLeft = '10px';
});

boxElement12.addEventListener('mouseout', () => {
  boxElement2.style.display = 'none';
  boxElement12.style.color = 'white';
  boxElement3.style.backgroundColor = '#aa7cf5';
 
});

boxElement13.addEventListener('mouseover', () => {
  boxElement2.style.display = 'flex';
  boxElement2.style.alignItems = 'center';
  boxElement13.style.color = '#83570c';
  boxElement3.style.backgroundColor = '#7c007c';
  boxElement4.style.marginLeft = '10px';
});

boxElement13.addEventListener('mouseout', () => {
  boxElement2.style.display = 'none';
  boxElement13.style.color = 'white';
  boxElement3.style.backgroundColor = '#aa7cf5';
 
});
boxElement14.addEventListener('mouseover', () => {
  boxElement2.style.display = 'flex';
  boxElement2.style.alignItems = 'center';
  boxElement14.style.color = '#83570c';
  boxElement3.style.backgroundColor = '#7c007c';
  boxElement4.style.marginLeft = '10px';
});

boxElement14.addEventListener('mouseout', () => {
  boxElement2.style.display = 'none';
  boxElement14.style.color = 'white';
  boxElement3.style.backgroundColor = '#aa7cf5';
 
});