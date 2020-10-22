// import React from "react";
import Style from "./style.module.scss";
import { withRouter, NavLink, } from 'react-router-dom';
import { Breadcrumbs} from '@material-ui/core';
import React from 'react';
import { NavSearch } from '../../Basic/Search/NavSearch/index';
import Link from '@material-ui/core/Link';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalMallIcon from '@material-ui/icons/LocalMall';


    


class _NavBar extends React.Component {
    constructor(props) { 
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className={Style.navContainer}>    
            <div className='logoContainer'>
            <NavLink to='/' exact><img className={Style.logo} src={require('./favicon.ico')} alt="Icon"/></NavLink>      
            </div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" >New Release</Link>
                <Link to='#' color="inherit">Men</Link>
                <Link to='#' color="inherit"> Women</Link>
                <Link to='#' color="inherit" >Kids</Link>
            </Breadcrumbs>
                <div className={Style.rightContainer}>
                    <NavSearch class={Style.rightContainer__navSearch} />
                    {/* <div className={Style.rightContainer__icons}> */}
                    <div className={Style.empty}></div>
                    <Link href="#" className={Style.icon}><PermIdentityIcon /></Link>
                    <div className={Style.empty2}></div>
                    <Link href="#" className={Style.icon}><LocalMallIcon color='action'/></Link>
                </div>
            </div>
            
        );
    }
}

const NavBar = withRouter(_NavBar);
export { NavBar };