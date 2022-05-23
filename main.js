function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j2nvLFFjN/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("resut_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+"%";

        img = document.getElementById('animal1');
        img1 = document.getElementById('animal2');
        img2 = document.getElementById('animal3');
        img3 = document.getElementById('animal4');

        if (results[0].label == "Clap") {
            img.src = 'image1.gif';
            img1.src = 'cutepengi1.jpg';
            img2.src = 'meerkat.jpg';
            img3.src = 'rabbits.jpg';

        } else if (results[0].label == "laughing"){
            img.src = 'pouncing cat.jpg';
            img1.src = 'squad.gif';
            img2.src = 'meerkat.jpg';
            img3.src = 'rabbits.jpg';
        } else if (results[0].label == "ting-ding"){
            img.src = 'pouncing cat.jpg';
            img1.src = 'cutepengi1.jpg';
            img2.src = 'fall.gif';
            img3.src = 'rabbits.jpg';
        }else{
            img.src = 'pouncing cat.jpg';
            img1.src = 'cutepengi1.jpg';
            img2.src = 'meerkat.jpg';
            img3.src = 'veggies.gif';
        }
    }

}