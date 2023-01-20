function preload(){}

function setup(){
    canvas = createCanvas(800,650);
}

x = 0;
y = 0;
draw_circle = "";
draw_rectangle= "";

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "circle has been drawn.";
        draw_circle ="";
    }

    if(draw_rectangle == "set"){
       
        rect(x,y,100,200)
        document.getElementById("status").innerHTML = "rectangle has been drawn.";
        draw_rectangle ="";
    }
}

var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();

function start(){
    document.getElementById("status").innerHTML = "The Program is listening to you; please speak";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "we have heard: "+content;
    
    if(content == "circle"){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*650);
        document.getElementById("status").innerHTML = "we have started to draw the circle";
        draw_circle = "set";
    }

    if(content == "rectangle"){
        x = Math.floor(Math.random()*800);
        y = Math.floor(Math.random()*650);
        document.getElementById("status").innerHTML = "we have started to draw the rectangle";
        draw_rectangle = "set";
}
}