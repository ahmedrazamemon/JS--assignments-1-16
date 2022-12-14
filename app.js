//(chapter) 1 Alerts  (STARTED)
// alert('Error!Please enter a valid password')
//  alert('Welcome to js land \t \n Enjoy coding!')
//  alert("Welcome to js land \t")
// alert('Happy coding! \n Prevent this page by creating additional dialogs.')
// alert('Hello \t i can run js through my web browsers console')
//(COMPLETED)
//(Chapter 2) VARIABLES FOR STRINGS (STARTED)
// var username;
// var  myname;
// myname= "Ahmed Raza";
// var message;
// message = "Hello World";
// var age;
// age = "15 years old";
// var course;
// course = "Web & App";
// var pizza;
// pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// var email;
// email = "ahmedsiraj7954@gmail.com";
// var book;
// book = " i am trying to learn java script form the book \n A SMARTER WAY TO LEARN JAVASCRIPT"
// document.write("Yah! I can write HTML content by java script")
// var copy;
// copy = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”" 
// alert(myname)
// alert(age)
// alert(course)
// alert(pizza)
// alert(book)
// alert(copy)
//(COMPLETED)
// Chapter 3 (variables for stringes) started 
//
// var age= "I am 15 years old.."
// var visit="You have visited this 14 times"
// var birthyear="My birth year is 2005"
// alert(age)
// alert(visit)
// document.write(birthyear)
// document.write("The data type of my birth year is number")
// var visitorname=prompt("Type Your Name")
// var producttitle=prompt("Product Name")
// var quantity=prompt("Quantity ?")
// var store="Mr clothing store"
// document.write(visitorname +  "  ordered  "  + quantity + producttitle + " from " +  store)
//(completed)
//chapter 4 (legal or illegal variables) started
// var carname
// var model
// var registration
//legal variables
// var $dollar
// var _hyderabad
// var smit
// var count=25
// var karachi
//illegal variables
// var #mycode
// var ^up
// var @gmail
// var &add
// var *star
// document.write("a)  A heading stating “Rules for naming JS variables” <br> b)  Variable names can only contain <br> _number_, _$_, ___ and _letter_. For example $my_1stVariable <br> c) Variables must begin with a ______, ___$__ or _letter_. For example $name, _name or name <br> d) Variable names are case ___sensitive__ .<br> e) Variable names should not be JS ___keywoards__ . ")
////Chapter 5(MATH EXPRESSIONS)  
// task 1
// var value1=parseInt(prompt("Enter Value1","0"))
// var value2=parseInt(prompt("Entervalue2","0"))

// var addition = value1+value2 
// document.write(" The Addition of "  + value1 +  " and "  +  value2  + "  is  "  +  addition)

    // var subtraction = value1-value2
//     document.write("The Subtraction of " + value1 + "and" + value2 + "is" + subtraction)


    // var multiplication = value1*value2
//     document.write(" The Multiplication of " + value1 + "and" + value2 + "is" + multiplication)

    // var division = value1/value2
    // document.write("The Division of " + value1 + "and" + value2 + "is" + division)

    // var remainder = value1%value2
//     document.write("The Remainder of "  + value1 + "and" + value2 + "is" + remainder)
//task2
// var valueofvar=
// document.write("value after variable declaration is " + valueofvar +"<br>") 
// valueofvar=5
// document.write("Initial value : " + valueofvar)
// valueofvar++
// document.write("<br> value after increament is : "+valueofvar)
// var add=valueofvar+7
// document.write("<br> Value after addition is  : " + add )
// add--
// document.write("<br> Value after decreament is : "+add)
// var mod=add%2
// document.write("<br> The remainder is : " + mod ) 
//task 3
// var ticket=parseInt(prompt( "Cost of 1 ticket is 600 How many tickets you want to buy ?","0"))
// var store=prompt("Your Answer YES/NO")
// var sum =ticket*600
// if (store=="yes"){
//     document.write( " The  cost of  tickets are" + sum)

// }
// else{
//     document.write("NEXT!")
// }

