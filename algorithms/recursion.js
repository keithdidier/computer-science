let animals={
    dog:{
      labrador:{
        american:'http://dogpics.com/7423.png', 
        english:'http://dogpics.com/5274.png'
      }, 
      akita:{
        japanese:'http://dogpics.com/3486.png', 
        american:'http://dogpics.com/4843.png'
      }, 
      poodle:{
        standard:{
          french:'http://dogpics.com/8484.png', 
          barbone:'http://dogpics.com/1268.png'
        }, 
      minature:'http://dogpics.com/1350.png', 
      toy:'http://dogpics.com/884.png'
      }, 
    }, 
    cat:'http://grumpycat.com/mrGrumpy.png'
  }
  
  // create a function that takes in an object, count with the
  // default of count being 0 
  
  // create a for in loop that loops over the obj
  
  // add an if else statement, where the if checks to see if the value of the property 
  // is an object
  
  function printObj(obj, count=0) {
    for(let prop in obj) {
      if(typeof obj[prop] === "object") {
        console.log("---".repeat(count) + " " + prop)
        printObj(obj[prop], count + 1)
      } else {
        console.log(`${"---".repeat(count)} ${prop}: ${obj[prop]}`)
      }
    }
  }
  printObj(animals)

//*************************************************


//basic factorial 
function computeFactorial(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * computeFactorial(num - 1);
  }
}
computeFactorial(4);

//Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

var countDown = function(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
};
countDown(5);

//Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function(arr) {
  var reversedArr = [];
  var addItems = function(orderedArr) {
    //if array is empty, return
    if(orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop());
      addItems(orderedArr); 
    }
    return;
  };
  addItems(arr);
  return reversedArr;
};
recursiveReverse([1,2,3,4,5,6]);

//Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

// [1,2,3] 3 => [3,6,9]

var recursiveMultiplier = function(arr, num) {
  if(arr.length === 0) {
    return arr;
  }
  var last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);
  return arr;
}
recursiveMultiplier([1,2,3], 3);