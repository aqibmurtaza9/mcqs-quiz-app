# Python MCQs Quiz App

This is a simple web-based multiple-choice quiz app for self-practice. You can easily customize the quiz questions for any topic by editing a single file.

## Features

- Set the number of questions and time limit before starting.
- Randomized questions for each attempt.
- Instant feedback on correct/incorrect answers.
- Final score display and easy restart.

## How to Use

1. **Open `index.html` in your browser.**
2. Enter the number of questions and time limit you want.
3. Click **Start Quiz** to begin.
4. Select your answer for each question and click **Next**.
5. At the end, your score will be shown. Click **Restart** to try again.

## Customizing Questions

All quiz questions are stored in [`questions.js`](questions.js).  
To create your own quiz:

1. Open the [`questions.js`](questions.js) file.
2. Edit, add, or remove questions using the following format:
   ```js
   {
     question: "Your question text?",
     options: ["Option 1", "Option 2", "Option 3", "Option 4"],
     correctIndex: 0 // Index of the correct answer in the options array
   }
   ```
3. Save the file and refresh the quiz page in your browser.

You can add up to 100 or more questions.

## File Structure

- [`index.html`](index.html): Main HTML file.
- [`style.css`](style.css): App styling.
- [`questions.js`](questions.js): All quiz questions (edit this to change quiz content).
- [`script.js`](script.js): Quiz logic.

---

Enjoy practicing and feel free to adapt for any subject!