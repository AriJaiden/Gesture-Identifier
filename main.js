Webcam.set({width: 300, height: 300, image_format: "png", png_quality: 90});
var no= document.getElementById("camera");
Webcam.attach(no);

function takeimg(){
    Webcam.snap(function(data_uri){document.getElementById("snapshot").innerHTML='<img id="bleh" src="'+data_uri+'"/>';});
}

console.log("ml version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O187hNypL/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function identifyimg(){
    img=document.getElementById("bleh");
    classifier.classify(img, gotResult);
    
}
function gotResult(error,result){
    if(error){
        console.error(error);
    } else{
        console.log(result);
        document.getElementById("emotionname").innerHTML=result[0].label
    
        if(result[0].label == "Good Job"){document.getElementById("emoji").innerHTML="&#128578"}
        if(result[0].label == "Amazing"){document.getElementById("emoji").innerHTML="&#9996;"}
        if(result[0].label == "Okay"){document.getElementById("emoji").innerHTML="&#128077;"}
        
        
    }
}