upperlipX=0;
upperlipY=0;

function takesave(){
    save('mymustachefilterimg');
}


function preload(){
    mustacheimg = loadImage('mustache-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    //access the live webcam
    video = createCapture(VIDEO);
    video.size(300, 300);
    //it should hide the live webcam so that it dont
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        upperlipX = results[0].pose.nose.x-12;
        upperlipY = results[0].pose.nose.y-8;
        console.log("upper lip x - " + upperlipX);
        console.log("upper lip y - " + upperlipY);

        
    }
}

function draw(){
    image(video, 0, 0, 300, 300) 
    
    //stroke(255, 0, 0);
    //fill(255, 0, 0);
    image(mustacheimg, upperlipX, upperlipY, 30, 30);
}


