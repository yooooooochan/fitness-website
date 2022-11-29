$(document).ready(function() {
    $("#Calory").click(function(){ // 칼로리계산
        var activity = $('#activity').val(); //운동
        var weight = 2.205*Number($('#weight').val()); //몸무게
        var duration = $('#duration').val(); //시간

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity+ '&weight=' + weight + '&duration=' + duration,
            headers: { 'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'}, //키
            contentType: 'application/json',
            success: function(result) {
                console.log(result[0]['total_calories']); //json 데이터 위치
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });

    $("#btn").click(function(){ // 운동 list
        var muscle = $('#muscle').val(); //운동부위

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
            headers: { 'X-Api-Key': 'mHhSVAsfZe9ySo8lij6cHw==6YJ8Cx7ELggSzH11'}, //키
            contentType: 'application/json',
            success: function(result) {
                console.log(result);  //json 데이터 위치 이걸 원소 하나마다 뽑아서 span으로 출력하면 될듯
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    });
   
});