import { useState, useEffect } from "react";
import DashboardLayout from "../DashboardLayout";

function AdminDashboard() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const savedCerts = JSON.parse(localStorage.getItem("studentCerts")) || [];
    setCertificates(savedCerts);
  }, []);

  const updateStorage = (updatedCerts) => {
    setCertificates(updatedCerts);
    localStorage.setItem("studentCerts", JSON.stringify(updatedCerts));
  };

  const handleDelete = (index) => {
    const updated = certificates.filter((_, i) => i !== index);
    updateStorage(updated);
  };

  const handleForceVerify = (index) => {
    const updated = [...certificates];
    updated[index].status = "Verified";
    updateStorage(updated);
  };

  return (
    <DashboardLayout role="admin">
      <h2>Admin Dashboard</h2>

      <div className="card">
        <h3>System Overview</h3>
        <p>Total Certificates: {certificates.length}</p>
        <p>
          Verified:{" "}
          {certificates.filter(c => c.status === "Verified").length}
        </p>
        <p>
          Pending:{" "}
          {certificates.filter(c => c.status === "Pending").length}
        </p>
      </div>

      <div className="card">
        <h3>Manage Certificates</h3>

        {certificates.length === 0 ? (
          <p>No certificates found.</p>
        ) : (
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>
                {cert.name} - {cert.status}

                <button
                  className="btn"
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleForceVerify(index)}
                >
                  Force Verify
                </button>

                <button
                  className="btn"
                  style={{ marginLeft: "10px", backgroundColor: "red" }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;