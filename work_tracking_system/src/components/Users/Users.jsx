/* eslint-disable react/prop-types */

import "./users.css"


export const Users = ({isCurrent,users}) => {
  return (
    <div className="table-wrapper">
          <h2>USERS</h2>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th
                    style={{
                      animation:
                        isCurrent === index + 1 ? "flash 1s infinite" : "",
                      background: isCurrent === index + 1 ? "lightblue" : "",
                    }}
                    scope="row"
                  >
                    {index + 1}
                  </th>
                  <td
                    style={{
                      animation:
                        isCurrent === index + 1 ? "flash 1s infinite" : "",
                      background: isCurrent === index + 1 ? "lightblue" : "",
                    }}
                  >
                    {user.name}
                  </td>
                  <td
                    style={{
                      animation:
                        isCurrent === index + 1 ? "flash 1s infinite" : "",
                      background: isCurrent === index + 1 ? "lightblue" : "",
                    }}
                  >
                    {user.email}
                  </td>
                  <td
                    style={{
                      animation:
                        isCurrent === index + 1 ? "flash 1s infinite" : "",
                      background: isCurrent === index + 1 ? "lightblue" : "",
                    }}
                  >
                    {user.country}
                  </td>
                  <td
                    style={{
                      animation:
                        isCurrent === index + 1 ? "flash 1s infinite" : "",
                      background: isCurrent === index + 1 ? "lightblue" : "",
                    }}
                  >
                    {user.telno}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <style>
            {`
  @keyframes flash {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`}
          </style>
        </div>
  )
}
