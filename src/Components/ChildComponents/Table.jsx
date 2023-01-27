import React from "react";

const Table = () => {
  return (
    <>
      {/* table 1 start */}
      <div className='table 1-area mg-top-90'>
        <div className='container'>
          <h5>Default</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-1'>
                <thead>
                  <tr>
                    <th scope='col'>User ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>John</td>
                    <td>Manager</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>Smith</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>Mark</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table 1 end */}
      {/* table 2 start */}
      <div className='table-area mg-top-90'>
        <div className='container'>
          <h5>Color Table</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-2'>
                <thead>
                  <tr>
                    <th scope='col'>User ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>John</td>
                    <td>Manager</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>Smith</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>Mark</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table 2 end */}
      {/* table 3 start */}
      <div className='table-area mg-top-90'>
        <div className='container'>
          <h5>BG Table</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-3'>
                <thead>
                  <tr>
                    <th scope='col'>User ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>John</td>
                    <td>Manager</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>Smith</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>Mark</td>
                    <td>User</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table 3 end */}
    </>
  );
};

export default Table;
