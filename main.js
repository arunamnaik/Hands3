Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+"/>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rIxfnD93N/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthasis;
    speak_data_1 = "prediction 1 :-"+prediction_1;
    speak_data_2 = "prediction 2 :-"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis); 
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById('result_emotion_name').innerHTML=results[0].label;
        document.getElementById('result_emotion_name2').innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label = 'Nice'){
            document.getElementById('update_emoji').innerHTML='👌🏻';
        }
        if(results[0].label = 'Good'){
            document.getElementById('update_emoji').innerHTML='👍🏻';
        }
        if(results[0].label = 'Bad'){
            document.getElementById('update_emoji').innerHTML='👎🏻';
        }
        if(results[0].label = 'Rock'){
            document.getElementById('update_emoji').innerHTML='🤟🏻';
        }
        if(results[0].label = 'Point'){
            document.getElementById('update_emoji').innerHTML='👈🏻';
        }
        if(results[0].label = 'Thank'){
            document.getElementById('update_emoji').innerHTML='🙏🏻';
        }
        if(results[1].label = 'Nice'){
            document.getElementById('update_emoji2').innerHTML='👌🏻';
        }
        if(results[1].label = 'Good'){
            document.getElementById('update_emoji2').innerHTML='👍🏻';
        }
        if(results[1].label = 'Bad'){
            document.getElementById('update_emoji2').innerHTML='👎🏻';
        }
        if(results[1].label = 'Rock'){
            document.getElementById('update_emoji2').innerHTML='🤟🏻';
        }
        if(results[1].label = 'Point'){
            document.getElementById('update_emoji2').innerHTML='👈🏻';
        }
        if(results[1].label = 'Thank'){
            document.getElementById('update_emoji2').innerHTML='🙏🏻';
        }
    }
}