//task 4
// var num=parseInt(prompt("Enter Table Number"))
//document.write("<h1> Table of " + num + "</h1> <br> " )
// document.write(num + " x " +  " 1  =  "  +  num*1 )
// document.write("<br>"+num + " x " +  " 2  =  "  +  num*2 )
// document.write("<br>"+ num + " x " +  " 3  =  "  +  num*3 )
// document.write("<br>"+ num + " x " +  " 4  =  "  +  num*4 )
// document.write("<br>"+ num + " x " +  " 5  =  "  +  num*5 )
// document.write("<br>"+ num + " x " +  " 6  =  "  +  num*6 )
// document.write("<br>"+ num + " x " +  " 7  =  "  +  num*7 )
// document.write("<br>"+ num + " x " +  " 8  =  "  +  num*8 )
// document.write("<br>"+ num + " x " +  " 9  =  "  +  num*9 ) 
// document.write("<br>"+ num + " x " +  " 10  =  "  +  num*10 )
//task5
// document.write("<h1> Tempreture Calculator </h1>")
// var c=parseInt(prompt("Enter Celsius Tempreture"))
// var f=parseInt(prompt("Enter Fahrenheit Tempreture"))
// var fer=(c*9/5)+32 
// var cel=(f-32)*5/9
// document.write(c+"<sup>0</sup>C  is  " +  fer+"<sup>o</sup>C <br>")
// document.write(f+"<sup>0</sup>C  is " +  cel+"<sup>o</sup>C ")
//task 6
// document.write("<h1>"+"SHOPPING CART" + "</h1> " )
// var qitem1=parseInt(prompt("Please Tell Quantity Of Item 1","0"))
// var itemno1="Item 1"
// var pitem1="650"
// document.write("<br>"+ "Price of  " + itemno1 + "  is  " + pitem1)
// document.write("<br>"+ "Quantity of " + itemno1 + " is " + qitem1)
// var qitem2=parseInt(prompt("Please Tell Quantity Of Item 2","0"))
// var itemno2="Item 2"
// var pitem2="100"
// var costi1=qitem1*pitem1
// var costi2=qitem2*pitem2
// var total=costi1+costi2+100
// document.write("<br>"+ "Price of  " + itemno2 + "  is  " + pitem2)
// document.write("<br>"+ "Quantity of " + itemno2 + " is " + qitem2)
// document.write("<br>"+ "Shipping Charges 100")
// document.write("<br>"+ "<br>"+ "Total Cost of Your Order Is " + total)

//task 7
// document.write("<h1>"+"MARKS SHEET" + "</h1> " )
// var obmarks=parseInt(prompt("Enter Obtained Marks","0"))
// var totalmarks=parseInt(prompt("Enter Total Marks","0"))
// var result=obmarks/totalmarks*100
// document.write("<br>" + " Obtained Marks:  " + obmarks)
// document.write("<br>" + "Total Marks:  " + totalmarks)
// document.write("<br>"+"<br>" + " Percentage: " + result+"%" )

//task 8
// document.write("<h1>" + "Currency In PKR" + "</h1>")
// var dollar=parseInt(prompt("US Dollars ?","0"))
// var Riyal=parseInt(prompt("Saudi Riyals ?","0"))
// var pkr=104.80
// var spkr=28
// var calculate$=dollar*pkr
// var calculteR=Riyal*spkr
// var total=calculate$+calculteR
// document.write("<br>" + "Total Currency To PKR " + total)

// //task 9
// var value=parseInt(prompt("Enter Value","0"))
// var sum=value + 5*10/2
// document.write(sum)

//task 10
// document.write("<h1>" + "Age Calculator" + "</h1>")
// var dob=parseInt(prompt("Birth Date","0"))
// var presentdate=parseInt(prompt("Presnt Year","0"))
// var age=presentdate-dob
// document.write("<br>" + " Birth Year: " + dob)
// document.write("<br>" + "Present Year: " + presentdate )
// document.write("<br>" + "Your Age Is:" + age)
//task 11
// document.write("<h1> The Geometrizer </h1>")
// var radius=parseInt(prompt("Pleade Tell Radius?"))
// var cur=2*3.142*radius
// var area=3.142*radius*20
// document.write("The Radius of Circle is:"+radius +"<br> The Circumference of Circle is:"+cur+"<br> The Area Of Circle is:"+area )

