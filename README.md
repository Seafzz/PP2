#Typing Speed Test

This project is a typing speed game that fetches a random quote from an API.
wich allows the user to type them as quickly and accurate as possible with a live feedback showing errors
word per minute (WPM) and characthers per minute (CPM)

## Features
- Fetch random quotes from the quotable API
- Splits up all characters to separate span elements.
- Tracks and display typing errors.
- Displays and calculates WPM and CPMs based on correct typed characters
- A timer that start to count down from 60 seconds
- Timer that changes color based on the time remaining ( 60 seconds white, 30 seconds yellow, 15 seconds red)
- Restart button to reset the Errors/Cpm/Wpm and Timer.

## Technologies Used
- HTML 
- CSS
- JavaScript
- [Quotable API](https://api.quotable.io)

## Setup and Usage
1. Clone the repository:
git clone https://github.com/Seafzz/PP2
2. Start the index.html in with you webbrowser and to start the game.

## Know Bugs
After the times run out and you press Go Again, it does not call for a new quote. (Refreshing the page does.)

## Known issues
Counters are currently not counting as intended and shows wrong values to what is expected.


## Acknowledgments/Credits

Sean, classmate for suggestions/brainstorming!
WebDevSimplified (youtube guide linked below (API))
CodingNepal (youtube guide linked below(Counters))
WaisAyam (yotubeguide linked below (color/layout))


- Guides 
    https://www.youtube.com/watch?v=R-7eQIHRszQ&t=72 (API)
    https://www.youtube.com/watch?v=Hg80AjDNnJk&t=1423s (counters)
    https://www.youtube.com/watch?v=Y70pPpc1CUE (layout)