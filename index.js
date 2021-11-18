let cnvSize = 16;

// create individual div pixels
for (i=0; i<cnvSize; i++){

const canvas = document.querySelector('#canvas');

const pixel = document.createElement('div');
pixel.classList.add('pixel');

canvas.appendChild(pixel);
} 

 let draw = document.querySelector('div');
 draw.addEventListener('mouseover', function(event){
    event.target.classList.replace('pixel', 'line');
 });

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
   for (i=0; i<cnvSize; i++){ 
   let reset = document.querySelector('.line');
reset.classList.replace('line','pixel')
   }
});

const sml = document.querySelector('#small');
sml.addEventListener('click', () => {
   if (cnvSize = 32 || cnvSize == 64) {
      downSize = document.querySelector('#canvas');
      downSize.classList.remove('gridL');
      downSize.classList.remove('gridM');
      downSize.classList.add('canvas');
   }
   let gridS = document.querySelector('#canvas');
   gridS.classList.replace('canvas', 'gridS');
   cnvSize = 16;
   createCnv();
});
const med = document.querySelector('#med');
med.addEventListener('click', () => {
   if (cnvSize = 16 || cnvSize == 64) {
      downSize = document.querySelector('#canvas');
      downSize.classList.remove('gridL');
      downSize.classList.remove('gridS');
      downSize.classList.add('canvas');
   }
   let gridM = document.querySelector('#canvas');
   console.log(gridM)
   gridM.classList.replace('canvas', 'gridM');
   cnvSize = 32;
   createCnv();
});

const large = document.querySelector('#large');
large.addEventListener('click', () => {
   if (cnvSize = 16 || cnvSize == 32) {
      downSize = document.querySelector('#canvas');
      downSize.classList.remove('gridM');
      downSize.classList.remove('gridS');
      downSize.classList.add('canvas');
   }

   let gridL = document.querySelector('#canvas');
   console.log(gridL)
   gridL.classList.replace('canvas', 'gridL');
   cnvSize = 64;
   createCnv();
});

function createCnv() {

   for (i=0; i<cnvSize; i++){
      const makeCanvas = document.querySelector('#canvas');
      
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      
      makeCanvas.appendChild(pixel);
      }
}