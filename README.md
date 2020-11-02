# TandemTrivia
Trivia Game - Tandem's Coding Challenge

# Goal
Create an application that displays trivia questions with multiple-choice answers to select from.

# Requirements
* Each round has 10 unique, multiple-choice questions
* Questions with their multiple-choice options must be displayed one at a time
* A user can select only 1 answer per question
* The correct answer must be revealed after a user has submitted their answer
* Score does not need to update in real time, but must be shown at end of round
* Results can update on any interaction you choose (e.g. form submit, button click)

# Known Issues
* Question card re-renders upon selection of correct answer, potentially shuffling answer choices on-screen while displaying "That's correct!" alert.
* Last test ("restarts game and renders new Question 1") does not pass as written.
* Not enough tests!

# To Play
* Clone repo, run "npm install" then "npm start" OR
* Open in browser at https://tandemtrivia.herokuapp.com/
* Hint: advance through quiz more quickly by clearing alert after each question (overrides automatic timer)
