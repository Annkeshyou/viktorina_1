console.clear()
const q = [
  "Яка функція сортує елементи масиву?", 
  "Яка функція розбиває вхідний рядок на масиви за допомогою роздільника?", 
  "Зовнішній відступ у CSS",
  "Формат з прозорим фоном",
  "ЯК знайти довжину слова"
]
const a = [
  "sort", 
  "split", 
  "margin",
  "png",
  "length"
]
const qq = document.querySelector(".q")
const aa = document.querySelector(".a")
console.log(qq)

const letters = document.querySelectorAll(".letter")
let rwl = 0;
let zm = 0;

function round(){
  const random = Math.trunc(Math.random()*5)
qq.textContent = q[random]
for(let i = 0; i<a[random].length; i++){
  const el = document.createElement("p")
  aa.appendChild(el)
}
    const box = document.querySelectorAll("p")
    if(box.length > rwl){
    for(let i = 0 ; i < box.length - rwl; i++){
     box[i].style.display = "none"
    }
      
    }
   for(let j = 0; j < letters.length; j++){
  letters[j].addEventListener("click", press)
     function press(){
  console.log(this.textContent)
for(let k = 0; k < a[random].length; k++){
  rwl = a[random].length
  console.log(rwl)
  if(a[random][k] === this.textContent){
    box[k].style.backgroundColor="green"
    console.log(this.textContent)
    box[k+zm].textContent = this.textContent
    if(Array.from(box).every(item => item.textContent!="")){
      round();
    }
  }
}
     }       
}
}
round()

