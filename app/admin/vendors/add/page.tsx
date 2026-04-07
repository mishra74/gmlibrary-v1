"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddVendor() {
  const router = useRouter();

  const [centers, setCenters] = useState<{ id: number; center_name: string }[]>([]);
  const [formData, setFormData] = useState({
    center_id: [] as number[],
    name: "",
    email: "",
    phone: "",
    password: "",
    is_active: 1,
  });

  // Fetch centers
  useEffect(() => {
    fetch("/api/centers")
      .then((res) => res.json())
      .then((data) => setCenters(data));
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox (multiple centers)
  const handleCheckbox = (id: number) => {
    let updatedCenters = [...formData.center_id];

    if (updatedCenters.includes(id)) {
      updatedCenters = updatedCenters.filter((c) => c !== id);
    } else {
      updatedCenters.push(id);
    }

    setFormData({ ...formData, center_id: updatedCenters });
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/vendors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    router.push("/vendors"); // redirect after save
  };

  return (
    <div className="d-flex">
      <div className="content">
        <div className="container-fluid">

          {/* Page Title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Add Vendor</h4>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">

                  <form onSubmit={handleSubmit}>
                    <div className="row">

                      {/* Centers */}
                      <div className="col-md-6 mb-3">
                        <label>Center *</label>
                        <div className="form-control p-2" style={{ height: "auto" }}>
                          {centers.map((center) => (
                            <div className="form-check" key={center.id}>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={formData.center_id.includes(center.id)}
                                onChange={() => handleCheckbox(center.id)}
                              />
                              <label className="form-check-label">
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
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6 mb-3">
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6 mb-3">
                        <label>Phone *</label>
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="col-md-6 mb-3">
                        <label>Password *</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Status */}
                      <div className="col-md-6 mb-3">
                        <label>Is Active?</label>
                        <select
                          name="is_active"
                          className="form-control"
                          value={formData.is_active}
                          onChange={handleChange}
                        >
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Add Vendor
                        </button>
                      </div>

                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}