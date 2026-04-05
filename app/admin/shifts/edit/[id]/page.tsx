"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditShift() {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const [showCourse, setShowCourse] = useState(false);

  useEffect(() => {
    fetch(`/api/shifts/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm(data);
        setShowCourse(data.shift_type === "library_course");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "shift_type") {
      setShowCourse(value === "library_course");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/shifts/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    });

    alert("Updated");
  };

  return (
    <div className="container mt-4">
      <h4>Edit Shift</h4>

      <form onSubmit={handleSubmit}>
        <input value={form.shift_name || ""} name="shift_name" onChange={handleChange} />
        <input value={form.start_time || ""} name="start_time" type="time" onChange={handleChange} />
        <input value={form.end_time || ""} name="end_time" type="time" onChange={handleChange} />

        <select value={form.shift_type || ""} name="shift_type" onChange={handleChange}>
          <option value="Library">Library</option>
          <option value="library_course">Library + Course</option>
        </select>

        <input value={form.mrp || ""} name="mrp" onChange={handleChange} />
        <input value={form.discount || ""} name="discount" onChange={handleChange} />
        <input value={form.price || ""} name="price" onChange={handleChange} />

        {showCourse && (
          <textarea value={form.description || ""} name="description" onChange={handleChange} />
        )}

        <select value={form.is_active} name="is_active" onChange={handleChange}>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>

        <button className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
}