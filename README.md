Timer CLI Application
This repository contains a simple command-line interface (CLI) application written in Node.js that allows users to set
a timer in seconds. The application makes use of the chalk library for colored output and the inquirer library for user prompts.
Additionally, the date-fns library is used to calculate the time difference.


-) User Input Validation: Ensures that the input is a valid number and within the specified range (under 300 seconds).
-) Timer Countdown: Displays the remaining time in a MM:SS format.
-) Notification on Expiry: Notifies the user when the timer has expired.
