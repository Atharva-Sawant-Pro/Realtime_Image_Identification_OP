function setup(){
    canvas=createCanvas(300,300);
    canvas.position(622.5,400.5);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qaAyDI_JL/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("Moodaal loodaad");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}