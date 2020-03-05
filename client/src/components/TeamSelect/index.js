import React from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function TeamSelect(props) {
  return <DropdownItem value={props.value} onClick={props.handleClick}>{props.team}</DropdownItem>;
}

export default TeamSelect;
