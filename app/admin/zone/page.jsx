"use client";
import Link from "next/link";


<Link href="/admin/zone/add">Add Zone</Link>
export default function ZonePage() {
  const zones = []; // replace with API data

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Zones</h4>
        <Link href="/admin/zone/add" className="btn btn-primary">
          + Add
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Short Name</th>
                <th>Status</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {zones.map((z, i) => (
                <tr key={z.id}>
                  <td>{i + 1}</td>
                  <td>{z.name}</td>
                  <td>{z.short_name}</td>
                  <td>
                    <span
                      className={`badge ${
                        z.is_active ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {z.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>{z.created_at}</td>
                  <td>{z.updated_at}</td>
                  <td>
                    <button className="btn btn-sm btn-danger me-2">
                      🗑
                    </button>

                    <Link
                      href={`/admin/zone/edit/${z.id}`}
                      className="btn btn-sm btn-success"
                    >
                      ✏
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