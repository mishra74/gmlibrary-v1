"use client";
import { useState } from "react";

export default function AddCoupon() {
  const [form, setForm] = useState({
    couon_code: "",
    start_date: "",
    end_date: "",
    discount_type: "Percentage",
    discount_value: "",
    usage_limited: "",
    is_active: 1,
    assign: "student",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Coupon Added");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h4>Add Coupon</h4>

      <input
        className="form-control mb-2"
        placeholder="Coupon Code"
        onChange={(e) => setForm({ ...form, couon_code: e.target.value })}
      />

      <input type="date" className="form-control mb-2"
        onChange={(e) => setForm({ ...form, start_date: e.target.value })}
      />

      <input type="date" className="form-control mb-2"
        onChange={(e) => setForm({ ...form, end_date: e.target.value })}
      />

      <select className="form-control mb-2"
        onChange={(e) => setForm({ ...form, discount_type: e.target.value })}
      >
        <option>Percentage</option>
        <option>Fixed</option>
      </select>

      <input className="form-control mb-2"
        placeholder="Discount"
        onChange={(e) => setForm({ ...form, discount_value: e.target.value })}
      />

      <button className="btn btn-primary">Add</button>
    </form>
  );
}