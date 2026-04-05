"use client";

import { useEffect, useState } from "react";

export default function SectionsPage() {
  const [sections, setSections] = useState([]);
  const [shiftData, setShiftData] = useState(null);

  useEffect(() => {
    fetch("/api/sections")
      .then(res => res.json())
      .then(data => setSections(data));
  }, []);

  const getShiftData = async (sectionId, shiftId) => {
    const res = await fetch("/api/shift", {
      method: "POST",
      body: JSON.stringify({ id: sectionId, shift: shiftId }),
    });

    const data = await res.json();

    if (data.status) {
      setShiftData(data.shifts);
    }
  };

  const reserveSeat = async () => {
    await fetch("/api/reserve-seat", {
      method: "POST",
      body: JSON.stringify(shiftData),
    });

    alert("Seat Reserved ✅");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {sections.map((section) => (
          <div className="col-md-3 mb-4" key={section.id}>
            <div className="card h-100">
              <img src="/images/slider1.jpg" className="card-img-top" />

              <div className="card-body">
                <h5>{section.section_name}</h5>

                <small>Center: {section.center?.center_name}</small>
                <br />

                <small>
                  {section.columns} → {section.end_column}
                </small>
                <br />

                <small>Capacity: {section.center_capacity}</small>
                <br />
                <small>Rows: {section.rows}</small>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {section.shifts.map((shift, index) => (
                    <div
                      key={shift.id}
                      onClick={() =>
                        getShiftData(section.id, shift.id)
                      }
                      style={{
                        width: 50,
                        height: 50,
                        background: "#3f7d96",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        cursor: "pointer",
                      }}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {shiftData && (
        <div className="modal d-block bg-dark bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h4>{shiftData.shift_name}</h4>
              <p>Price: ₹{shiftData.price}</p>
              <p>Time: {shiftData.start_time} - {shiftData.end_time}</p>

              <button
                className="btn btn-success"
                onClick={reserveSeat}
              >
                Reserve Seat
              </button>

              <button
                className="btn btn-secondary ms-2"
                onClick={() => setShiftData(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}