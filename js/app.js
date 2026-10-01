let HP=500;
const maxHP=500;
const attack = document.getElementById("attack");
const attackTwo=document.getElementById("attackTwo")
const healthNumber = document.getElementById("healthNumber");
const result = document.getElementById("result");
const healthBarFill=document.getElementById("healthBarFill");
const reset=document.getElementById("reset");

attack.addEventListener("click", function (){

    const damage=Math.floor(Math.random()*100)+1;
    let accuracy=Math.floor(Math.random()*5)+1;
    if (accuracy <= 3) {
        result.textContent = "Aim better you goofball!";
    } else {
        HP = HP - damage;
        if (HP <= -15) {
            HP = 0;
            result.textContent = "Stop, stop! He's already dead!";
        } else if (HP <= 0) {
            HP = 0;
            result.textContent = "The walls have fallen! We've won!";
        } else {
            result.textContent = "Good hit! You dealt " + damage + " damage!";
        }
    }
    console.log("Trebuchet damage "+ damage);
    console.log("Trebuchet accuracy "+ accuracy);
    healthNumber.textContent = HP;
    healthBarFill.style.width = (HP / maxHP * 100) + "%";
    console.log("HP "+ HP);
});
attackTwo.addEventListener("click", function (){


    const damageTwo=Math.floor(Math.random()*200)+1;
    let accuracyTwo;

    if (HP <= 200) {
        accuracyTwo = Math.floor(Math.random() * 50) + 1;
    } else {
        accuracyTwo = Math.floor(Math.random() * 5) + 1;
    }
    if (accuracyTwo <= 5) {
        result.textContent = "We've barely licked the walls and you're storming them? You just killed all of the boys!";
    } else {
        HP = HP - damageTwo;
        if (HP <= -15) {
            HP = 0;
            result.textContent = "What a win! The king will be happy about this!";
        } else if (HP <= 0) {
            HP = 0;
            result.textContent = "Surely a promotion is in your future! The battle is won!";
        } else {
            result.textContent = "Good hit! You dealt " + damageTwo + " damage!";
        }
    }

    console.log("Wall Storming Damage " + damageTwo);
    console.log("Wall accuracy "+ accuracyTwo);
    healthNumber.textContent = HP;
    healthBarFill.style.width = (HP / maxHP * 100) + "%";
    console.log("HP "+HP);
});

reset.addEventListener("click", function (){
    HP=maxHP;
    result.textContent="Begin the attack!";
    healthNumber.textContent=HP;
    healthBarFill.style.width ="100%";

})
