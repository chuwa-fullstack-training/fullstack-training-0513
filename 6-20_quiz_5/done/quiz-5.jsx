/*
Submission API
Upon submission, 
POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: 
  name, email, message.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!
*/







































import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.greatfrontend.com/api/questions/contact-form", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      })
      .then(res => res.text())
      .then(res => alert(res))
      .catch(res => alert(res));
  }

  return (
    <form
      onSubmit={(e) => { onSubmit(e) }}>
      <input type="text" value={formData.name} onChange={(e) => { setFormData({...formData, name: e.target.value}) }}/>
      <input type="email" value={formData.email} onChange={(e) => { setFormData({...formData, email: e.target.value}) }}/>
      <textarea value={formData.message} onChange={(e) => { setFormData({...formData, message: e.target.value}) }}/>
      <button>Send</button>
    </form>
  );
}

export default App;