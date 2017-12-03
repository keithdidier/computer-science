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