function calcCircum(){

    // grab the input values
    let radius1 = document.getElementById("radius").value;
    let circumcard = document.getElementById("circumcard");

    //turn strings into numbers
    let radius = parseFloat(radius1);
    
    //grab elements
    let circum = document.getElementById('circum-p');

    // calculations
    let circumference = (2 * radius * Math.PI );

    //append content
    circum.innerHTML = " : " + (circumference);

    // show the bill info 
    circumcard.style.display = "block";
    
}