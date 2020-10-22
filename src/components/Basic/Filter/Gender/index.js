import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Style from './style.module.scss'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex'
//   },
// }));

function GenderSelect() {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    men: false,
    women: false,
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const { men, women } = state;

  return(
    <div className="container">
      <h3>Gender</h3>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
          <FormGroup>
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={men}
                  onChange={handleChange}
                  name="men"
                />
              }
              label="men"
            />
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={women}
                  onChange={handleChange}
                  name="women"
                />
              }
              label="women"
            />
          </FormGroup>
      </FormControl>
    </div>
  )
}

export default GenderSelect;