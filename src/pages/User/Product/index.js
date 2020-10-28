import React from 'react';
import Style from "./style.module.scss"
import {CategorySquareCard1} from "../../../components/Display/CategorySquareCard1"
import {ProductRectangleCard1} from "../../../components/Display/ProductRectangleCard1"
import {ProductRectangleCard2} from "../../../components/Display/ProductRectangleCard2"
import {MainRectangleCard1} from "../../../components/Display/MainRectangleCard1"
function Product() {
    return (
        <>
            <div className = {Style.productpageContainer}>




                <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "340"
                    rate = "3.4"
                    numofColor = "8"
                    buttonLink="/home"
                    imgLink="/home"
                />
                <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "450"
                    rate = "4.6"
                    numofColor = "3"
                    newContainerStyle = "background: rgba(255, 148, 56, 0.2)"
                    buttonLink="/home"
                    imgLink="/home"
                />
                <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "330"
                    rate = "3.8"
                    numofColor = "2"
                    buttonLink="/home"
                    imgLink="/home"
                />

{/* 
                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                    imgLink="/home"
                />
                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                    imgLink="/home"
                />
                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                    newrec_ContainerStyle = "background:rgba(191, 235, 172, 0.4);"
                    imgLink="/home"
                /> */}
                
                {/* <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                rate = "3.4"
                numofColor = "4"
                newimg_ContainerStyle = "background:rgba(191, 235, 172, 0.4);"
                buttonLink="/home"
                imgLink="/home"
                /> 

                <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                rate = "4.6"
                numofColor = "8"
                buttonLink="/home"
                imgLink="/home"
                /> 

                <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                rate = "3.8"
                numofColor = "7"
                buttonLink="/home"
                imgLink="/home"
                />  */}

                {/* <MainRectangleCard1 
                name = "NIKE BLAZER MID"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "260"
                newrec_ButtonStyle = "background: rgba(255, 148, 56, 0.2)"
                buttonLink="/home"
                imgLink="/home"
                /> */}


            </div>
        </>
    );
}

export default Product;