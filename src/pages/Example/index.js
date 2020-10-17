import React from 'react';
import Style from "./style.module.scss"
import { ProdectCardMode1 } from "../../components/Display/ProdectCardMode1"

function Example() {
    return (
        <>
            <div className={Style.example}>
                <ProdectCardMode1
                    name="Ultraboost 20 Shoes"
                    imgPath={require("../../images/shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product" />
                <ProdectCardMode1
                    name="Ultraboost 20 Shoes"
                    imgPath={require("../../images/shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product" />
                <ProdectCardMode1
                    name="Ultraboost 20 Shoes"
                    imgPath={require("../../images/shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product" />
            </div>
        </>
    );
}

export default Example;