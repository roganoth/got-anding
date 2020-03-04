import React, { useState } from "react";
import data from "../../teams.json";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const TeamSelect = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown
      className="btn btn-primary float-right"
      isOpen={dropdownOpen}
      sz="lg"
      toggle={toggle}
    >
      <DropdownToggle className="btn btn-primary">Favorite Team</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>NFC North</DropdownItem>
        <DropdownItem classname={data[16].url}>{data[16].team}</DropdownItem>
        <DropdownItem>{data[17].team}</DropdownItem>
        <DropdownItem>{data[18].team}</DropdownItem>
        <DropdownItem>{data[19].team}</DropdownItem>

        <DropdownItem header>NFC East</DropdownItem>
        <DropdownItem>{data[0].team}</DropdownItem>
        <DropdownItem>{data[1].team}</DropdownItem>
        <DropdownItem>{data[2].team}</DropdownItem>
        <DropdownItem>{data[3].team}</DropdownItem>

        <DropdownItem header>NFC South</DropdownItem>
        <DropdownItem>{data[12].team}</DropdownItem>
        <DropdownItem>{data[13].team}</DropdownItem>
        <DropdownItem>{data[14].team}</DropdownItem>
        <DropdownItem>{data[15].team}</DropdownItem>

        <DropdownItem header>NFC West</DropdownItem>
        <DropdownItem>{data[24].team}</DropdownItem>
        <DropdownItem>{data[25].team}</DropdownItem>
        <DropdownItem>{data[26].team}</DropdownItem>
        <DropdownItem>{data[27].team}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>AFC North</DropdownItem>
        <DropdownItem>{data[20].team}</DropdownItem>
        <DropdownItem>{data[21].team}</DropdownItem>
        <DropdownItem>{data[22].team}</DropdownItem>
        <DropdownItem>{data[23].team}</DropdownItem>

        <DropdownItem header>AFC East</DropdownItem>
        <DropdownItem>{data[4].team}</DropdownItem>
        <DropdownItem>{data[5].team}</DropdownItem>
        <DropdownItem>{data[6].team}</DropdownItem>
        <DropdownItem>{data[7].team}</DropdownItem>

        <DropdownItem header>AFC South</DropdownItem>
        <DropdownItem>{data[8].team}</DropdownItem>
        <DropdownItem>{data[9].team}</DropdownItem>
        <DropdownItem>{data[10].team}</DropdownItem>
        <DropdownItem>{data[11].team}</DropdownItem>

        <DropdownItem header>AFC West</DropdownItem>
        <DropdownItem>{data[28].team}</DropdownItem>
        <DropdownItem>{data[29].team}</DropdownItem>
        <DropdownItem>{data[30].team}</DropdownItem>
        <DropdownItem>{data[31].team}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TeamSelect;
