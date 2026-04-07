"use client";

import { useEffect, useState } from "react";

interface Client {
  name: string;
  company_id: string;
  email: string;
  phone: string;
  gstin: string;
  is_active: number;
  country: string;
  address: string;
}

export default function EditClientPage({ params }: { params: { id: string } }) {
  const [client, setClient] = useState<Partial<Client>>({});
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [countries, setCountries] = useState<{ id: number; name: string }[]>([]);

  const id = params.id;

  useEffect(() => {
    // Fetch client data
    fetch(`/api/clients/${id}`)
      .then((res) => res.json())
      .then((data) => setClient(data));

    // Fetch dropdown data
    fetch("/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));

    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`/api/clients/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });

    alert("Client Updated Successfully ✅");
  };

  return (
    <div className="container mt-4">
      <h4>Edit Client</h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">

              {/* Company */}
              <div className="col-md-6 mb-3">
                <label>Company *</label>
                <select
                  name="company_id"
                  className="form-control"
                  value={client.company_id || ""}
                  onChange={handleChange}
                >
                  <option value="">Select Company</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div className="col-md-6 mb-3">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={client.name || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={client.email || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-3">
                <label>Phone *</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={client.phone || ""}
                  onChange={handleChange}
                />
              </div>

              {/* GST */}
              <div className="col-md-6 mb-3">
                <label>GST No</label>
                <input
                  type="text"
                  name="gstin"
                  className="form-control"
                  value={client.gstin || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Status */}
              <div className="col-md-6 mb-3">
                <label>Is Active?</label>
                <select
                  name="is_active"
                  className="form-control"
                  value={client.is_active ?? 1}
                  onChange={handleChange}
                >
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>

              {/* Country */}
              <div className="col-md-6 mb-3">
                <label>Country *</label>
                <select
                  name="country"
                  className="form-control"
                  value={client.country || ""}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="col-md-12 mb-3">
                <label>Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  value={client.address || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Update Client
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}