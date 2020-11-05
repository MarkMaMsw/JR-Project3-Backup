import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import { ProductRectangleCard2 } from '../ProductRectangleCard2'
import './carouselModifier.scss'

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0)
    const products = props.items

    //error handling to be added
    var elements = []
    var row = []
    for (var i = 0; i < products.length; i++) {
        //ensure 3 items per row
        if (i % 3 === 0) row = []
        row.push(<ProductRectangleCard2 key={i} name={products[i].name} imgPath={products[i].imgPath} price={products[i].price} rate={products[i].rate} numofColor={products[i].color} />)
        //push the entire row to an array (special situation for the last row)
        if (i % 3 === 2 || ((products.length - i) < 3 && (i === (products.length - 1)))) elements.push(<div key={i} className="row">{row}</div>)
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (<div>
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
            {elements.map((element) => (<Carousel.Item>{element}</Carousel.Item>))}
        </Carousel>
    </div>)
}

export default ControlledCarousel


