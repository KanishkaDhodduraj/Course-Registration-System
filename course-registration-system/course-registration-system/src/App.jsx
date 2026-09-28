import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationDetails from "./components/RegistrationDetails";
import "./App.css";

function App() {
  const [registeredStudent, setRegisteredStudent] = useState(null);

  const handleRegistration = (studentData) => {
    setRegisteredStudent(studentData);
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Course Registration System</h1>
        <p>Training Institution - Student Registration Portal</p>
      </header>

      <main className="container">

        <RegistrationForm
          onRegister={handleRegistration}
        />

        {registeredStudent && (
          <RegistrationDetails
            student={registeredStudent}
          />
        )}

      </main>

    </div>
  );
}

export default App;