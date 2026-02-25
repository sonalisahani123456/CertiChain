import { useState } from "react";
import DashboardLayout from "../DashboardLayout";

function RecruiterDashboard() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const certificates =
      JSON.parse(localStorage.getItem("studentCerts")) || [];

    const found = certificates.find((cert) =>
      cert.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setResult(found);
    } else {
      setResult("notfound");
    }
  };

  return (
    <DashboardLayout role="recruiter">
      <h2>Recruiter Dashboard</h2>

      <div className="card">
        <h3>Search Certificate</h3>

        <input
          type="text"
          placeholder="Enter certificate name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="card">
        <h3>Search Result</h3>

        {result === null && <p>No search yet.</p>}

        {result === "notfound" && (
          <p style={{ color: "red" }}>Certificate not found ❌</p>
        )}

        {result && result !== "notfound" && (
          <p>
            {result.name} -{" "}
            {result.status === "Verified" ? (
              <span style={{ color: "green" }}>
                Verified ✅
              </span>
            ) : (
              <span style={{ color: "orange" }}>
                Pending ⏳
              </span>
            )}
          </p>
        )}
      </div>
    </DashboardLayout>
  );
}

export default RecruiterDashboard;