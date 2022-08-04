let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    counter.innerHTML = count;
    
};
decreaseBtn.onclick = function() {
    count--;
    counter.innerHTML = count;
    
};
resetBtn.onclick = function() {
    count = 0;
    counter.innerHTML = count;
    
};








// btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const styles = e.currentTarget.classList
//         if (styles.contains("increase")) {
//             console.log(" increase")
//             count += 1;
//         } else if (styles.contains("decrease")) {
//             console.log("decrease");
//             count -= 1;
//         } else {
//             count = 0
//             console.log("reset");
//         }
//         counter.innerHTML = count
//     });
// });