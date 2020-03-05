import React from "react";

function UserTeam(props) {
  return (
    <table>
      <tbody>
        <tr key={props.name}>
          <td>{props.name}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserTeam;
