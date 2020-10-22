import React from 'react';
// import Style from "./style.module.scss"
import CategorySquareCard1 from "../../../components/Display/CategorySquareCard1/index"

function Product() {
    return (
        <>
            <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                numofColor = "8"
            />
            <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                numofColor = "8"
            />
            <CategorySquareCard1 
                name = "Ultraboost 20 Shoes"
                imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                price = "340"
                numofColor = "8"
            />
        </>
    );
}

export default Product;