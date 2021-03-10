var win=0;
var lost=0;
var names= (prompt("Enter Your Name :"));

for (let index = 0; index < 10; index++) {

    var enterNumber= parseInt(prompt("Enter a Number form 0 to 5 :"));
    var number = Math.floor(Math.random()*6);

if (number==enterNumber) {
    alert("You have win");
    win++;
}else{
    alert("You have lost. The random number was " + number);
    lost++;
    }
}
document.write("Congratulations " + names+"<br>")
document.write("Total Number of win : "+ win+"<br>");
document.write("Total Number of lost : "+ lost+"<br>");