function calcCircum(){

    let radius1 = document.getElementById("radius").value;
    let circumcard = document.getElementById("circumcard");

    let radius = parseFloat(radius1);
    

    let circum = document.getElementById('circum-p');


    let circumference = (2 * radius * Math.PI );


    circum.innerHTML = " : " + (circumference);


    circumcard.style.display = "block";
    
}