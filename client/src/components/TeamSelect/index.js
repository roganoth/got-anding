import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [team, setTeam] = React.useState("");

  const handleChange = event => {
    setTeam(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} color="inherit">
        Choose Your Favorite Team
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select Your Team</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Team</InputLabel>
              <Select
                native
                value={team}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={5}> All Teams </option>
                <option value={10}>Arizona Cardinals</option>
                <option value={20}>Atlanta Falcons</option>
                <option value={30}>Baltimore Ravens</option>
                <option value={40}>Buffalo Bills</option>
                <option value={50}>Carolina Panthers</option>
                <option value={60}>Cincinnati Bengals</option>
                <option value={70}>Chicago Bears</option>
                <option value={80}>Cleveland Browns</option>
                <option value={90}> Dallas Cowboys</option>
                <option value={100}>Denver Broncos</option>
                <option value={110}>Detriot Lions</option>
                <option value={120}>Green Bay Packers</option>
                <option value={130}>Houston Texans</option>
                <option value={140}>Indianapolis Colts</option>
                <option value={150}>Kansas City Chiefs</option>
                <option value={160}>Los Angeles Chargers </option>
                <option value={170}>Los Angeles Rams</option>
                <option value={180}>Jacksonville Jaguars</option>
                <option value={190}>Miami Dolphins</option>
                <option value={200}>Minnesota Vikings</option>
                <option value={210}>New England Patriots</option>
                <option value={220}>New Orleans Saints</option>
                <option value={230}>New York Giants</option>
                <option value={240}>New York Jets</option>
                <option value={250}>Oakland Raiders</option>
                <option value={260}>Philadelphia Eagles</option>
                <option value={270}>San Francisco 49ers</option>
                <option value={280}>Seattle Seahawks</option>
                <option value={290}>Pittsburg Steelers</option>
                <option value={300}>Tampa Bay Buccanneers</option>
                <option value={310}>Tennessee Titans</option>
                <option value={320}>Washington Red Skins</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="inherit">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
