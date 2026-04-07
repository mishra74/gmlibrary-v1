"use client";

import Link from "next/link";

export default function ShiftList({ shifts = [] }: { shifts: { id: number; shift_name: string; start_time: string; end_time: string; shift_type: string; mrp: number; discount: number; price: number; bookings_count?: number; is_active: boolean }[] }) {
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this shift?")) return;

    await fetch(`/api/shifts/${id}`, {
      method: "DELETE",
    });

    location.reload();
  };

  return (
    <div className="container mt-4">
      <h4>Shifts</h4>

      <Link href="/admin/shifts/add" className="btn btn-primary mb-3">
        + Add Shift
      </Link>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Type</th>
              <th>Price</th>
              <th>Booking</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {shifts.map((s, i) => (
              <tr key={s.id}>
                <td>{i + 1}</td>
                <td>{s.shift_name}</td>
                <td>{s.start_time} - {s.end_time}</td>
                <td>{s.shift_type}</td>

                <td>
                  MRP: {s.mrp} <br />
                  Discount: {s.discount} <br />
                  Price: {s.price}
                </td>

                <td>{s.bookings_count || 0}</td>

                <td>
                  {s.is_active ? (
                    <span className="badge bg-success">Active</span>
                  ) : (
                    <span className="badge bg-danger">Inactive</span>
                  )}
                </td>

                <td>
                  <Link href={`/admin/shifts/edit/${s.id}`} className="btn btn-sm btn-primary">
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(s.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}