"use client";
import { useState, useEffect } from "react";
type Zone = {
  id: number;
  name: string;
};
export default function AddCenter() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [form, setForm] = useState({
    zone_id: "",
    center_name: "",
    center_capacity: "",
    admission_fee: "",
    is_active: 1,
    center_address: "",
  });

  useEffect(() => {
    // fetch zones from API
    setZones([]);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="container-fluid p-4">
      <h4>Add Center</h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Zone</label>
                <select
                  className="form-control"
                  value={form.zone_id}
                  onChange={(e) =>
                    setForm({ ...form, zone_id: e.target.value })
                  }
                  required
                >
                  <option value="">-- Select Zone --</option>
                  {zones.map((z) => (
                    <option key={z.id} value={z.id}>
                      {z.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Center Name</label>
                <input
                  className="form-control"
                  value={form.center_name}
                  onChange={(e) =>
                    setForm({ ...form, center_name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Capacity</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.center_capacity}
                  onChange={(e) =>
                    setForm({ ...form, center_capacity: e.target.value })
                  }
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Admission Fee</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.admission_fee}
                  onChange={(e) =>
                    setForm({ ...form, admission_fee: e.target.value })
                  }
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Status</label>
                <select
                  className="form-control"
                  value={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: Number(e.target.value) })
                  }
                >
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label>Address</label>
                <textarea
                  className="form-control"
                  value={form.center_address}
                  onChange={(e) =>
                    setForm({ ...form, center_address: e.target.value })
                  }
                />
              </div>
            </div>

            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}