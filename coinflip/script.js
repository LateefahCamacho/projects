let coin = document.querySelector(".coin");
console.log(coin)
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button")

 

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click",() =>{
    let i = Math.floor(Math.random() *2 );
    coin.style.animation = "none";
    if(i) {
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads ++;
    }
    else {
        setTimeout(function(){
            coin.style.annimation = "spin-tails 3s forwards";
        }, 100);
        tails++
    }
    setTimeout(updateStats, 3000);
    disableButton();
});


