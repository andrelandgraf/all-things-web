console.log("Hello 🌎");

class FakeReact {
  constructor() {
    this.registeredThings = [];
    this.state = {};
  }
  registerClick(id, func) {
    this.registeredThings.push([id, func]);
  }
  registerClicks(id, func) {
    this.registeredThings.forEach(([id, func]) => {
      const element = document.getElementById(id);
      if(!element) {
        console.log(`Could not find element with id ${id}`)
      }
      element.addEventListener("click", func);
    }
    )                                                           
  }
  deregisterClicks() {
    this.registeredThings.forEach(([id, func]) => {
      const element = document.getElementById(id);
      element.removeEventListener("click", func);
    })
    this.registeredThings = [];
  }
  rerender() {
    this.deregisterClicks();
    this.element.innerHTML = this.RootComponent();
    this.registerClicks();
    console.log("THE Mysterious React state", this.state)
  }
 useState(id, defaultValue) {
     console.log(id, defaultValue)
    if(this.state[id]) {
      console.log(`omg found!!! ${id}`)
      return this.state[id];
    }
    let value = defaultValue;
    let self = this;
    function setValue(newValue) {
      const [lastValue, func] = self.state[id] 
      self.state[id] = [newValue, func]
      self.rerender();
    }
    this.state[id] = [value, setValue]
    return [value, setValue];
  }
  render(id, RootComponent) {
    this.element = document.getElementById(id);
    if(!this.element) {
      throw Error("element for id not found");
    } 
    this.RootComponent = RootComponent;
    this.rerender();
  }
}

const React = new FakeReact();

function App() {  
  const [addValue, setAddValue] = React.useState("state-1", 0);
  const [substractValue, setSubstractValue] = React.useState("state-2", 0);
  
  const addOneToValue = () => {
    setAddValue(addValue + 1);
  }
  
  const substractOneFromValue = () => {
    setSubstractValue(substractValue - 1);
  }

  return `
    <nav>
    <ul>
      <li><a href="/home.html">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/resume.html">Resume</a></li>
    </ul>
  </nav>
  <h1 class="heading-one">Home</h1>
  ${Button({
    id: "button-1",
    value: `Add ${addValue}`,
    isPrimary: true,
    classes: "margin-right",
    onClick: addOneToValue
  })}
  ${Button({
    id: "button-2",
    value: `Substract ${substractValue}`,
    onClick: substractOneFromValue
  })}
  `;
}

function Button({ id, onClick, value, isPrimary = false, classes = "" }) {
  React.registerClick(id, onClick);
  return `
  <button id=${id} class="button ${isPrimary ? "button-primary" : ''} ${classes}">
  ${value}
  </button>`
}

React.render('app', App)