//task 11
// document.write("<h1> Life Time Supplier Calculator </h1>")
// var snack=prompt("Your Favourite Snack ? ")
// var curage=parseInt(prompt("Your Age ?") )
// var maxage=65
// var perday=parseInt(prompt("How Many Snacks Do You Eat In a Day ?" ))
// var agecalculation=maxage-curage
// var result= perday*agecalculation
// document.write("Favourite Snack :" + snack + "<br>")
// document.write("Current Age :" + curage + "<br>")
// document.write("Esminated Maximum Age : " + maxage + "<br>")
// document.write("Amount of snacks per day : " + perday  + "<br>")
// document.write("You  Will  Need  " + result + snack + "To  Last  You  Until  The  Ripe  Old  Age  Of  "  +  maxage + "<br>")
//chapter 6-9 Math Expressions (STARTED)
//task 1
// var a=parseInt(prompt("Enter Value","0"))
// document.write("<h1>RESULT</h1> The value of a is :" + a)
// ++a
// document.write("<br> <br> <br> The value of  + + a is :" + a)
// document.write("<br> Now the value of a is :" + a)

// document.write("<br> <br> <br> The value of  a + + is :" + a)
// a++     
// document.write("<br> Now the value of a is :" + a)
// --a
// document.write("<br> <br> <br> The value of  - - a  is :" + a)
// document.write("<br> Now the value of a is :" + a)

// document.write("<br> <br> <br> The value of  a - - is :" + a)
// a--
// document.write("<br> Now the value of a is :" + a)
//task 1 (COMPLETED)
//task 2 started
// var b = 2
// var c = 1
// document.write("Value of b is : " + b + "<br> value of c is : " + c)
// --b
// document.write("<br> value of - - b is : " + b)
// b - --c
// document.write("<br> value of --b - --c is :" + b +","+ c)
// b 
// document.write("<br> The value of --b is : " + b)
// // document.write("<br> Value of --b is :-"+ b +"<br> value of - - b (-) - - c is  :  "  +  --c + "<br> the value of --b (-) --c (+) ++b is :"+ ++b )
// c
// document.write("<br> The value of --c is :" + c)
// ++b
// document.write("<br> The value of ++b is : " + b)
// document.write("<br> The value of --b (-) --c (+) ++b is : " + b+"," +c)
// document.write("<br> The value of --b (-) --c (+) ++c + c--  is : " + c-- )
//task3 started
// var num=parseInt(prompt("Enter Table Number","5"))
// document.write("<h1> Table of " + num + "</h1> <br> " )
// document.write(num + " x " +  " 1  =  "  +  num*1 )
// document.write("<br>"+num + " x " +  " 2  =  "  +  num*2 )
// document.write("<br>"+ num + " x " +  " 3  =  "  +  num*3 )
// document.write("<br>"+ num + " x " +  " 4  =  "  +  num*4 )
// document.write("<br>"+ num + " x " +  " 5  =  "  +  num*5 )
// document.write("<br>"+ num + " x " +  " 6  =  "  +  num*6 )
// document.write("<br>"+ num + " x " +  " 7  =  "  +  num*7 )
// document.write("<br>"+ num + " x " +  " 8  =  "  +  num*8 )
// document.write("<br>"+ num + " x " +  " 9  =  "  +  num*9 ) 
// document.write("<br>"+ num + " x " +  " 10  =  "  +  num*10 )
//task3 completed
//task4 started
// document.write("<h1> Subject Total Marks Obtained Marks Percentage </h1>")
// var totalmarks=100
// var allsubmarks=300
// var sub1 = prompt("Enter Subject 1 Name")
// var sub2 = prompt("Enter Subject 2 Name")
// var sub3 = prompt("Enter Subject 3 Name")
// var obmsub1 = parseInt(prompt("Enter Obtained Marks Of Subject 1"))
// var obmsub2 = parseInt(prompt("Enter Obtained Marks Of Subject 2"))
// var obmsub3 = parseInt(prompt("Enter Obtained Marks Of Subject 3"))
// var persub1=obmsub1/totalmarks*100
// var persub2=obmsub2/totalmarks*100
// var persub3=obmsub3/totalmarks*100
// var totalobmarks=obmsub1+obmsub2+obmsub3
// var totalobper=totalobmarks/allsubmarks*100
// document.write("<br><h3>&emsp;&emsp;" + sub1 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; " + totalmarks + " &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; " + obmsub1 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+persub1+"% <br>" + "&emsp;&emsp;" + sub2 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+totalmarks+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + obmsub2 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ persub2+ "% <br>" + "&emsp;&emsp;" + sub3 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+totalmarks+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + obmsub3 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+persub3+"% <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+allsubmarks+ "&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;"+totalobmarks+"&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;"+totalobper+ "%")
//task4 completed
//chapter 6-9 completed
//chapter 9-11 conditional statments started
//task1
// var city=prompt("Enter City Name")
// if(city=="karachi"){
//     document.write("Welcome to the city of lights")
// }
// else if(city=="hyderabad"){
//     document.write("Welcome to Hyderabad")
// }
// else{
//     document.write("Not in list!")
// }
//task2
// var gender=prompt("Gender?")
// if(gender=="male"){
//     document.write("Good Morning Sir !")
// }
// else if(gender=="female"){
//     document.write("Good Morning  Mam !")
// }
// else{
//     document.write("Invalid..")
// }
//task3
// document.write("<table> <tr> <th>Signal Color &emsp;&emsp;&emsp;")
// document.write("Message</th></tr> ")

