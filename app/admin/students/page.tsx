"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete student?")) return;

    await fetch(`/api/students/${id}`, { method: "DELETE" });

    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Students</h4>
        <Link href="/admin/students/add" className="btn btn-primary">
          + Add
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th><th>Name</th><th>Email</th>
                <th>Phone</th><th>Gender</th>
                <th>Status</th><th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.phone}</td>
                  <td>{s.gender}</td>

                  <td>
                    <span className={`badge ${s.is_active ? "bg-success" : "bg-danger"}`}>
                      {s.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td>
                    <Link href={`/admin/students/edit/${s.id}`} className="btn btn-sm btn-primary me-2">
                      Edit
                    </Link>

                    <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-danger">
                      Delete
                    </button>

                    <Link href={`/admin/students/reserved/${s.id}`} className="btn btn-sm btn-warning ms-2">
                      💺
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}