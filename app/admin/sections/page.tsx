"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SectionsPage() {
  const [sections, setSections] = useState<{ id: number; center?: { center_name: string }; section_name: string; center_capacity: number; rows: number; columns: number; booking: number; is_active: boolean }[]>([]);

  useEffect(() => {
    fetch("/api/sections")
      .then(res => res.json())
      .then(setSections);
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this section?")) return;

    await fetch(`/api/sections/${id}`, {
      method: "DELETE",
    });

    setSections(sections.filter(s => s.id !== id));
  };

  return (
    <div className="container mt-4">
      <h4>Sections</h4>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Branch</th>
            <th>Section</th>
            <th>Capacity</th>
            <th>Rows</th>
            <th>Columns</th>
            <th>Booking</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sections.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.center?.center_name || "-"}</td>
              <td>{s.section_name}</td>
              <td>{s.center_capacity}</td>
              <td>{s.rows}</td>
              <td>{s.columns}</td>
              <td>{s.booking}</td>

              <td>
                {s.is_active ? (
                  <span className="badge bg-success">Active</span>
                ) : (
                  <span className="badge bg-danger">Inactive</span>
                )}
              </td>

              <td>
                <Link href={`/admin/sections/edit/${s.id}`}>
                  ✏️
                </Link>

                <button
                  onClick={() => handleDelete(s.id)}
                  className="btn btn-sm btn-danger mx-2"
                >
                  🗑️
                </button>

                <Link href={`/admin/shifts/add/${s.id}`} className="btn btn-sm btn-primary">
                  ➕ Shift
                </Link>

                <Link href={`/admin/shifts/view/${s.id}`} className="btn btn-sm btn-warning mx-1">
                  👁️
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}