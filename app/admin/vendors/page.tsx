"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("/api/vendors")
      .then((res) => res.json())
      .then((data) => setVendors(data));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this Vendor?")) return;

    await fetch(`/api/vendors/${id}`, {
      method: "DELETE",
    });

    setVendors(vendors.filter((v) => v.id !== id));
  };

  return (
    <div className="d-flex">

    

      {/* 👉 Main Content */}
      <div style={{ flex: 1 }}>

        <div className="container-fluid py-3">

          {/* Page Title */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Vendors</h4>

            <Link href="/admin/vendors/add" className="btn btn-primary">
              + Add Vendor
            </Link>
          </div>

          {/* Card */}
          <div className="card shadow-sm">
            <div className="card-body">

              <h5 className="mb-3">Vendor List</h5>

              <div className="table-responsive">
                <table className="table table-striped align-middle">
                  <thead>
                    <tr>
                      <th>Sl No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {vendors.length > 0 ? (
                      vendors.map((vendor, index) => (
                        <tr key={vendor.id}>
                          <td>{index + 1}</td>
                          <td>{vendor.name}</td>
                          <td>{vendor.email}</td>
                          <td>{vendor.phone}</td>

                          <td>
                            {vendor.is_active ? (
                              <span className="badge bg-success">
                                Active
                              </span>
                            ) : (
                              <span className="badge bg-danger">
                                Inactive
                              </span>
                            )}
                          </td>

                          <td>{vendor.created_at}</td>
                          <td>{vendor.updated_at}</td>

                          <td>
                            <button
                              onClick={() => handleDelete(vendor.id)}
                              className="btn btn-sm btn-link text-danger"
                            >
                              <i className="fa fa-trash"></i>
                            </button>

                            <Link
                              href={`/admin/vendors/edit/${vendor.id}`}
                              className="btn btn-sm btn-link text-success"
                            >
                              <i className="fa fa-pencil"></i>
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No Vendors Found
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}