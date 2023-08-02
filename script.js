 var Names = +prompt("Enter your name");
 var Chemistry = +prompt("Enter your Chemistrymarks");
 var physics = +prompt("Enter your Physicsmarks ");
 var mathametics = +prompt("Enter your Mathemarks");
 var sindhi = +prompt("Enter your Sindhimarks");
 var totalMarks = 400;
 var studentMarks = Chemistry + physics + mathametics + sindhi;
 var percentage = studentMarks / totalMarks * 100;

 console.log(Names + Chemistry + physics + mathametics + sindhi)
 console.log(Names + " total marks is " + studentMarks + " out of " +
 totalMarks + " and percentage is " + percentage + "%");

//   var percentage = +prompt("enter your percentage");
  if (percentage < 100 && percentage >= 80) {
      console.log ("Your grde is A+")
  } else if ( percentage >=70){
      console.log ("your grde is A")
  } else if ( percentage >=60){
      console.log ("your grde is B")
  } else if ( percentage >=50){
      console.log ("your grde is C")
  }
   else {
      console.log ("your grde is fail");
  }     

  






  var Names = prompt("Enter your Name");
  var chemistry = +prompt("Enter your chemistry Marks");
  var physics = +prompt("Enter your pHysics Marks");
  var maths = +prompt("Enter your Maths Marks");
  var islamiat = +prompt("Enter your Islamiat Marks");
  var studentMarks = chemistry + physics + maths + islamiat;
  var totalMarks = 500;
  var percentage = studentMarks / totalMarks * 100;
  console.log( Names + chemistry + physics + maths + islamiat);
  console.log("My name is " + Names + "Total Marks out of" + studentMarks + "Total Marks of" + totalMarks
  + percentage + "%." )

  if (percentage < 100 && percentage >= 80){
     console.log( "Your Grade is A+ ")
  }  else if( percentage >= 70){
    console.log("Your Grade is A " )
  }  else if( percentage >= 60){
    console.log( "Your Grade is B ")
  }  else if( percentage >= 50){
      console.log( "Your Grade is c")
  } 
   else{
      console.log( "Your Grade is fail.")
  }