// var signal=prompt("Enter Signal Color ")
// if(signal=="red"){
//     document.write("<tr><td> Red &emsp;&emsp;&emsp;&emsp; Must Stop </td></tr>")
// }
// else if(signal=="yellow"){
//     document.write("<tr><td class='line2'> Yellow &emsp;&emsp;&emsp;&emsp; Ready To Move </td></tr>")
// }
// else if(signal=="green"){
//     document.write("<tr><td>Green &emsp;&emsp;&emsp;&emsp; Move Now </td></tr> </table>")
// }
// else{
//     document.write("Enter Correct Signal")
// }
//task4
// var fuel=parseFloat(prompt("Enter  Remaining Fuel"))
// if(fuel<0.25){
//     document.write("Please Get Fuel  Refill !")
// }
// else{
//     document.write("It's Enough ..")
// }
//task5
// var a=4
// var b=82
// var c=12
// if(++a==5){
//     alert("Given condition for variable a is true")
// }
// if(b++==83){
//     alert("Given condition for variable b is true")

// }
// if(c++==13){
//     alert(" condition 1 is true")

// }
// if(c==13){
//     alert(" condition 2 is true")

// }
// if(++c<14){
//     alert(" condition 3 is true")

// }
// if(c==14){
//     alert(" condition 4 is true")

// }
// //task 6
// var materialcost=20000
// var labourcost=2000
// var totalcost=materialcost+labourcost
// if(totalcost==labourcost+materialcost){
//     alert("Costs Are Equal")
// }
// if(true){
//     alert("True")
// }
// if(false){
// alert("false")
// }
// if("car"<"cat"){
//     document.write("car is smaller than cat")
// }
//task 7

// document.write("<Div class='sheet'>" +"<h1>"+"MARKS SHEET" + "</h1> " )
// var obmarks=parseInt(prompt("Enter Obtained Marks","0"))
// var totalmarks=parseInt(prompt("Enter Total Marks","0"))
// var result=obmarks/totalmarks*100
// document.write("<br>" + "Total Marks:  " + totalmarks)
// document.write("<br>" + " Obtained Marks:  " + obmarks)
// document.write("<br>" + " Percentage: " + result+"%" )
// if(result>=80){
//     document.write("<br> Grade : A-one <br> Remarks : Excellent")
// }
// else if(result>=70){
//     document.write("<br> Grade : A <br> Remarks : Good")

// }
// else if(result>=60){
//     document.write("<br> Grade : B <br> Remarks : You Need To Improve ")

// }else{
//     document.write("<br> Grade : Fail <br> Remarks : Sorry.."+"</Div>")

