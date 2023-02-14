// Chapter No 9 (Prompts)


// "Que 1"

/*var cityName=prompt("Enter your city name");
if (cityName==="karachi"){
    alert("Welcome to the city of lights!");
}*/

// "Que 2"

// var gender=prompt("Gender");
// var result1st;
// if (gender==="male"){
//     result1st="Good morning Sir";
// }
// if (gender==="female"){
//     result1st="Good morning Ma'am";
// }
// alert(result1st);

// "Que 3"

// var signalColor=prompt("Enter Road traffic signal color");
// var result;
// if (signalColor==="red"){
//      result="Must Stop";
// }
// if (signalColor==="yellow"){
//     result="Ready to move";
// }
// if (signalColor==="green"){
//     result="Move now";
// }
// alert(result);

// "Que 4"

// var remFuel=prompt("Enter remaining fuel of your car");
// if(remFuel < 0.25){
//     alert("Please refill your fuel")
// }

// Que 5
// (a):::

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is false");
// }

// (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is False");
// }
// if (c === 13){
// alert("condition 2 is false");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is false");
// }

// (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// (e)
// if (true){
//     alert("True");
// }

// if (false) {
//     alert("false");
// }

// (f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Que 6
// var sub1stObtMarks = +prompt("Enter Subject 1 obtained Marks");
// var sub1stTotalMarks = +prompt("Enter Total 1 Marks");

// var sub2ndObtMarks = +prompt("Enter Subject 2 obtained Marks");
// var sub2ndTotalMarks = +prompt("Enter Total 2 Marks");

// var sub3rdObtMarks = +prompt("Enter Subject 3 obtained Marks");
// var sub3rdTotalMarks = +prompt("Enter Total 3 Marks");

// var totalMarks = sub1stTotalMarks + sub2ndTotalMarks + sub3rdTotalMarks;
// var totalObtMarks = sub1stObtMarks + sub2ndObtMarks + sub3rdObtMarks;

// var per = totalObtMarks / totalMarks * 100;

// document.write("<h1>Marks sheet<h1/>");
// document.write("<h2>Total Marks=<h2/>" + totalMarks + "<br>");
// document.write("<h2>Marks Obtained=<h2/>" + totalObtMarks + "<br>");
// document.write("<h2>Percentage=<h2/>" + per + "%" + "<br>");

// if(per>=80){
//     document.write("<p> Grade:: A-one <p/>" + "<br>");
//     document.write("Remarks:: Excellent"+"<br>");
// }
// else if(per>=70){
//     document.write("<p> Grade:: A <p/>" + "<br>");
//     document.write("Remarks:: Good"+"<br>");
// }
// else if(per>=60){
//     document.write("<p> Grade:: B <p/>" +"<br>");
//     document.write("<p> Remarks:: Better<p/>" + "<br>");
// }
// else {
//     document.write("<p> Grade:: Fail <p/>"+"<br>");
//     document.write("<p>Remarks:: Sorry<p/>"+"<br>");
// }

// Que 7
// var num = Math.floor(Math.random() * 10) + 1;
// var result;
// var num1st = parseInt(prompt("Secret Game For you \n (Guess the correct Number 1 to 10):"));
// if (num1st === num) {
//     result = "Bingo! Correct answer";
// }
// else if (Math.abs(num - num1st) <= 1) {
//     result = "Close enough to the correct answer";
// }
// else {
//     result = "Incorrect answer. The secret number was " + num;
// }
// alert(result);

// Que 8
// var devNum = +prompt("Enter a divisible number");
// if (devNum % 3 === 0) {
//     alert(devNum + " " + "is Divisible by 3");
// }
// else{
//     alert(devNum + " " +"is not divisble by 3");
// }

// Que 9
// var num = 6;
// if (num % 2 === 0) {
//   alert(num+ " "+"is an even number.");
// } else {
//   alert(num+ " "+ "is an odd number.");
// }

