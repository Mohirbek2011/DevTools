import React, { useState } from "react";
import styles from "./Quiz.module.css";

const initialQuestions = {
  easy: [
    { question: "Что означает HTML?", answers: ["HyperText Markup Language", "Hyper Transfer Markup Language"], correct: 0 },
    { question: "Какой тег создаёт ссылку?", answers: ["<a>", "<link>"], correct: 0 },
    { question: "Как вставить картинку в HTML?", answers: ["<img>", "<picture>"], correct: 0 },
    { question: "Какой тег делает текст жирным?", answers: ["<b>", "<strong>"], correct: 0 },
    { question: "Как создать список в HTML?", answers: ["<ul>", "<list>"], correct: 0 },
  ]
};

const Quiz = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswers, setNewAnswers] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

  const handleAnswer = (index) => {
    if (index === questions[difficulty][currentQuestion].correct) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const handleTextAnswer = () => {
    if (userAnswer.trim().toLowerCase() === questions[difficulty][currentQuestion].correctAnswer?.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer("");
    nextQuestion();
  };

  const nextQuestion = () => {
    const next = currentQuestion + 1;
    if (next < questions[difficulty].length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setUserAnswer("");
  };

  const addNewQuestion = () => {
    const updatedQuestions = { ...questions };
    updatedQuestions[difficulty].push({
      question: newQuestion,
      answers: newAnswers,
      correct: correctAnswerIndex
    });
    setQuestions(updatedQuestions);
    setNewQuestion("");
    setNewAnswers(["", ""]);
    setCorrectAnswerIndex(0);
  };

  return (
    <div className="container">
      <div className="quiz-container">
        <div className={styles.quizContainer}>
          {showScore ? (
            <div className="score-section">
              <h3>
                Ваш результат: {score} из {questions[difficulty].length}
              </h3>
              <button className={`${styles.quizBtn} quiz__btn`} onClick={resetQuiz}>
                Пройти снова
              </button>
            </div>
          ) : (
            <div className="question-section">
              <h3>{questions[difficulty][currentQuestion]?.question}</h3>
              {questions[difficulty][currentQuestion]?.answers ? (
                questions[difficulty][currentQuestion]?.answers.map((answer, index) => (
                  <button className={`${styles.quizBtn} quiz__btn`} key={index} onClick={() => handleAnswer(index)}>
                    {answer}
                  </button>
                ))
              ) : (
                <>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Введите ответ"
                  />
                  <button className={`${styles.quizBtn} quiz__btn`} onClick={handleTextAnswer}>
                    Отправить
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <div className={styles.addQuestionForm}>
          <h3>Добавить свой вопрос</h3>
          <input
            type="text"
            placeholder="Введите вопрос"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ответ 1"
            value={newAnswers[0]}
            onChange={(e) => setNewAnswers([e.target.value, newAnswers[1]])}
          />
          <input
            type="text"
            placeholder="Ответ 2"
            value={newAnswers[1]}
            onChange={(e) => setNewAnswers([newAnswers[0], e.target.value])}
          />
          <select onChange={(e) => setCorrectAnswerIndex(Number(e.target.value))}>
            <option value={0}>Ответ 1 правильный</option>
            <option value={1}>Ответ 2 правильный</option>
          </select>
          <button className={`${styles.quizBtn} quiz__btn`} onClick={addNewQuestion}>
            Добавить вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
