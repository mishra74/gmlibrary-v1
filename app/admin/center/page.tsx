"use client";
import Link from "next/link";

interface Center {
  id: number;
  center_name: string;
  zone?: { name: string };
  admission_fee: number;
  center_capacity: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function CenterPage() {
  const centers: Center[] = []; // replace with API data

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Centers</h4>
        <Link href="/admin/center/add" className="btn btn-primary">
          + Add
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Branch</th>
                <th>Zone</th>
                <th>Admission</th>
                <th>Capacity</th>
                <th>Status</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {centers.map((c, i) => (
                <tr key={c.id}>
                  <td>{i + 1}</td>
                  <td>{c.center_name}</td>
                  <td>{c.zone?.name}</td>
                  <td>{c.admission_fee}</td>
                  <td>{c.center_capacity}</td>

                  <td>
                    <span
                      className={`badge ${
                        c.is_active ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {c.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td>{c.created_at}</td>
                  <td>{c.updated_at}</td>

                  <td>
                    <button className="btn btn-sm btn-danger me-2">
                      🗑
                    </button>

                    <Link
                      href={`/admin/center/edit/${c.id}`}
                      className="btn btn-sm btn-success me-2"
                    >
                      ✏
                    </Link>

                    <Link
                      href={`/admin/section/add/${c.id}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      +
                    </Link>

                    <Link
                      href={`/admin/section/view/${c.id}`}
                      className="btn btn-sm btn-warning"
                    >
                      👁
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