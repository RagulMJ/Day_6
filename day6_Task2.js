//Find the culprits and nail them — debugging javascript
alert("I'm invoked")

//Explain the below how it works
alert("I'm JavaScript!");
alert('Hello') 
alert(`Wor
 ld`)
alert(3 +
1
+ 2); 

//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
let lname = "geek"
admin = fname+ ` `+lname;
alert( admin );

//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("second number?");
alert(+a + +b);

//Fix the below to alert hello Guvi geek
let fname1=10.5; 
fname1 = "Guvi";
let lname1 = " geek"
let name1 = fname1+lname1;
alert( `hello ${name1}` );

//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a1 = "1" > "12";
// because the 2 is greater than 1 in "12" so it return true so if we 
// change the "2" to "1" it will return false
if (a1) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//How to get the success in console.
let a11 = +(prompt("Enter a number?"))
if (a11) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//How to get the correct score in console.
let value = +(prompt('How many runs you scored in this ball'))
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log(value);
}

//Fix the code to welcome the Employee
let login = 'Employee';
let messagelogin = (login == 'Employee') ? 'Greetings' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(messagelogin);

//Fix the code to welcome the boss
let message1 ;
if (message1 === (null || undefined) )
{
 message1 = "welcome boss";
}
else
{
 message1 = "Go away";
}
  console.log(message1);

//Fix the code to welcome the boss
let message2;
let lock ;
if (null || lock || undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
  console.log(message2);

//Fix the code to welcome the boss
let message3;
let lock1 = 0;
//Dont change any code below this
if (lock1 && " " || undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
console.log(message3);

//Change the code to print
let i = 3;
while (i) {
  console.log( i-- );
}

//Change the code to print 1 to 10 in 4 lines
let smrw1 = "";
let count = 0;
for (let i = 1 ; i < 11 ; i++){
    
        if(count === 2){
            smrw1 += i + "\n"
            count = 0
        }else{
            smrw1 += i;
            count += 1
        }
    
}
console.log(smrw1);

//Change the code to print even numbers
let countdown = 100;
while (countdown >= 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}


// the msg printed is hi in console because "0" is truth value and 0 is falsy value
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

