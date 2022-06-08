import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
  console.log("hfsd", props.obj);
  const {
    id,
    first_name,
    last_name,
    email,
    phone,
    organization,
    designation,
    salary,
  } = props.obj;

  const deleteStudent = () => {
    axios
      .delete("http://localhost:8000/api/v1/employees/" + id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{first_name + " " + last_name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{organization}</td>
      <td>{designation}</td>
      <td>{salary}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
