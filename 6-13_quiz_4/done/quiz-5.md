5. What is the purpose of callback function as an second argument of 

setState(() => {

} , callback)



















The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.

setState({ name: "John" }, () =>
  console.log(`The name has updated and component re-rendered, {this.state.name}`);
);