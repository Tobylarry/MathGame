var playing = false;
var score;
var timeRemaining;
var answer;
var action;

document.getElementById('button').onclick = function(){
    window.alert("Welcome to my game")
    //reload current page
    if (playing == true){
        location.reload();
        
    }else {
        score = 0;
        timeRemaining = 60;
        document.getElementById('score').innerHTML = "Score: " + score;
       show("timeRem");
        document.getElementById('button').innerHTML = "Reset Game";
        document.getElementById('timeremvalue').innerHTML = timeRemaining;
        
        //start count down
        countDown();
        
        //Method for question
        question();
    }
}
//pick answer method
for(i=1; 1<5; i++){
document.getElementById('box'+i).onclick = 
function(){ 

if(this.innerHTML == answer){
    score++;
    document.getElementById('score').innerHTML = "Score: " + score;
    hide("wrong");
    show("correct");
    setTimeout(function(){
        hide("correct");
    }, 1000);

    question();
}else{
    hide("correct");
    show("wrong");
    setTimeout(function(){
    hide("wrong");
    }, 1000);
}
}

  
}

//count down method

function countDown(){
counter = setInterval(function(){
    timeRemaining -= 1;
    document.getElementById('timeremvalue').innerHTML = timeRemaining;
    if(timeRemaining == 0){
        //stop countdown
        stopCountDown();
        document.getElementById('gameOver').style.display = "block";
        document.getElementById('finalscore').innerHTML = score;
    }
}, 1000);
}

// stop count down method
function stopCountDown(){
    clearInterval(counter);
}

// method to generate questionn and answer
function question(){
    var a = (Math.round(Math.random()*10));
    var b = (Math.round(Math.random()*10));
    answer = a*b;
    document.getElementById('parameter').innerHTML = a + "X" + b;

    var currentPostion = 1+ Math.round(3*Math.random());
    document.getElementById("box"+ currentPostion).innerHTML = answer;
    
    // fill other boxes
    var answers = [ answer];
    for (var i = 1; i <5; i++){
        if (i != currentPostion){
            var wrongAns;
            do{
                wrongAns = ((Math.round(Math.random()*10))*(Math.round(Math.random()*10)));
                document.getElementById("box"+i).innerHTML = wrongAns;
                
            }
            while(answers.indexOf(wrongAns)> -1);
            document.getElementById("box"+i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }
}



// method to hide wrong or correct
function hide(d){
    document.getElementById(d).style.display = "none";
}

// methhod to show wrong or correct
function show(d){
    document.getElementById(d).style.display = "block";
}
