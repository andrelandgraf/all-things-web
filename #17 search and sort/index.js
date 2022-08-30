const fruits = [
    {
      priceInCents: 700, // 0 in JavaScript is falsy
      name: 'Coconut'
    },
    {
      priceInCents: 100,
      name: 'Blueberry'
    },
    {
      priceInCents: 100,
      name: 'Apple'
    },
    {
      priceInCents: 100,
      name: 'Pineapple'
    },
    {
      priceInCents: 100,
      name: 'Orange'
    },
    {
      priceInCents: 1000,
      name: 'Orange'
    },
    {
      priceInCents: 150,
      name: 'Grapes'
    },
    {
      priceInCents: 1000,
      name: 'Grapefruit'
    },
    {
      priceInCents: 500,
      name: 'Mango'
    },
    {
      priceInCents: 1500,
      name: 'Papaya'
    },
  ]
  
  // Time complexity: O(1) constant
  // Space complexity: O(1) constant
  function sum(a, b) {
    return a + b
  }
  
  // Time complexity: O(n) linear
  // Space complexity: O(n) linear
  function cloneArray(array) {
    let clone = []
    for(let i = 0; i < array.length; i++) {
      const item = array[i]
      clone.push(item)
    }
    return clone
  }
  
  
  function weirdCalcs(array1) { // array1.length = n
     /// ...
    for(let i = 0; i < array1.length; i++) {
      // ...
    } // O(n)
    // ...
    for(let i = 0; i < array1.length; i++) {
      // ...
    } // O(n)
  } // O(n+n) => O(n)
  
  // array1.length = n
  // array2.length = m
  function weirdCalcs2(array1, array2) { 
     /// ...
    for(let i = 0; i < array1.length; i++) {
      // ...
    } // O(n)
    // ...
    for(let i = 0; i < array2.length; i++) {
      // ...
    } // O(m)
  } // O(n+m) => O(n+m)
  
  // O(1) constant
  // => O(log n) square root of its self / exponetial reduction?
  // => O(n) linear to the input value n
  // => O(nlogn) 
  // => nested loops O(n^2) quadratic growth?
  // ?? recursion O(2^n) exponential growth based on the input value
  // => three nested loops O(n^3)
  // => 4 nested loops O(n^4)
  // O(n!)
  
  // Time complexity: O(n) linear to the length of the fruits array
  // Space complexity: O(1) constant!
  function getFruitValueWithLoop(fruits, name) {
    for (let i = 0; i < fruits.length; i++) {
      // Assign current element
      const fruit = fruits[i]
      // console.log(fruit) { name: string, priceInCents: number }
      if (fruit.name === name) {
        return fruit.priceInCents
      }
    }
    return null
  }
  
  /**
  First Question: Find the priceInCents for the fruit with
  name that matches the parameter name
  
  If you can't find something: return null
  If you find several matches: return the first
  */
  function getFruitValue(fruits, name) {
   const fruit = fruits.find(ele => ele.name === name);
    if(fruit === undefined) {
      return null
    }
    return fruit.priceInCents;
  }
  
  // this is O(n) time complexity. I hate it. make it faster?
  // 🔥!!!! SORTED !!!!🔥 => binary search O(logN) time complexity
  
  // we could always check two elements per iteration
  // first iteration, check first and last
  // second iteration, check second, and second to last
  // stop when both meet in the middle
  // improve from O(N) => O(N/2) => O(N)
  
  /*
  Expect fruits to be sorted alphabetically by name (asc)
  Find the fruit that matches the name
  so that the time complexity is better than O(n)
  // O(N) => O(N)
  */
  function getFruitValueOfSortedFruitsIntuitiveApproach(fruits, name) {
   // intuitive solution
   for(let i = 0; i < fruits.length; i++) {
     const fruit = fruits[i];
     if(fruit.name === name) {
       return fruit.priceInCents;
     }
     // Mango      // Apple
     if(fruit.name > name) {
       return null;
       // we reached the point where nothing in the array
       // can match our current value because our current value
       // is smaller
     }
   }
   return null;
  }
  
  /*
   assume fruits is an dictionary like this:
    Time complexity: O(1)
   {
     "Mango": 1000,
     "Apple": 4000,
     "Coconut": 23423
   }
  */
  function getFruitValueWithDictionary(fruits, name) {
    return fruits[name];
  }
  
  /// 3 search algorithm classes
  // -   linear search
  // -   binary search
  // -   hash search???
  
  // Time complexity of O(logn) 
  function getFruitValueOfSortedFruitsBinarySearch(fruits, name) {
   // intuitive solution
   
   // we want logN        looking for: Banana
    // [ "Apple", "Banana", "Cherry", "Mango", "Zuccccchini" ]
    /*   Search from the middle! Break it into a tree!
                            Cherry
        Apple                          Mango    
        
          Banana                         Zucccchini
    
    */
    let lowerBound = 0;
    let upperBound = fruits.length - 1;
    while(lowerBound <= upperBound) {
      const middleIndex = Math.floor((upperBound + lowerBound) / 2)
      const fruit = fruits[middleIndex];
      if(fruit.name > name) {
        upperBound = middleIndex - 1;
        // looking for: Banana
        // [ ("Apple", "Banana"), "Cherry", "Mango", "Zuccccchini" ]
      } else if(fruit.name < name) {
        lowerBound = middleIndex + 1;
        // looking for: Banana
        // [ "Apple", ("Banana"), "Cherry", "Mango", "Zuccccchini" ]
      } else {
        return fruit.priceInCents;
      }
    }
    return null;
  }
  
  
  /*
  Array functions: filter vs. find: 
  - find returns the first thing it finds that matches the condition
  - filter returns an array (filtered by the condition)!!!!
  */
  
  console.log(getFruitValue(fruits, "Mango")); // expects 500
  console.log(getFruitValue(fruits, "Papaya")); // expects 1500
  console.log(getFruitValue(fruits, "Grapefruit")); // expects 1500