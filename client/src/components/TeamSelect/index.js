import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          Select Your Team
        </InputLabel>
        <Select
          native
          defaultValue=""
          input={<Input id="grouped-native-select" />}
        >
          <option value="" />
          <option value={0}> All Teams </option>
          <option value={1}>Arizona Cardinals</option>
          <option value={2}>Atlanta Falcons</option>
          <option value={3}>Baltimore Ravens</option>
          <option value={4}>Buffalo Bills</option>
          <option value={5}>Carolina Panthers</option>
          <option value={6}>Cincinnati Bengals</option>
          <option value={7}>Chicago Bears</option>
          <option value={8}>Cleveland Browns</option>
          <option value={9}> Dallas Cowboys</option>
          <option value={10}>Denver Broncos</option>
          <option value={11}>Detriot Lions</option>
          <option value={12}>Green Bay Packers</option>
          <option value={13}>Houston Texans</option>
          <option value={14}>Indianapolis Colts</option>
          <option value={15}>Kansas City Chiefs</option>
          <option value={16}>Los Angeles Chargers </option>
          <option value={17}>Los Angeles Rams</option>
          <option value={18}>Jacksonville Jaguars</option>
          <option value={19}>Miami Dolphins</option>
          <option value={20}>Minnesota Vikings</option>
          <option value={21}>New England Patriots</option>
          <option value={22}>New Orleans Saints</option>
          <option value={23}>New York Giants</option>
          <option value={24}>New York Jets</option>
          <option value={25}>Oakland Raiders</option>
          <option value={26}>Philadelphia Eagles</option>
          <option value={27}>San Francisco 49ers</option>
          <option value={28}>Seattle Seahawks</option>
          <option value={29}>Pittsburg Steelers</option>
          <option value={30}>Tampa Bay Buccanneers</option>
          <option value={31}>Tennessee Titans</option>
          <option value={32}>Washington Red Skins</option>
        </Select>
      </FormControl>
    </div>
  );
}
