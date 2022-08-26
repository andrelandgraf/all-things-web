
console.log("Hello 🌎");

// Let's talk this
window.name = "Window"

function justAFunctionDeclaration() {
  console.log("in justAFunctionDeclaration, do we have this?", this); // no - undefined
  if(this) {
    console.log("in justAFunctionDeclaration:", this.name) // we never reach this
  }
}

function aFunctionCalledWithNew() {
  console.log("in aFunctionCalledWithNew, do we have this?", JSON.stringify(this)); // yes - empty object
  if(this) {
    console.log("in aFunctionCalledWithNew:", this.name) // undefine
  }
  this.name = "aFunctionCalledWithNew";
  console.log("in aFunctionCalledWithNew own this:", this.name) // "aFunctionCalledWithNew"
  this.aNestedFcInsideAFunctionCalledWithNew = function() {
    console.log("in aNestedFcInsideAFunctionCalledWithNew", this)
  }
  this.aNestedFcInsideAFunctionCalledWithNew()
}

// this is the same as aFunctionCalledWithNew
class aClass {
  constructor() {
    this.name = "aClass"
  }
  aNestedFcInsideAClassCalled() {
    
  }
}

// this in global scope is window
function x() {
  // this in x is undefined
  const z = () => {
    console.log("z", this) // undefined
  }
  
  z()
}

// const xx = new x()
x()

/* 
Definiton: 
Arrow functions don't have their own bindings to this,
arguments or super, and should not be used as methods.
*/
const anArrowFunction = () => {
  console.log("in anArrowFunction, do we have this?", this); // yes - the window
  if(this) {
    console.log("in anArrowFunction:", this.name) // "Window"
  }
}


const ob = { name: "my object" };
ob.objFunction = function() {
  console.log("in objFunction", this.name) // my object
}
ob.objFunction()


justAFunctionDeclaration();
const object = new aFunctionCalledWithNew();
console.log(object.name); // "aFunctionCalledWithNew"
anArrowFunction();