// }
//task8
// var secretnumber=(Math.random()*100).toFixed()
// var guees=parseInt(prompt("Guees Secret Number"))
// if(guees==secretnumber){
// document.write("Bingo ! Correct Answer")
// }
// else if(guees+1==secretnumber){
// document.write("Close Enough To Correct Answer")
// }
// else{
// document.write("Better Luck Next Time")
// }
//task9
// var inp=parseInt(prompt("Enter Number"))
// if(inp%3==0){
// document.write("It can be divided by 3")
// }
// else{
// document.write("It's not divisible by 3")
// }
// //task10
// var even=parseInt(prompt("Enter Number.."))
// if(even%2==0){
//     document.write("It's Even Number")
// }
// else{
//     document.write("This Number is odd Number")
// }
//task 11
// var temp=parseInt(prompt("Enter Tempreture"))
// if(temp>=40){
// document.write(" It is too hot outside ")
// }
// else if(temp>=30){
// document.write("Today's weather is normal")
// }
// else if(temp>=20){
//     document.write("Today's weather is cold !")
// }
// else if(temp>=10){
//     document.write('OMG! "Weather is too much cold .."')
// }
//task12
// var value1=parseInt(prompt("Enter Number 1","0"))
// var value2=parseInt(prompt("Enter Number 2","0"))
// var opt=prompt("Enter operation you want")
// var addition = value1+value2
// var subtraction = value1-value2
// var multiplication = value1*value2
// var division = value1/value2
// var remainder = value1%value2

// if(opt=="+"){
//     document.write(" The Addition of "  + value1 +  " and "  +  value2  + "  is  "  +  addition)
// } 

// else if(opt=="-"){
//     document.write("The Subtraction of " + value1 + "and" + value2 + "is" + subtraction)

// }
// else if(opt=="*"){
//     document.write(" The Multiplication of " + value1 + "and" + value2 + "is" + multiplication)
// }
// else if(opt=="/"){
//     document.write("The Division of " + value1 + "and" + value2 + "is" + division)
// }
// else if(opt=="%"){
//     document.write("The Remainder of "  + value1 + "and" + value2 + "is" + remainder)
// }
// else{
//     document.write("you entered invalid value")
// }
//chapter completed
//chapter 11-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS started
//task1
// var input=prompt("Input letter")
// var getasci = input.charCodeAt(0)
// if(getasci>=65 && getasci<=90){
// document.write("You Entered Capital Letter")
// }
// else if(getasci>=97 && getasci<=122){
//     document.write("You Entered Small Letter")
// }
// else{
//     document.write("You Entered Number")
// }
// task2
    // var inp1=parseInt(prompt("Enter First Number"))
    // var inp2=parseInt(prompt("Enter Second Number"))
    // if(inp1==inp2){
    //     document.write("Both Are Equal.."  + inp1 + "  and " + inp2)
    // }else if(inp1>=inp2){
    //     document.write("First Number is Greater"+inp1)
    // }else {
    //     document.write("Second Number is Greater"+inp2)
        
    // }
    // task3
    // var value1=parseInt(prompt("Enter Any Number"))
    // if(value1==0){
    //     document.write("You Entered zero...")
    // }
    // else if(value1>0){
    //     document.write("Value is Positive..")
    // }
    // else{
    //     document.write("Value is Negative !")
    // }
    // //task 4
    // var character=prompt("Input Any Alphabet..")
    // var chkcode = character.charCodeAt(0)
    // if(chkcode==65 && 97 || 69 && 101 ){
    //     document.write("coorct:")
    // }
    // else{
    //     document.write("not")
    // }
//task3
// var inp=prompt("Enter Number")
// task4
// var password=prompt("Input Password")
// var askpassword=prompt("Re Input Password")
// if(password==askpassword){
//     document.write("The Password You Entered Is Correct " + password)
// }else{
//     document.write("Password Does not Match")
// }
// task5
// var greeting 
// var hour = 13 
// if (hour < 18){
//      greeting = "Good day"
//     document.write(greeting)
//     }
//       else 
//       {
//         greeting = "Good evening"
//         document.write(greeting)
//     } 
//  //task6
//  var time=prompt("Enter time 24 Hours Format..")
//  if(time>=0000 && time<1200){
//     document.write('"Good Morning !"')
//  }
//  else if(time>=1200 && time<1700)
// {
//     document.write('"Good Afternoon !"')

// }
// else if(time>=1700 && time<2100){
//     document.write('"Good Evening !"')

// }
// else if(time>=2100 && time<2359){
//     document.write('"Good Night !"')

