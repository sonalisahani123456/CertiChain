import { useState } from "react";

function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/certificates/verify/${certificateId}`
      );

      const data = await response.json();

      if (response.ok) {
        setResult({
          status: data.message,
          color: "green",
          data: data.data,
        });
      } else {
        setResult({
          status: data.message,
          color: "red",
        });
      }
    } catch (error) {
      setResult({
        status: "Server Error ❌",
        color: "red",
      });
    }

    setLoading(false);
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <h2>
  <i className="fa-solid fa-certificate"></i> Verify Certificate
</h2>

        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />

        <button
  className="btn"
  onClick={handleCheck}
  disabled={loading || !certificateId}
>
  <i className="fa-solid fa-shield-check"></i> 
  {loading ? " Verifying..." : " Verify"}
</button>
{result && (
  <div className="result-box">
    
    <h3 style={{ color: result.color, display: "flex", alignItems: "center" }}>
      
      {result.color === "green" ? (
        <i 
          className="fa-solid fa-circle-check" 
          style={{ marginRight: "8px" }}
        ></i>
      ) : (
        <i 
          className="fa-solid fa-circle-xmark" 
          style={{ marginRight: "8px" }}
        ></i>
      )}
      
      {result.status}
    </h3>

    {result.data && (
      <div>
        <p><strong>Student:</strong> {result.data.studentName}</p>
        <p><strong>Course:</strong> {result.data.course}</p>
        <p><strong>Institute:</strong> {result.data.instituteName}</p>
        <p><strong>Issue Date:</strong> {new Date(result.data.issueDate).toLocaleDateString()}</p>
      </div>
    )}

  </div>
)}
      </div>
    </div>
  );
}

export default Verify;