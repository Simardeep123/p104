Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90,
});
camera= document.getElementById("Camera");
Webcam.attach(camera);
function TakeSnapshot(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML= '<img id="Img1" src="' + img + '">';
    })
}



var Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s25_iw9Tw/model.json',Object_loaded);
function Object_loaded(){
    console.log('Object_loaded');
}
function check(){
    img= document.getElementById('Img1');
    Classifier.classify(img, got_Result);
}
function got_Result(error, results){
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("result_object_name").innerHTML= results[0].label;
        
        document.getElementById("Accuracy").innerHTML= results[0].confidence;
    }
console.log(results);
}