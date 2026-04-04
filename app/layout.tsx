// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/admin_assets/css/app.min.css" rel="stylesheet" />
        <link href="/admin_assets/css/icons.min.css" rel="stylesheet" />
        <link href="/admin_assets/vendor/datatables.net-bs5/css/dataTables.bootstrap5.min.css" rel="stylesheet" />
      </head>
      <body>
        <div className="wrapper">
          <Navbar />
          <Sidebar />

          <div className="content-page">
            <div className="content">
              {children}
            </div>

            {/* Footer */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6 text-md-end">
                    <a href="#">About</a> | <a href="#">Support</a>
                  </div>
                </div>
              </div>
            </footer>

          </div>
        </div>

        {/* JS */}
        <script src="/admin_assets/js/vendor.min.js"></script>
        <script src="/admin_assets/js/app.min.js"></script>
      </body>
    </html>
  );
}