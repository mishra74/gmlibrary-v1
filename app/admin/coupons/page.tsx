"use client";
import { useEffect, useState } from "react";

export default function CouponsPage() {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch("/api/coupons")
      .then(res => res.json())
      .then(setCoupons);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete coupon?")) return;

    await fetch(`/api/coupons/${id}`, {
      method: "DELETE",
    });

    setCoupons(coupons.filter(c => c.id !== id));
  };

  return (
    <div className="container mt-4">
      <h4>Coupons</h4>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Discount</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {coupons.map((c, i) => (
            <tr key={c.id}>
              <td>{i + 1}</td>
              <td>{c.couon_code}</td>
              <td>{c.discount_value}</td>
              <td>{c.discount_type}</td>

              <td>
                {c.is_active ? (
                  <span className="badge bg-success">Active</span>
                ) : (
                  <span className="badge bg-danger">Inactive</span>
                )}
              </td>

              <td>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}