"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Section {
  section_name: string;
  center_capacity: string;
  rows: string;
  columns: string;
  end_column: string;
  is_active: number;
}

export default function EditSection() {
  const { id } = useParams();
  const [form, setForm] = useState<Section>({
    section_name: "",
    center_capacity: "",
    rows: "",
    columns: "",
    end_column: "",
    is_active: 1,
  });

  useEffect(() => {
    fetch(`/api/sections/${id}`)
      .then(res => res.json())
      .then(setForm);
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  await fetch(`/api/sections/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  alert("Updated Successfully");
};

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h4>Edit Section</h4>

      <input
        value={form.section_name || ""}
        onChange={(e) => setForm({ ...form, section_name: e.target.value })}
        className="form-control mb-2"
      />

      <input
        type="number"
        value={form.center_capacity || ""}
        onChange={(e) => setForm({ ...form, center_capacity: e.target.value })}
        className="form-control mb-2"
      />

      <input
        type="number"
        value={form.rows || ""}
        onChange={(e) => setForm({ ...form, rows: e.target.value })}
        className="form-control mb-2"
      />

      <input
        type="number"
        value={form.columns || ""}
        onChange={(e) => setForm({ ...form, columns: e.target.value })}
        className="form-control mb-2"
      />

      <input
        type="number"
        value={form.end_column || ""}
        onChange={(e) => setForm({ ...form, end_column: e.target.value })}
        className="form-control mb-2"
      />

      <select
        value={form.is_active ?? 1}
        onChange={(e) => setForm({ ...form, is_active: parseInt(e.target.value) })}
        className="form-control mb-2"
      >
        <option value="1">Active</option>
        <option value="0">Inactive</option>
      </select>

      <button className="btn btn-primary">Update</button>
    </form>
  );
}