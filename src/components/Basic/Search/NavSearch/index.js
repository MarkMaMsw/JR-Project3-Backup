import React from "react";
import Style from "./style.module.css";
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

class _NavSearch extends React.Component {
    render() {
        return (
            <div className={Style.searchContainer}>
                <Link href="#" className={Style.searchContainer_icon}><SearchIcon/></Link>
                <input className={Style.searchContainer_inputBox} type="text" color='gray' placeholder='search' />
            </div>
        )
    }
}
// startAdornment={
//     <InputAdornment position="start">
//             <a href='www.baidu.com'><SearchIcon /></a>
//     </InputAdornment>}

const NavSearch = withRouter(_NavSearch);

export { NavSearch };