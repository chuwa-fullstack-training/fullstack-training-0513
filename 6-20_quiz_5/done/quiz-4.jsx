/* 
  Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form,
  commonly seen on marketing websites for visitors to ask questions or provide feedback.
*/

/*
  Requirements
    The form should contain the following elements:
    Name field.
    Email field.
    Message field. Since the message can be long, a <textarea> will be more suitable.
    Submit button, contains the text "Send".
Clicking on the submit button submits the form.
The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
There is no need to do any client-side validation on the fields. Validation will be done on the server side.
*/





const App = () => {
  return (
    <form
      onSubmit={() => { /* TODO */ }}>
      <input type="text" />
    </form>
  );
}

export default App;