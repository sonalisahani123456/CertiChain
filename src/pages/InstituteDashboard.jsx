import { useState, useEffect } from "react";
import DashboardLayout from "../DashboardLayout";

function InstituteDashboard() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const savedCerts = JSON.parse(localStorage.getItem("studentCerts")) || [];
    setCertificates(savedCerts);
  }, []);

  const handleApprove = (index) => {
    const updatedCerts = [...certificates];
    updatedCerts[index].status = "Verified";

    setCertificates(updatedCerts);
    localStorage.setItem("studentCerts", JSON.stringify(updatedCerts));
  };

  return (
    <DashboardLayout role="institute">
      <h2>Institute Dashboard</h2>

      <div className="card">
        <h3>Pending Certificates</h3>

        {certificates.length === 0 ? (
          <p>No certificates found.</p>
        ) : (
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>
                {cert.name} - {cert.status}
                {cert.status === "Pending" && (
                  <button
                    className="btn"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
}

export default InstituteDashboard;