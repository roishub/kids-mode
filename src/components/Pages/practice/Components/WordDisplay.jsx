import React from "react";

export default function WordDisplay(props) {
    const wordArray = [...props.word];
    const userInputWordArray = [...props.userInput];

    return (
        <div>
        {wordArray.map((val, index) => {
            if (userInputWordArray.length < index + 1) {
            return (
                <span key={index} style={styles}>
                {val}
                </span>
            );
            }
            if (val === userInputWordArray[index]) {
            return (
                <span key={index} style={{ ...styles, color: "green" }}>
                {val}
                </span>
            );
            }
            if (val !== userInputWordArray[index]) {
            return (
                <span key={index} style={{ ...styles, color: "red" }}>
                {val}
                </span>
            );
            }
            return (
            <span key={index} style={styles}>
                {val}
            </span>
            );
        })}
        </div>
    );
    }

    const styles = {
    display: "inline-block",
    fontSize: "10vh",
    userSelect: "none"
};