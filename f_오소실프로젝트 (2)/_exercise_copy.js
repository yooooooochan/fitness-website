var Calory = document.getElementById("Calory");
Calory.addEventListener("click",function(){
    var activity = document.getElementById("activity").value;
    var weight = document.getElementById("weight").value * 2.205;
    var duration = document.getElementById("duration").value;

    fetch('https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity+ '&weight=' + weight + '&duration=' + duration, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data[0]['total_calories']));
});

document.getElementById("btn").addEventListener('click',function(){
    var muscle = document.getElementById("muscle").value;

    fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

});