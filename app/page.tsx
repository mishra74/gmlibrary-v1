export default function Dashboard() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            {/* Card 1 */}
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="text-uppercase fs-13 mt-0 text-truncate">
                        Total Centers
                      </h5>
                      <h2 className="my-2 py-1">0</h2>
                      <p className="mb-0 text-muted text-truncate">
                        <span className="text-danger me-2">↓ 2.66%</span>
                        <span>Since previous week</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <div className="chart-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="text-uppercase fs-13 mt-0 text-truncate">
                        Total Booking
                      </h5>
                      <h2 className="my-2 py-1">0</h2>
                      <p className="mb-0 text-muted text-truncate">
                        <span className="text-danger me-2">↓ 2.66%</span>
                        <span>Since previous week</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <div className="chart-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="text-uppercase fs-13 mt-0 text-truncate">
                        Total Vendors
                      </h5>
                      <h2 className="my-2 py-1">0</h2>
                      <p className="mb-0 text-muted text-truncate">
                        <span className="text-danger me-2">↓ 2.66%</span>
                        <span>Since previous week</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <div className="chart-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-3 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="text-uppercase fs-13 mt-0 text-truncate">
                        Total Users
                      </h5>
                      <h2 className="my-2 py-1">0</h2>
                      <p className="mb-0 text-muted text-truncate">
                        <span className="text-danger me-2">↓ 2.66%</span>
                        <span>Since previous week</span>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <div className="chart-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}