import React from 'react';
import Style from "./style.module.scss"
import { ProductCardMode1 } from "../../components/Display/ProductCardMode1"

function Example() {
    return (
        <>
            <div className={Style.example}>
                <ProductCardMode1
                    name="Ultraboost 20 Shoes"
                    imgPath={require("../../images/shoes/ultraboost-20-shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product" />
                <ProductCardMode1
                    name="ZX 2K 4D Shoes"
                    imgPath={require("../../images/shoes/zx-2k-4d-shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product"
                    newBackgroundStyle='background:#ffa39e'
                    newCircleStyle="background:#fffb8f" />
                <ProductCardMode1
                    name="4D RUN 1.0 Parley Shoes"
                    imgPath={require("../../images/shoes/4d-run-1.0-parley-shoes.png")}
                    buyGoto="/product"
                    imgGoto="/product"
                    newBackgroundStyle='background-image: linear-gradient(to bottom right, #91d5ff 0%, #ffd591 100%);'
                    newCircleStyle="background-image: linear-gradient(to top left, #69c0ff 0%, #b7eb8f 100%);" />
            </div>
        </>
    );
}

export default Example;