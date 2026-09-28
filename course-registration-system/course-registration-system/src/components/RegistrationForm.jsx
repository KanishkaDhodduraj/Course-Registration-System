import { useState } from "react";

function RegistrationForm({ onRegister }) {

  const [name, setName] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      name === "" ||
      registerNo === "" ||
      email === "" ||
      department === "" ||
      course === ""
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const studentData = {
      name,
      registerNo,
      email,
      department,
      course
    };

    onRegister(studentData);

    setError("");

    setName("");
    setRegisterNo("");
    setEmail("");
    setDepartment("");
    setCourse("");
  };

  return (
    <div className="form-card">

      <h2>Student Course Registration</h2>

      <p className="form-description">
        Enter your details and select a course to register.
      </p>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Student Name *</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Register Number *</label>

          <input
            type="text"
            placeholder="Enter register number"
            value={registerNo}
            onChange={(event) => setRegisterNo(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email *</label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Department *</label>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="">Select Department</option>
            <option value="Computer Science and Engineering">
              Computer Science and Engineering
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Electronics and Communication Engineering">
              Electronics and Communication Engineering
            </option>
            <option value="Electrical and Electronics Engineering">
              Electrical and Electronics Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Course *</label>

          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          >
            <option value="">Select Course</option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="Java Programming">
              Java Programming
            </option>
            <option value="Python Programming">
              Python Programming
            </option>
            <option value="Data Science">
              Data Science
            </option>
            <option value="Cloud Computing">
              Cloud Computing
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="register-button"
        >
          Register Course
        </button>

      </form>

    </div>
  );
}

export default RegistrationForm;