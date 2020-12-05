let arr = ["Biratnagar", "Lalitpur","Patan" , "Kathmandu" , "Pokhara", "Palpa"];
const index = arr.indexOf("Kathmandu")
arr.splice(index, 1);
console.log(arr);

arr.splice(3, 0, "Ilam" ,"Jhapa");
console.log(arr);