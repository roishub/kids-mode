import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './story3.css';

const TypeRacer = () => {
    const [paragraph, setParagraph] = useState('');
    const [timeLeft, setTimeLeft] = useState(120);
    const [mistakes, setMistakes] = useState(0);
    const [wpm, setWPM] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const inpFieldRef = useRef(null);
    const timerRef = useRef(null); // Ref for the timer
    const [correctChars, setCorrectChars] = useState(Array(paragraph.length).fill(null));

    const paragraphs = useMemo(() => [
        "Once in a bustling city, lived Maya, a curious girl, and her loyal dog, Max. One sunny morning, they embarked on a delightful adventure to explore the enchanted garden nearby. As they wandered through the lush greenery, they discovered a hidden path leading to a magical waterfall. Together, Maya and Max splashed in the cool waters, chased colorful butterflies, and befriended a playful family of rabbits. With joy in their hearts, they returned home, their bond stronger than ever, knowing that more adventures awaited them tomorrow."
    ], []); 

    useEffect(() => {
        setCorrectChars(Array(paragraph.length).fill(false));
    }, [paragraph]);

    const loadParagraph = useCallback(() => {
        const paragraphText = paragraphs[0]; // Since there's only one paragraph
        setParagraph(paragraphText);
        setCharIndex(0);
        setMistakes(0);
        setIsTyping(false);
        setTimeLeft(150); // Reset timeLeft to its initial value
        setInputDisabled(false); // Re-enable the input field
        setCorrectChars(Array(paragraphText.length).fill(false)); // Reset correctChars
    }, [paragraphs]);

    useEffect(() => {
        loadParagraph();
        const inputRef = inpFieldRef.current;
        const keydownHandler = () => inputRef.focus();
        document.addEventListener("keydown", keydownHandler);
    
        return () => {
            document.removeEventListener("keydown", keydownHandler);
            clearInterval(timerRef.current); // Clear the interval when unmounting
        };
    }, [loadParagraph]); 

    useEffect(() => {
        if (isTyping) {
            const timer = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    if (prevTimeLeft === 0) {
                        clearInterval(timer);
                        setInputDisabled(true); // Disable input field when time finishes
                        return 0;
                    }
                    return prevTimeLeft - 1;
                });
            }, 1000);
        
            // Store the timer reference for cleanup
            timerRef.current = timer;
        
            return () => clearInterval(timer);
        }
    }, [isTyping]);    

    const handleInput = (event) => {
        if (!isTyping) {
            setIsTyping(true);
        }
        const typedChar = event.key;
    
        // Check if the pressed key is an alphabet, common punctuation mark, or backspace
        if (/^[a-zA-Z.,?!'" ]$/.test(typedChar) || typedChar === "Backspace") {
            const newCharIndex = typedChar === "Backspace" ? charIndex - 1 : charIndex + 1;
    
            if (typedChar !== "Backspace") {
                if (typedChar !== paragraph[charIndex]) {
                    setMistakes(prevMistakes => prevMistakes + 1);
                    setCorrectChars(prevCorrectChars => {
                        const newCorrectChars = [...prevCorrectChars];
                        newCorrectChars[charIndex] = false;
                        return newCorrectChars;
                    });
                } else if (correctChars[charIndex] !== true) {
                    setCorrectChars(prevCorrectChars => {
                        const newCorrectChars = [...prevCorrectChars];
                        newCorrectChars[charIndex] = true;
                        return newCorrectChars;
                    });
                }
            }
    
            if (newCharIndex >= 0 && newCharIndex <= paragraph.length) {
                setCharIndex(newCharIndex);
            }
        }
    };
    

    useEffect(() => {
        const currentWPM = Math.round((charIndex / 5) / (120 - timeLeft) * 60);
        setWPM(currentWPM);
    }, [charIndex, timeLeft]);

    const resetGame = () => {
        loadParagraph();
        inpFieldRef.current.value = "";
        setCorrectChars(Array(paragraph.length).fill(null)); // Reset correctChars
    };
    

    return (
        <div className="hero__section">
            <div className="wrapper">
                <div className="header">
                    <h1 className="title__hero">TYPE RACE</h1>
                </div>
                <input type="text" className="input-field" ref={inpFieldRef} onKeyDown={handleInput} disabled={inputDisabled} />
                <div className="content-box">
                    <div className="typing-text">
                        <p>
                            {paragraph.split('').map((char, index) => (
                                <span
                                    key={index}
                                    className={`${
                                        charIndex === index ? 'active' : ''
                                    } ${
                                        index < charIndex ? (correctChars[index] ? 'correct' : 'incorrect') : ''
                                    }`}
                                >
                                    {char}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="center btn">
                        <button className="try-again" onClick={resetGame}>Try Again</button>
                    </div>
                    <div className="content">
                        <ul className="result-details">
                            <li className="time">
                                <p>Time Left:</p>
                                <span>
                                    <b>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</b>
                                </span>
                            </li>
                            <li className="mistake">
                                <p>Mistakes:</p>
                                <span><b>{mistakes}</b></span>
                            </li>
                            <li className="wpm">
                                <p>WPM:</p><span><b>{isNaN(wpm) ? 0 : wpm}</b></span>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypeRacer;
