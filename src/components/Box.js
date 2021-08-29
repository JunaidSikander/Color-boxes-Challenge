import React, {useState} from 'react'
import {choice} from "../helper";

const Box = ({colors}) => {
    const [color, setColor] = useState(choice(colors));

    const pickColor = () => {
        let newColor;
        do {
            newColor = choice(colors);
        } while (newColor === color);
        setColor(newColor);
    };

    return (
        <div className="box" style={{backgroundColor: color}} onClick={pickColor}/>
    )
};

export default Box;
