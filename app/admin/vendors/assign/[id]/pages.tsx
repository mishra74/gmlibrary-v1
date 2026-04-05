"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function AssignCenters() {
  const { id } = useParams(); // vendor id
  const router = useRouter();

  const [vendor, setVendor] = useState(null);
  const [centers, setCenters] = useState([]);
  const [selectedCenters, setSelectedCenters] = useState([]);

  // Fetch vendor + centers
  useEffect(() => {
    // fetch vendor
    fetch(`/api/vendors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVendor(data);
        setSelectedCenters(data.center_ids || []); // array
      });

    // fetch centers
    fetch("/api/centers")
      .then((res) => res.json())
      .then((data) => setCenters(data));
  }, [id]);

  // handle checkbox
  const handleCheckbox = (centerId) => {
    let updated = [...selectedCenters];

    if (updated.includes(centerId)) {
      updated = updated.filter((c) => c !== centerId);
    } else {
      updated.push(centerId);
    }

    setSelectedCenters(updated);
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/vendors/${id}/assign-centers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ centers: selectedCenters }),
    });

    router.push("/admin/vendors");
  };

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div style={{ width: "250px", minHeight: "100vh", background: "#2c3e50" }}>
        <h5 className="text-white p-3">Admin Panel</h5>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div className="container-fluid py-3">

          {/* Title */}
          <h4 className="mb-4">
            Assign Centres to Vendor: {vendor.name}
          </h4>

          {/* Card */}
          <div className="card">
            <div className="card-body">

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Select Centres</label>

                  {centers.map((center) => (
                    <div className="form-check" key={center.id}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedCenters.includes(center.id)}
                        onChange={() => handleCheckbox(center.id)}
                        id={`center${center.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`center${center.id}`}
                      >
                        {center.center_name}
                      </label>
                    </div>
                  ))}
                </div>

                <button type="submit" className="btn btn-primary me-2">
                  Save Centres
                </button>

                <Link href="/admin/vendors" className="btn btn-secondary">
                  Back
                </Link>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}