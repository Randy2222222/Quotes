// checks if one day has passed. 
function hasOneDayPassed()
  // get today's date. eg: "7/37/2007"
  var date = new Date().toLocaleDateString();

  // if there's a date in localstorage and it's equal to the above: 
  // inferring a day has yet to pass since both dates are equal.
  if( localStorage.yourapp_date == date ) 
      return false;

  // this portion of logic occurs when a day has passed
  localStorage.yourapp_date = date;
  return true;
}


// some function which should run once a day
function runOncePerDay(){
  if( !hasOneDayPassed() ) return false;

  // your code below
const fs = require("fs");
// note this will be async
function getRandomLine(filename, callback){
  fs.readFile(quote.txt, "utf-8", function(err, data){
    if(err) {
        throw err;
    }

    // note: this assumes `data` is a string - you may need
    //       to coerce it - see the comments for an approach
    var lines = data.split('\n');
    
    // choose one of the lines...
    var line = lines[Math.floor(Math.random()*lines.length)]

    // invoke the callback with our line
    callback(line);
 })
}



runOncePerDay(); // run the code
runOncePerDay(); // does not run the code
