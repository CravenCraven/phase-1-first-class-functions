// function Monday(){
//     console.log("Go for a five-mile run");
//     console.log("pump iron");
// }

// function Tuesday(){
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function Wednesday(){
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
// }

// function Thursday(){
//     console
// }

// function Friday(){
//     console.log("Go for a five-mike run");
//     console.log("Swim 40 laps");
// }


// function runFiveMiles(){
//     console.log("Go for a five-mile");
//function greet(name, myFunction){
    //console.log('Hello world');
    //myFunction(name);
//}

//callback function
//function sayName(name){
    //console.log('Hello'+ ''+name);
//}

//call the function
//setTimeout(greet,2000, 'Craven',sayName);

// }


function receivesAFunction(yoga){
    console.log ("I like doing Yoga");

yoga();
}

function returnsANamedFunction(){
    function yogaFunction(){
        console.log("Hot yoga function");
    }
    return yogaFunction;

}

function returnsAnAnonymousFunction(){
    const anonymousFunction  = function (){
        console.log ("I am the anonymous function");
    }
    return anonymousFunction;
};

const yogaHotFunction = returnsAnAnonymousFunction();
yogaHotFunction();

// setTimeout(function(){
//     console.log ('Hot Yoga rocks!');
// }, 2000);

function returnsAnAnonymousFunction() {
    
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  // Usage
  const myFunction = returnsAnAnonymousFunction();
  myFunction(); 
  
  

