import React, { useState } from "react";
import { useSelector } from "../store/hook";
import Logout from "./Logout";
import { useDarkMode } from "../store/actions/DarkModeContext.jsx"; // Import useDarkMode hook

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { isDarkMode } = useDarkMode();

  const [randomSecretNumber, setRandomSecretNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  console.log(randomSecretNumber);
  const [isGuessedCorrectly, setIsGuessedCorrectly] = useState(false);
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [guess, setGuess] = useState("");
  const [mode, setMode] = useState("easy");

  const displayMessage = (message) => {
    setMessage(message);
  };

  const handleGuess = () => {
    const guessNumber = Number(guess);
    if (!guessNumber) {
      displayMessage("💢 No Number");
    } else if (guessNumber === randomSecretNumber) {
      displayMessage("🏆 Correct Number!");
      document.body.classList.add("bg-green-600", "text-white");
      setIsGuessedCorrectly(true);
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (guessNumber !== randomSecretNumber) {
      if (score > 1) {
        displayMessage(
          guessNumber > randomSecretNumber ? "⚠️ Too High" : "⚠️ Too Low"
        );
        setScore(score - 1);
      } else {
        displayMessage("You Lose The Game");
        setScore(0);
      }
    }
  };

  const handleAgain = (newMode = mode) => {
    setScore(20);
    setMode(newMode);
    setRandomSecretNumber(
      Math.floor(
        Math.random() *
          (newMode === "easy" ? 20 : newMode === "medium" ? 2000 : 20000)
      ) + 1
    );
    setMessage("Start guessing...");
    setGuess("");
    setIsGuessedCorrectly(false);
    document.body.classList.remove("bg-green-600", "text-white");
    document.body.classList.add(isDarkMode ? "bg-gray-900" : "bg-gray-100");
  };

  return (
    <div
      className={`font-['Press_Start_2P'] min-h-screen mt-20 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <header className="relative flex flex-col items-center justify-center h-1/3 border-b-4 border-gray-200 dark:border-gray-600">
        <h1 className="text-6xl text-center font-press-start bg-white dark:bg-gray-900 text-black dark:text-white py-32">
          Guess My Number!
        </h1>
        <div className="flex flex-row justify-end space-x-4 mt-4 absolute -top-10">
          <button
            className={`block text-xl rounded py-4 px-8 ${
              mode === "easy"
                ? "bg-blue-400 dark:bg-gray-900 text-black dark:text-white"
                : "bg-blue-200 dark:bg-gray-700 text-black dark:text-white opacity-50"
            }`}
            onClick={() => handleAgain("easy")}
          >
            Easy Mode <br /> (Between 1 and 20)
          </button>
          <button
            className={`block text-xl rounded py-4 px-8 ${
              mode === "medium"
                ? "bg-blue-400 dark:bg-gray-900 text-black dark:text-white"
                : "bg-blue-200 dark:bg-gray-700 text-black dark:text-white opacity-50"
            }`}
            onClick={() => handleAgain("medium")}
          >
            Medium Mode <br /> (Between 1 and 2,000)
          </button>
          <button
            className={`block text-xl rounded py-4 px-8 ${
              mode === "hard"
                ? "bg-blue-400 dark:bg-gray-900 text-black dark:text-white"
                : "bg-blue-200 dark:bg-gray-700 text-black dark:text-white opacity-50"
            }`}
            onClick={() => handleAgain("hard")}
          >
            Hard Mode <br /> (Between 1 and 20,000)
          </button>
        </div>
        <button
          className="btn again absolute top-4 left-4 bg-blue-500 hover:text-white text-white font-bold py-2 px-4 rounded mt-72 w-52 h-28"
          onClick={() => handleAgain()}
        >
          Again!
        </button>
        <div className="bg-gray-200 text-gray-800 text-9xl w-max h-40 px-16 py-4 flex items-center justify-center mt-8">
          {isGuessedCorrectly ? randomSecretNumber : "?"}
        </div>
      </header>
      <main className="h-2/3 flex flex-col items-center justify-around mt-12 space-y-12">
        <section className="flex flex-col items-center">
          <input
            type="number"
            className="bg-transparent border-4 border-gray-200 text-5xl p-2.5 w-auto text-center mb-12"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button
            className="btn check bg-blue-500 hover:text-white text-white font-bold py-2 px-4 rounded w-56 h-28 text-3xl"
            onClick={handleGuess}
          >
            Check!
          </button>
        </section>
        <section className="text-2xl">
          <p className="message mb-8 bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded">
            {message}
          </p>
          <p className="label-score mb-8 bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
      <div className="absolute left-12 top-4">
        <Logout />
      </div>
    </div>
  );
}
