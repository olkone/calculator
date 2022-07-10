# Calculator
**Check out the Calculator [live webpage](https://olkone.github.io/calculator/)!**
<br><br>Here is a shortcut to the [keyboard map](#keyboard-mapping).

## About
This web-browser calculator was created with vanilla JavaScript, HTML, and Sass/CSS as part of [The Odin Project](https://www.theodinproject.com/) curriculum.


## App Features
* Use this calculator just like any other basic calculator!
* Point and click to press the calculator's buttons, or type in numbers and operators on your keyboard.
* Calulate the sum, difference, product, quotient, root, exponent, and factorial.
* Toggle your input between negative and positive with the '+/-' button.
* Clear your previous operation and current input with the 'AC' button.
* Delete the last digit in your current input with the 'Backspace' button.

## Code Features
*The following features were the main concepts I learned and implemented in this project.*

### HTML & (S)CSS:

* Grid display
* Flex display
* User feedback with responsive buttons on hover, click, keydown, and keyup
* Nested Sass structure
* Using !important
* Importing fonts from Google Fonts

### JavaScript:
* Arithmetic operations
* Event listeners for click, keydown, and keyup
* Switch statements
* DOM manipulation:
    * Change calculator display inner text
    * Add and remove 'active' class on event
* Limit entry input to 15 digits
* Limit decimal entry to one
* Limit factorial input as to not crash the webpage

## Reflection
This project was the first big project where I had to make decisions between incompatible functionality and aesthetics.<br><br>
For example, I had to decide between arithmetic accuracy and overflowing the display with decimals. It would've looked nicer if the display only showed the first five decimals. However, because of the way my program stores its entries, that would reduce the decimal's accuracy and produce incorrect outputs.<br><br>
I ended up choosing to limit the input entry length to 15 digits, which kept a fair amount of arithmetic accuracy, but didn't overwhelm the display too much.
<br><br>
7/10/22: <br>
After reviewing my code a few days after publishing my working calculator, I noticed that I only had one defined function that was doing ALL of the arithmetic heavy-lifting and a switch statement handling ALL of the DOM manipulation. I brushed up on my coding principles and applied single-responsibility functions and separation of concerns.
<br><br>
After reworking my code, it became more organized and easier to read. Because my code was cleaner, I was able to identify where a bug in my code was and fix it. This bug wouldn't clear the entry after completing an operation, instead the user's input would append the result of the previous operation.
<br>

## Development Tools
* VS Code
* Git/GitHub
* Sass
* Chrome DevTools
* Google Fonts
* Mac Terminal

## Check out some of my other projects!
* Sketch!
   * [Live Page](https://olkone.github.io/sketch/)
   * [Repository](https://github.com/olkone/sketch)
* Python Typing Game
    * [Repository](https://github.com/olkone/typing-game)
* Rock, Paper, Scissors
    * [Live Page](https://olkone.github.io/rock-paper-scissors/)
    * [Repository](https://github.com/olkone/rock-paper-scissors/)
* Writing Portfolio Webpage
    * [Live Page](https://olkone.github.io/writing-portfolio/)
    * [Repository](https://github.com/olkone/writing-portfolio)


# Keyboard Mapping
|   Key   |   Value   |
|:--------|:----------|
|0|0|
|1|1|
|2|2|
|3|3|
|4|4|
|5|5|
|6|6|
|7|7|
|8|8|
|9|9|
|.|decimal|
|c|all clear|
|backspace|delete|
|!|factorial|
|^|power|
|r|root|
|/|divide|
|*|multiply|
|-|subtract|
|+|add|
|n|negative|
|enter|equals|