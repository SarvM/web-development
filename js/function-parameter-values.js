function myFuncPrimitive(x){
    x = 10;
    return 10;
  }
  
  var x = 20;
  console.log(x);
  var y = myFuncPrimitive(x);
  console.log(x,y);
  
  
  
  
  function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; 
  console.log(x);
  
  myFunc(mycar);
  y = mycar.make; 
  console.log(y);
                  

  /* Assigning variables */

  /* */

  function myFunc(theObject) {
    thisObject = theObject;
    theObject.make = 'Toyota';
    return thisObject;
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; 
  console.log(x);
  
  mycar = myFunc(mycar);
  y = mycar.make; 
  console.log(y);

