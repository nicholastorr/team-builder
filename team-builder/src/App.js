import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Form'

function App() {
  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName] :inputValue
    })
  };

  const submitForm = () => {
    const newMember = {
      username: formValues.username,
      email: formValues.email,
      role: formValues.role
    }
  }



  return (
    <div className="App">
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    </div>
  );
}

export default App;
