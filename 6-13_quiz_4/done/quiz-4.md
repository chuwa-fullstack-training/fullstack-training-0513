4. Anything wrong with the following code?

/* Pseudocode */
state = {
  name: "Alex"
}

changeState() {
  state.name = "John";
}

render() {
  <div>{state.name}</div>
  <button onClick={changeState}></button>
}















If you try to update the state directly then it won't re-render the component.

//Wrong
this.state.message = "Hello world";
Instead 
use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

//Correct
this.setState({ message: "Hello World" });
Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.