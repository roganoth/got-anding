import React from "react";

function UserTeam(props) {
  return (
    <table>
      <tablebody>
        <tr key={props.name}>
          <td>{props.name}</td>
        </tr>
      </tablebody>
    </table>
  );
}

export default UserTeam;
