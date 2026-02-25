import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("certiHistory")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="history-page">
      <h2>Verification History</h2>

      {history.length === 0 ? (
        <p>No verification history found.</p>
      ) : (
        <div className="timeline">
          {history.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>{item.status}</h3>
                <p><strong>Risk Score:</strong> {item.risk}%</p>
                <p className="date">{item.date}</p>
                <p className="desc">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;