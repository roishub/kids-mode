import React, { useState, useEffect } from "react";
import WordDisplay from "./Components/WordDisplay.jsx";
import TypeSpace from "./Components/TypeArea.jsx";
import getWords from "./getWord.js";
import "./Practice.css"; // Update the CSS file import accordingly

function Practice() {
    const [wordQueue, setWordQueue] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        async function initializeWords() {
        setWordQueue(await getWords(50));
        }
        initializeWords();
    }, []);

    return (
        <div className="Practice" style={PracticeStyles}>
        <WordDisplay
            word={wordQueue.length > 0 ? wordQueue[0] : ""}
            userInput={userInput}
        />
        <TypeSpace
            setUserInput={setUserInput}
            targetWords={wordQueue}
            setWordQueue={setWordQueue}
        />
        </div>
    );
    }

    const PracticeStyles = {
    textAlign: "center"
};

export default Practice;



