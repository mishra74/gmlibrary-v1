"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudent() {
  const router = useRouter();

  const [form, setForm] = useState({
    zone: "",
    center: "",
    section: "",
    shift: "",
    is_active: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/admin/students");
  };

  return (
    <div className="container mt-4">
      <h4>Add Student</h4>

      <form onSubmit={handleSubmit}>
        <div className="row">

          <input type="hidden" name="center_id" value={form.center_id} />

          <div className="col-md-6 mb-3">
            <label>Zone</label>
            <input className="form-control"
              onChange={(e)=>setForm({...form, zone:e.target.value})} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Center</label>
            <input className="form-control"
              onChange={(e)=>setForm({...form, center:e.target.value})} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Section</label>
            <input className="form-control"
              onChange={(e)=>setForm({...form, section:e.target.value})} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Shift</label>
            <input className="form-control"
              onChange={(e)=>setForm({...form, shift:e.target.value})} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Status</label>
            <select className="form-control"
              onChange={(e)=>setForm({...form, is_active:Number(e.target.value)})}>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

        </div>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}