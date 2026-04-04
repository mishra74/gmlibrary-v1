"use client";
import { useState } from "react";

export default function AddZone() {
  const [form, setForm] = useState({
    name: "",
    short_name: "",
    is_active: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // call API here
  };

  return (
    <div className="container-fluid p-4">
      <h4>Add Zone</h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input
                  className="form-control"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Short Name</label>
                <input
                  className="form-control"
                  value={form.short_name}
                  onChange={(e) =>
                    setForm({ ...form, short_name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Status</label>
                <select
                  className="form-control"
                  value={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.value })
                  }
                >
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}