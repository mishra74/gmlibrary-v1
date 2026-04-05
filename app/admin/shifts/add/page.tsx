"use client";

import { useState } from "react";

export default function AddShift() {
  const [form, setForm] = useState({});
  const [showCourse, setShowCourse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "shift_type") {
      setShowCourse(value === "library_course");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/shifts", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Shift Added");
  };

  return (
    <div className="container mt-4">
      <h4>Add Shift</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" name="shift_name" placeholder="Shift Name" onChange={handleChange} required />
        <input type="time" name="start_time" onChange={handleChange} required />
        <input type="time" name="end_time" onChange={handleChange} required />

        <select name="shift_type" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Library">Library</option>
          <option value="library_course">Library + Course</option>
        </select>

        <input type="number" name="mrp" placeholder="MRP" onChange={handleChange} />
        <input type="number" name="discount" placeholder="Discount" onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} />

        {showCourse && (
          <>
            <input type="number" name="min_days" placeholder="Min Days" onChange={handleChange} />
            <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
          </>
        )}

        <select name="is_active" onChange={handleChange}>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>

        <button className="btn btn-primary mt-3">Add Shift</button>
      </form>
    </div>
  );
}