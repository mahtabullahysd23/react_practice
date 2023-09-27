import React, { useContext } from "react";
import { GameContext } from "../App";
import { useState, useEffect } from "react";
const GameBoard = () => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [blankCount, setBlankCount] = useState(1);
  const [level, setLevel] = useState(0);
  const [submit, setSubmit] = useState(0);
  let missSequence = [];
  let wrongCount = 0;
  let rightCount = 0;
  let masked = [];
  let predefinedWords = [];

  const fourLetterWords = [
    "book",
    "time",
    "mind",
    "work",
    "tree",
    "city",
    "road",
    "song",
    "fish",
    "dark",
    "star",
    "moon",
    "idea",
    "love",
    "food",
    "game",
    "ship",
    "tree",
    "blue",
    "hope",
    "home",
    "door",
    "hair",
    "desk",
    "hand",
    "foot",
    "rich",
    "wave",
    "fire",
    "gold",
    "pink",
    "wall",
    "wind",
    "bird",
    "ship",
    "yard",
    "rain",
    "hill",
    "park",
    "flag",
    "rock",
    "milk",
    "hill",
    "town",
    "bell",
    "fish",
    "sand",
    "ring",
  ];
  const fiveLetterWords = [
    "apple",
    "baker",
    "candy",
    "daisy",
    "eagle",
    "fudge",
    "grape",
    "happy",
    "inbox",
    "jumps",
    "lemon",
    "magic",
    "noble",
    "ocean",
    "piano",
    "quiet",
    "rover",
    "sunny",
    "tiger",
    "unity",
    "vivid",
    "witty",
    "xerox",
    "yacht",
    "zebra",
    "angel",
    "blaze",
    "crane",
    "dolph",
    "ember",
    "frost",
    "grain",
    "hazel",
    "ivory",
    "jelly",
    "kiosk",
    "lunar",
    "mango",
    "noble",
    "oasis",
    "punch",
    "quilt",
    "rider",
    "saint",
    "tulip",
    "ultra",
    "vigor",
    "waltz",
    "xylog",
  ];
  const sixLetterWords = [
    "banana",
    "camera",
    "dancer",
    "eleven",
    "family",
    "garden",
    "honest",
    "island",
    "jigsaw",
    "kitten",
    "laptop",
    "monkey",
    "noodle",
    "orange",
    "purple",
    "quasar",
    "rabbit",
    "safari",
    "tulips",
    "unicorn",
    "violet",
    "window",
    "xyloid",
    "yellow",
    "zodiac",
    "almond",
    "breeze",
    "castle",
    "dazzle",
    "elephant",
    "frozen",
    "guitar",
    "hamster",
    "isolate",
    "jasmine",
    "kangaro",
    "lizard",
    "mystery",
    "naughty",
    "octagon",
    "penguin",
    "quicker",
    "rhinest",
    "sailor",
    "tornado",
    "upwards",
    "velvety",
    "whisper",
    "xyloids",
  ];
  const sevenLetterWords = [
    "ability",
    "awesome",
    "balance",
    "control",
    "distant",
    "freedom",
    "history",
    "journey",
    "kitchen",
    "library",
    "morning",
    "nothing"
  ];

  useEffect(() => {
    wrongCount = 0;
    rightCount = 0;
    setScores(score);
    if (score < 20) {
      predefinedWords = sevenLetterWords;
      if (score < 5) {
        setBlankCount(1);
        setLevel(level + 1);
      } else if (score >= 5 && score < 15) {
        setBlankCount(2);
        setLevel(level + 1);
      } else if (score >= 15 && score < 20) {
        setBlankCount(3);
        setLevel(level + 1);
      }
    } 
    else if (score >= 20 && score < 40) {
      predefinedWords = sixLetterWords;
      if (score >= 20 && score < 25) {
        setBlankCount(2);
        setLevel(level + 1);
        
      } else if (score >= 25 && score < 40) {
        setBlankCount(3);
        setLevel(level + 1);
      }
    } else if (score >= 40 && score < 60) {
      predefinedWords = fiveLetterWords;
      if (score >= 40 && score < 50) {
        setBlankCount(2);
        setLevel(level + 1);
      } else if (score >= 50 && score < 60) {
        setBlankCount(3);
        setLevel(level + 1);
      }
    } else if (score >= 60 && score < 80) {
      predefinedWords = fourLetterWords;
      if (score >= 60 && score < 65) {
        setBlankCount(2);
        setLevel(level + 1);
      } else if (score >= 65 && score < 80) {
        setBlankCount(3);
        setLevel(level + 1);
      }
    } else {
      predefinedWords = fiveLetterWords;
      setBlankCount(4);
      setLevel(level + 1);
    }
    const randomIndex = Math.floor(Math.random() * predefinedWords.length);
    const randomWord = predefinedWords[randomIndex];
    setTimeout(() => {
      setWordToGuess(randomWord);
      setIsLoading(false);
    }, 200);
  }, [score, blankCount, submit]);

  masked = maskWord(wordToGuess, blankCount);

  function maskWord(word, numBlanks) {
    numBlanks = Math.min(Math.max(numBlanks, 0), word.length);
    const wordArray = word.split("");
    const blankIndices = [];
    while (blankIndices.length < numBlanks) {
      const randomIndex = Math.floor(Math.random() * wordArray.length);
      if (!blankIndices.includes(randomIndex)) {
        blankIndices.push(randomIndex);
      }
    }
    for (const index of blankIndices) {
      missSequence.push({
        idx: index,
        letter: wordArray[index],
      });
      wordArray[index] = "_";
    }
    return wordArray;
  }

  function handleInput(event, index) {
    let userGuess = event.target.value;
    userGuess = userGuess.toLowerCase();
    const tmp = missSequence;
    missSequence = missSequence.filter(
      (item) => item.idx === index && item.letter === userGuess
    );
    if (missSequence.length > 0) {
      rightCount = rightCount + 1;
      event.target.disabled = true;
      event.target.style.backgroundColor = "green";
      event.target.style.color = "white";
    } else {
      wrongCount = wrongCount + 1;
      event.target.disabled = true;
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
    }
    missSequence = tmp;
    if (rightCount === blankCount) {
      masked = [];
      setIsLoading(true);
      setScore(score + rightCount + 3);
      setSubmit(submit + 1);
    }
    if (rightCount + wrongCount === blankCount && wrongCount != 0) {
      masked = [];
      setIsLoading(true);
      setScore(score + (blankCount - wrongCount));
      setSubmit(submit + 1);
    }
  }

  const { setScores, setSkip, skip } = useContext(GameContext);

  return (
    <>
      {/* <div className="level-div">
        <h1>Level: {level}</h1>
      </div> */}
      <div className="game-board">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          masked.map((letter, index) => (
            <div key={index} className="letter-box">
              {letter != "_" ? (
                letter
              ) : (
                <input
                  type="text"
                  placeholder="_"
                  className="letter-input"
                  maxLength="1"
                  onChange={(event) => {
                    handleInput(event, index);
                  }}
                ></input>
              )}
            </div>
          ))
        )}
      </div>
      <div className="btn-group">
        <button
          className="reset-button"
          onClick={() => {
            setLevel(0);
            setSkip(0);
            setScore(0);
            setSubmit(0);
          }}
        >
          Reset
        </button>
        <button
          className="skip-button"
          onClick={() => {
            setIsLoading(true);
            setSkip(skip + 1);
            setScore(score - 1);
            setSubmit(submit + 1);
          }}
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default GameBoard;
