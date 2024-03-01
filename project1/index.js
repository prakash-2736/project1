const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const myLable = document.getElementById("myLable");

let count=0;

decreaseBtn.onclick = ()=>{
    count --;
    myLable.textContent=count
};
resetBtn.onclick = () => {
  count=0;
  myLable.textContent = count;
};
increaseBtn.onclick = () => {
  count++;
  myLable.textContent = count;
};