let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const hand_div = document.getElementById("h");
const scissor_div = document.getElementById("s");

function win(p1,p2){
userScore++;
userScore_span.innerHTML=userScore;
result_div.innerHTML=convert(p1)+' beats '+convert(p2)+' we win';
document.getElementById(p1).classList.add('green-glow');
setTimeout(function() {document.getElementById(p1).classList.remove('green-glow')},100);
}

function convert(later){
    if(later == 'r') return 'rock';
    if(later == 'h') return 'paper';
    return 'scissor';
}

function lose(p1,p2){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=convert(p2)+' beats '+convert(p1)+' we lose ';
    document.getElementById(p1).classList.add('red-glow');
    setTimeout(function() {document.getElementById(p1).classList.remove('red-glow')},100);
}
function draw(p1,p2){
    result_div.innerHTML= 'It is a draw';
    document.getElementById(userImout).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(p1).classList.remove('gray-glow')},100);
   
}

function game(userImout) {
    const computer=getComputer();
    switch (userImout+computer) {
        case 'rs':
        case 'hr':
        case 'sh':  
            win(userImout,computer)
            
            break;
        case 'sr': 
        case 'rh':
        case 'hs':
            lose(userImout,computer)
            break;
        case 'rr':
        case 'hh': 
        case 'ss':
            draw()            

    
        default:
            break;
    }
}
function getComputer() {
    const choice = ['r','h','s'];
    const randomNum=(Math.floor(Math.random()*3));
    return choice[randomNum];
}
console.log(getComputer());
function main() {
    rock_div.addEventListener('click',function(){
        game('r');
     })
     hand_div.addEventListener('click',function(){
         game('h');
     })
     scissor_div.addEventListener('click',function(){
         game('s');
     })  
}
main()