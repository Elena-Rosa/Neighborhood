# _Mr. Roboger's Neighborhood_

#### By _**Elena Rosa**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_


## Description

This is a playful numbers game that takes a users inputted number and returns a wordplay based on those numbers back to the user. 

## Setup/Installation requirements

* Clone repo from Github to your desktop with this command. $ git clone https://Elena-Rosa.github.io/Neighborhood/

* Open index.html in a browser. 


## Known Bugs

* _No issues known_

## Tests

Describe: processNumber()

Test: "It should return a string value for the number"
Code:
processNumber(0)
Expected output: "0"

Test: "It should replace numbers containing a "1" with "Beep".
Code:
processNumber(1)
Expected output: "Beep"

Test: "It should replace numbers containing a "2" with "Boop".
Code:
processNumber(2)
Expected output: "Boop"

Test: "It should replace numbers containing a "3" with "Won't you be my neighbor".
Code:
processNumber(3)
Expected output: "Won't you be my neighbor"

Describe: process()

Test: 
Code: process(0)
Expected Output: [0]

Test: 
Code: process(1)
Expected Output: [0, "Beep"]

Test: 
Code: process(2)
Expected Output: [0, "Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: 
const boop(2)
beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

## License


* _Copyright (c) _July 7th 2023_ _Elena Rosa)_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