// }
//  completed
//chapter 14-16 Arrays started
//task1
// var student=prompt("Write Something To Store")
// var future=prompt("Write Something To Store")
//var studentnames=[student]
// var futurename=[future]
// var cities=["karachi","hyderabad","lahore","faisalabad <br>"]
// var numbers=[7,5,6,3,7 + "<br>"]
// var boolean=[true,false+"<br>"] 
// var mixedarr=["ahmed",17,true,"smit",75637,false+"<br>"]
// var courses=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
// for(i in courses){
//             document.write(`<b> ${parseInt(i)+1} ) ${courses[i]} <b> <br/>`)
        // }
// document.write(cities,numbers,boolean,mixedarr)
// document.write(studentnames + "<br>"+futurename + "<br>")
// document.write("<div class='course'> <h1> Qualifications </h1>")
// document.write(courses+"<br>")
//
//task2
// var studentsname=["Ali" , " Zaid " , "Imran"]
// var score=[460,398,489]
// var total=500
// for(i=0;i<studentsname.length;i++){
//     document.write( "Score of  " +  studentsname[i] + " is " + score[i] + " and percentage is :" + score[i]/total*100+"% <br>")
// }
    // colors array
//  var color=["tean","red","blue","yellow"]
//  document.write(color)
//adding in start
// var color=["Red","Green","Yellow"]
// var addcolor=prompt("Which Color You Want To Add  In start of List ?")
// color.unshift(addcolor)
// document.write(color)
//adding in last
// var color=["Red","Green","Yellow"]
// var addcolor=prompt("Which Color You Want To Add  In last of List ?")
// color.push(addcolor)
// document.write(color)
//adding 2 colors in start
// var color=["Red","Green","Yellow"]
// document.write(color)
// color.unshift("Khaki","Silver")
// document.write("<br> After adding two colors in list <br> " + color)
//removing from start
// var color=["Red","Green","Yellow"]
// var addcolor=prompt("Which Color You Want To remove  In start of List ?")
// color.shift(addcolor)
// document.write(color)
//removing from end
// var color=["Red","Green","Yellow"]
// var addcolor=prompt("Which Color You Want To remove from last of List ?")
// color.pop(addcolor)
// document.write(color)
//adding to index number
// var color=["Red","Green","Yellow"]
// var userinp = prompt("Enter on which index you want to add : ")
        // color[userinp] = prompt("Add  color name : ")
        // document.write("Array after adding on desired Index : " + color +" <br/>")
    //    deleting from index number 
    // var color=["Red","Green","Yellow"]
    // var deleteindex = parseInt(prompt("From which index you want to delete : "))
    // var colorsnum = parseInt(prompt("How many colors you want to delete : "))
    // color.splice(deleteindex,colorsnum)
    // document.write("Array after deleting from desired Index : "+color+" <br/>")
    //sorting
// var score=[889,654,788,214,444]
// document.write("<div class='score'>Score of Students : " + score)
// score.sort()
// document.write("<br> After Sorting in  order : " + score + "</div>")
//selection
// var cities=[ "<div class='city'> <h3> Cities List : </h3>  Karachi","Queeta","Lahore","Islamabad","Faisalabad","Hyderabad "+"</div>"]
// document.write(cities)
//  cities.splice(1,4)
//  document.write( cities )
 //join method
//  var string=['This','is','my','cat']
//  document.write(string)
//   var arr=string.join()
// document.write(arr)
//FIFO
// document.write("<h3> FIFO => First in First out ; </h3>")
// var arr=["Keyboard","Monitor","Mouse","Printer"]
// var forout="<br> out : <br>"
// document.write("<h5 class='device'> Devices : <br>"+ arr)
// document.write(forout+arr[0],forout+arr[1],forout+arr[2],forout+arr[3]+"</h5>")
//LIFO
// document.write("<h3> LIFO => Last in First out : </h3>")
// var arr=["Keyboard","Monitor","Mouse","Printer"]
// var forout="<br> out : <br>"
// document.write("<h5 class='device'> Devices : <br>"+ arr)
// arr.reverse()
// document.write(forout+arr[0],forout+arr[1],forout+arr[2],forout+arr[3]+"</h5>")
//Select Menu
// var arr=["<Select>"+ "<option selected disabled>Select Company</option>"+"<option> Apple</option>","<option> Nokia </option>" ,"<option> Motorolla </option>","<option> Haier </option>","<option> Sony </option>","<option> Oppo </option>", "<option> Vivo </option>"+"</select>"]
// document.write(arr)