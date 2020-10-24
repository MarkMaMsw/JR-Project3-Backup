import React from 'react';
import Style from "./style.module.scss"
import CategorySquareCard1 from "../../../components/Display/CategorySquareCard1/index"
import ProductRectangleCard1 from "../../../components/Display/ProductRectangleCard1/index"
import ProductRectangleCard2 from "../../../components/Display/ProductRectangleCard2/index"
import MainRectangleCard1 from "../../../components/Display/MainRectangleCard1/index"
function Product() {
    return (
        <>
            <div className = {Style.productpageContainer}>




                {/* <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "340"
                    rate = "3.4"
                    numofColor = "8"
                />
                <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "450"
                    rate = "4.6"
                    numofColor = "3"
                />
                <CategorySquareCard1 
                    name = "Ultraboost 20 Shoes"
                    imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                    price = "330"
                    rate = "3.8"
                    numofColor = "2"
                /> */}


                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                />
                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                />
                <ProductRectangleCard1 
                    name = "Red Bag Awesome"
                    imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                    price = "20.0"
                    rate = "4.5"
                />
                
                {/* <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                numofColor = "8"
                
                /> 

                <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                numofColor = "8"
                
                /> 

                <ProductRectangleCard2 
                name = "Red Bag Awesome"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "185"
                numofColor = "8"
                
                />  */}

                {/* <MainRectangleCard1 
                name = "NIKE BLAZER MID"
                imgPath={require("../../../images/shoes/zx-2k-4d-shoes.png")}
                price = "260"
                /> */}


            </div>
        </>
    );
}

export default Product;