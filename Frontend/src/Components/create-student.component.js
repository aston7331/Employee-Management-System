// CreateStudent Component for add new student

// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ first_name: '', last_name: '', email: '' , phone: '', organization: '', designation: '', salary:'' })
// onSubmit handler
const onSubmit = studentObject => {
	console.log("kjgdsjk" , studentObject);
	axios.post(
'http://localhost:8000/api/v1/employees',
	studentObject)
	.then(res => {
		if (res.status === 200){
		setFormValues({});
		alert('Student successfully created')
		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>
)
}

// Export CreateStudent Component
export default CreateStudent
