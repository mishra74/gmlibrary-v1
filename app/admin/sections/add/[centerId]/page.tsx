"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function AddSection() {
  const { centerId } = useParams();

  const [form, setForm] = useState({
    section_name: "",
    center_capacity: "",
    rows: "",
    columns: "",
    end_column: "",
    is_active: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/sections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, center_id: centerId }),
    });

    alert("Section Added");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h4>Add Section</h4>

      <input
        placeholder="Section Name"
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, section_name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Capacity"
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, center_capacity: e.target.value })}
      />

      <input
        type="number"
        placeholder="Rows"
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, rows: e.target.value })}
      />

      <input
        type="number"
        placeholder="Start Column"
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, columns: e.target.value })}
      />

      <input
        type="number"
        placeholder="End Column"
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, end_column: e.target.value })}
      />

      <select
        className="form-control mb-2"
        onChange={(e) => setForm({ ...form, is_active: e.target.value })}
      >
        <option value="1">Active</option>
        <option value="0">Inactive</option>
      </select>

      <button className="btn btn-primary">Add Section</button>
    </form>
  );
}