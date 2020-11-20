import React from 'react'
import Style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"


class SettingItem extends React.Component {

    render() {
        const { name, state, icon, onClick } = this.props
        return <button className={Style["setting__item"]} id={state} onClick={onClick}>
            <h3 className={Style["setting__item--info"]}>
                <span className={Style["setting__item--icon"]}>
                    <FontAwesomeIcon icon={icon}/>
                </span>
                {name}
            </h3>
            <span className={Style["setting__item--angle"]}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </span>
        </button>
    }
}

export default SettingItem