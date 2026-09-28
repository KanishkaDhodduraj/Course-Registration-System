function RegistrationDetails({ student }) {

  return (
    <div className="details-card">

      <div className="success-message">
        Registration Successful!
      </div>

      <h2>Registered Student Details</h2>

      <div className="student-details">

        <div className="detail-item">
          <span>Student Name</span>
          <strong>{student.name}</strong>
        </div>

        <div className="detail-item">
          <span>Register Number</span>
          <strong>{student.registerNo}</strong>
        </div>

        <div className="detail-item">
          <span>Email</span>
          <strong>{student.email}</strong>
        </div>

        <div className="detail-item">
          <span>Department</span>
          <strong>{student.department}</strong>
        </div>

        <div className="detail-item course">
          <span>Selected Course</span>
          <strong>{student.course}</strong>
        </div>

      </div>

    </div>
  );
}

export default RegistrationDetails;