import React, { useState, useEffect } from 'react';

const AdminHome = ()  => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // called once after intial render
    fetchStudents();
  }, [] )


  const fetchStudents = () => {
    //TODO complete this method to fetch students and display list of students
    fetch('http://localhost:8080/student')
    .then(response => response.json())
    .then(data => {setFactors({id:data.student_id, name:data.name, email:data.email, status:data.status});})
    .catch(err => console.log(err));
  }

  const addStudent = (e) => {
    props.postAttempt(attempt, alias);
  }

  return (
    <div>
      <div margin="auto">
        <h3>Student List</h3>
      </div>
      <table>
        <tbody>
          <tr><label> ID </label></tr>
          <tr><label> Name </label></tr>
          <tr><label> Email </label></tr>
          <tr><label> Status Code </label></tr>
          <tr><label> Status </label></tr>
          <tr><label> Delete </label></tr>
          <tr><label> Update </label></tr>
        </tbody>
      </table>

      <br/>
      <button onClick={addStudent}>Add</button>
    </div>
  )
}

export default AdminHome;