// Que 10
// var temprature=+prompt("Enter weather temperature");

// if(temprature >= 40){
//     alert("“It is too hot outside.”");
//     if(temprature >= 30){
//         alert("“The Weather today is Normal.”");
//     }
// }
// else if(temprature >= 20){
//     alert("“Today’s Weather is cool but better.”");
// }
// else if(temprature >= 10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }
// else{
//     alert("Abba Murree wala scene hua wa yahan to!");
// }

// Que 11
// var firstNum = +prompt("Enter a Num");
// var opt = prompt("Enter a operetor:........i.e," + " " + "+" + "" + "-" + " " + "*" + " " + "%");
// var secondNum = +prompt("Enter a Second Num");

// if (opt == "+") {
//     alert(firstNum + secondNum);
//     if (opt == "-"); {
//         alert(firstNum - secondNum);
//     }
// }
// else if (opt == "*") {
//     alert(firstNum * secondNum);
// }
// else if (opt == "%") {
//     alert(firstNum % secondNum);
// }
// else if (opt == "/") {
//     alert(firstNum / secondNum);
// }
// else {
//     alert("Syntex Error!");
// }
// Chapter 12 to 13

// Que 1
// var char = prompt("Enter a Character::");
// if (char >= "0" && char <= "9") {
//     alert("(" + char + ")" + " " + "is a num:");
// }
// if (char >= "A" && char <= "Z") {
//     alert("(" + char + ")" + " " + "is an uppercase letter.");
//     if (char >= "a" && char <= "z") {
//         alert("(" + char + ")" + " " + "is an Lowercase letter.");
//     }
// }
// if (char >= "a" && char <= "z") {
//     alert("(" + char + ")" + " " + "is an Lowercase letter.");
// }
// else {
//     alert("Error!");
// }

// Que 2
// var firstNum=+prompt("Enter a First Number");
// var secondNum=+prompt("Enter a second Number");

// if(firstNum > secondNum){
//     alert(firstNum + " "+"is larger.");
// }
// else if(secondNum > firstNum){
//     alert(secondNum+" "+"is Larger.");
// }
// else{
//     alert("The Two Numbers Are Equal");
// }

// Que 3
// var num=+(prompt("Enter a number:"));
// if(num > 0){
//     alert(num +" "+"is a positive number");
// }
// else if(num < 0){
//     alert(num +" "+ "is a negative number");
// }
// else{
//     alert(num +" "+ "is a zero");
// }

// Que 4
// var vowels = prompt("Enter vowels");
// if (vowels === "aeiou") {
//     alert("true::\n Yes this is vowel word");
// }
// else if (vowels === "AEIOU") {
//     alert("true::\n Yes this is vowel word");
// }
// else{
//     alert("False::\n This is Not a vowel word");
// }
// ........................
// var vowels = "aeiouAEIOU";
// var input = "a";
// var isVowel = vowels.indexOf(input) !== -1;

// console.log(isVowel); // Output: true

// input = "b";
// isVowel = vowels.indexOf(input) !== -1;

// console.log(isVowel); // Output: false

// Que 5
// var correctPass = "786786";
// var password = +prompt("Enter Your password");
// if (password == "") {
//     alert("Please Enter the password!");
// }
// else if (password == correctPass) {
//     alert("“Correct! \n The password you entered matches the original password”.");
// }
// else{
//     alert("Incorrect password!");
// }

// Que 6
// var greeting;
// var hour = 20;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }
// alert(greeting);

// Que 7
// var time = prompt("Enter the time in 24-hour format (e.g. 1900 for 7pm): ");
// if (time >= 0000 && time < 1200) {
//     alert("Good morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     console.log("Good evening!")
// }
// else if (time >= 2100 && time <= 2359) {
//     console.log("Good night!");
// }
// else{
//     alert("Invalid time entered. Please enter a valid time in 24-hour format (e.g. 1900 for 7pm).");
// }