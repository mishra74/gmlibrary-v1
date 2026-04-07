"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Coupon {
  coupon_code: string;
}

export default function EditCoupon() {
  const { id } = useParams();
  const [form, setForm] = useState<Coupon>({
    coupon_code: "",
  });

  useEffect(() => {
    fetch(`/api/coupons/${id}`)
      .then(res => res.json())
      .then(setForm);
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`/api/coupons/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Updated");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h4>Edit Coupon</h4>

      <input
        value={form.coupon_code || ""}
        onChange={(e) => setForm({ ...form, coupon_code: e.target.value })}
        className="form-control mb-2"
      />

      <button className="btn btn-primary">Update</button>
    </form>
  );
}