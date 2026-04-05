"use client";

import { useEffect, useState } from "react";

export default function CentersPage() {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetch("/api/centers")
      .then(res => res.json())
      .then(data => setCenters(data));
  }, []);

  const handleSelect = async (centerId) => {
    await fetch("/api/student/select-center", {
      method: "POST",
      body: JSON.stringify({ center_id: centerId }),
    });

    window.location.href = "/student/sections";
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {centers.map((center) => (
          <div className="col-md-3 mb-4" key={center.id}>
            <div className="card h-100">
              <img src="/images/slider1.jpg" className="card-img-top" />

              <div className="card-body">
                <h5>Center</h5>
                <h3>{center.center_name}</h3>

                <p dangerouslySetInnerHTML={{ __html: center.center_address }} />

                <ul className="list-group">
                  <li className="list-group-item">
                    {center.zone?.name}
                  </li>
                  <li className="list-group-item">
                    Capacity: {center.center_capacity}
                  </li>
                </ul>

                <button
                  className="btn btn-primary mt-2 w-100"
                  onClick={() => handleSelect(center.id)}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}