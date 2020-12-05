function calcTip(){

    let tipAmount= document.getElementById("tipForm").value;
    let billAmount = document.getElementById("billInput").value;
    let billCard = document.getElementById("bill-card");


    let tipAmountNumber = parseFloat(tipAmount);
    let billAmountNumber = parseFloat(billAmount);
    

    let bill = document.getElementById('bill-p');
    let tip = document.getElementById('tip-p');
    let total = document.getElementById('total-p');

    let totalAmount = (tipAmountNumber * billAmountNumber);
    let totalBill = totalAmount + billAmountNumber;


    tip.innerHTML = "Rs." + (totalAmount).toFixed(2);
    bill.innerHTML =  "Rs." + billAmountNumber.toFixed(2);
    total.innerHTML = "Rs." + totalBill.toFixed(2);
    
 
    billCard.style.display = "block";
    
}