import { useState, useEffect } from "react";
import DashboardLayout from "../DashboardLayout";

function StudentDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [fileName, setFileName] = useState("");

  // Load saved certificates on page load
  useEffect(() => {
    const savedCerts = JSON.parse(localStorage.getItem("studentCerts")) || [];
    setCertificates(savedCerts);
  }, []);

  const handleUpload = () => {
    if (!fileName) {
      alert("Please select a file");
      return;
    }

    const newCert = {
      name: fileName,
      status: "Pending"
    };

    const updatedCerts = [...certificates, newCert];

    setCertificates(updatedCerts);
    localStorage.setItem("studentCerts", JSON.stringify(updatedCerts));

    setFileName("");
  };

  return (
    <DashboardLayout role="student">
      <h2>Student Dashboard</h2>
      <div className="stats-container">
  <div className="stat-card">
    <h4>Total</h4>
    <p>{certificates.length}</p>
  </div>

  <div className="stat-card verified">
    <h4>Verified</h4>
    <p>
      {certificates.filter(c => c.status === "Verified").length}
    </p>
  </div>

  <div className="stat-card pending">
    <h4>Pending</h4>
    <p>
      {certificates.filter(c => c.status === "Pending").length}
    </p>
  </div>
</div>
      <div className="card">
        <h3>Upload Certificate</h3>
        <input
          type="file"
          onChange={(e) => setFileName(e.target.files[0]?.name)}
        />
        <button className="btn" onClick={handleUpload}>
          Upload
        </button>
      </div>

      <div className="card">
        <h3>My Certificates</h3>

        {certificates.length === 0 ? (
          <p>No certificates uploaded yet.</p>
        ) : (
         <table className="cert-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Certificate Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {certificates.map((cert, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{cert.name}</td>
        <td>
          <span
            className={
              cert.status === "Verified"
                ? "status verified"
                : "status pending"
            }
          >
            {cert.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;