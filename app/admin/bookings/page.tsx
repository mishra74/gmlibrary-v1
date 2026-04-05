"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Booking List</h2>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {/* {bookings.length > 0 ? (
            bookings.map((b, i) => (
              <tr key={b.booking_id}>
                <td>{i + 1}</td>
                <td>{b.student_name}</td>
                <td>{b.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Data</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
}