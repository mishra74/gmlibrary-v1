"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditVendor() {
  const { id } = useParams();
  const router = useRouter();

  const [vendor, setVendor] = useState(null);
  const [centers, setCenters] = useState([]);
  const [selectedCenters, setSelectedCenters] = useState([]);

  // Fetch vendor + centers
  useEffect(() => {
    fetch(`/api/vendors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVendor(data.vendor);
        setCenters(data.centers);

        // parse selected centers (array)
        if (data.vendor.center_id) {
          setSelectedCenters(JSON.parse(data.vendor.center_id));
        }
      });
  }, [id]);

  // Handle checkbox change
  const handleCheckbox = (centerId) => {
    if (selectedCenters.includes(centerId)) {
      setSelectedCenters(selectedCenters.filter((c) => c !== centerId));
    } else {
      setSelectedCenters([...selectedCenters, centerId]);
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/vendors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: vendor.name,
        email: vendor.email,
        phone: vendor.phone,
        is_active: vendor.is_active,
        center_id: selectedCenters,
      }),
    });

    if (res.ok) {
      alert("Vendor Updated");
      router.push("/admin/vendors");
    }
  };

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Edit Vendor</h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">

              {/* Centers */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Centers *</label>
                <div className="border p-2 rounded" style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {centers.map((center) => (
                    <div className="form-check" key={center.id}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedCenters.includes(center.id)}
                        onChange={() => handleCheckbox(center.id)}
                        id={`center_${center.id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`center_${center.id}`}
                      >
                        {center.center_name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="col-md-6 mb-3">
                <label>Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={vendor.name}
                  onChange={(e) =>
                    setVendor({ ...vendor, name: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label>Email *</label>
                <input
                  type="email"
                  className="form-control"
                  value={vendor.email}
                  onChange={(e) =>
                    setVendor({ ...vendor, email: e.target.value })
                  }
                />
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-3">
                <label>Phone *</label>
                <input
                  type="number"
                  className="form-control"
                  value={vendor.phone}
                  onChange={(e) =>
                    setVendor({ ...vendor, phone: e.target.value })
                  }
                />
              </div>

              {/* Status */}
              <div className="col-md-6 mb-3">
                <label>Status</label>
                <select
                  className="form-control"
                  value={vendor.is_active}
                  onChange={(e) =>
                    setVendor({
                      ...vendor,
                      is_active: Number(e.target.value),
                    })
                  }
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>

            </div>

            <button type="submit" className="btn btn-primary">
              Update Vendor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}