import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("You have to fill the name"),
    last_name: Yup.string().required("You have to last the name"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    phone: Yup.number()
      .positive("Invalid phone number")
      .integer("Invalid phone number")
      .required("Required"),
    organization: Yup.string().required("Required"),
    designation: Yup.string().required("Required"),
    salary: Yup.number().required("Required"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
		  <label htmlFor="name">First Name :-</label>
            <Field name="first_name" type="text" className="form-control" />
            <ErrorMessage
              name="first_name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Last Name :-</label>
            <Field name="last_name" type="text" className="form-control" />
            <ErrorMessage
              name="last_name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Email :-</label>
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Phone :-</label>
            <Field name="phone" type="number" className="form-control" />
            <ErrorMessage
              name="phone"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Organization :-</label>
            <Field name="organization" type="text" className="form-control" />
            <ErrorMessage
              name="organization"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Designation :-</label>
            <Field name="designation" type="text" className="form-control" />
            <ErrorMessage
              name="designation"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
		  <label htmlFor="name">Salary :-</label>
            <Field name="salary" type="text" className="form-control" />
            <ErrorMessage
              name="salary"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;
