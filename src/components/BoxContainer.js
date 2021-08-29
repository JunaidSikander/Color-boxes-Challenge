import React from 'react'
import Box from "./Box";

const BoxContainer = ({allColors, numBoxes}) => {

    const boxes = Array.from({length: numBoxes}).map((index) => <Box key={index} colors={allColors}/>);

    return (
        <div className='box-Container'>
            {boxes}
        </div>
    )
};

export default BoxContainer;

BoxContainer.defaultProps = {
    allColors: ['#848482', '#FFD12A', '#F4C2C2', '#A1CAF1', '#89CFF0', '#89CFF0', '#007FFF', '#6D351A', '#FF9966', '#87A96B', '#B2BEB5', '#E9D66B', '#3B444B'],
    numBoxes: 18
}
