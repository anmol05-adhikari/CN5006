import '../App.css';
import './Calculator.css';
import React, { useState } from 'react';
import Button from './Button.js';
import showme from './showme.png';   // your picture

function KeyPadComponent() {

    const [text1, setText] = useState("");
    const [showImage, setShowImage] = useState(false);

    const ClickHandle = (e) => {

        if (e.target.value === "C") {
            setText("");
        }
        else if (e.target.value === "=") {
            setText(eval(text1));
            alert(eval(text1));
        }
        else if (e.target.value === "show me") {
            setShowImage(true);
        }
        else if (e.target.value === "square") {
            const num = Number(text1);
            setText(num * num);
        }
        else {
            setText(text1 + e.target.value);
        }
    };

    return (
        <div className="Calculator">

            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {showImage && (
                <div>
                    <img src={showme} alt="My Pic" width="150" />
                </div>
            )}

            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="show me" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="square" ClickHandle={ClickHandle} />
            </div>

        </div>
    );
}

export default KeyPadComponent;
