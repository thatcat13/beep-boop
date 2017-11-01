# Epicodus Week 3 Intro: Solo Project

Beep Boop Game: Cat Janowitz; October 27, 2017

#### By Cat Janowitz

## Description

This is a solo project that involves the design of a game that receives a number from the user. In return the user sees an array of number output starting from zero up to the number that was inputted, where every 0 is replaced with a "Beep!", every 1 is replaced with a "Boop!" and every number divisible by 3 is replaced with, "I'm sorry, Dave. I'm afraid I can't do that.".

## SPECIFICATIONS

* set input field to numbers so only numbers can be received
* game returns an output of integers in an array, starting at 0 and up to the number inputted
  * Example Input: 4
  * Example Output (to be modified further): [0, 1, 2, 3, 4]

* number array is tested incrementally from left to right using a for-loop; if the number %3 === 0 = true, it is replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  * Example Input: 4
  * Example Output: [0, 1, 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4]

* at this point, the array contains both integers and strings. mixed array is converted to one data type, strings, using the .toStrings() method

* string array is tested incrementally from left to right using a for-loop; if the "number" includes "0" = true the "number" is replaced with "Beep!":
  * Example Input: ["0", "1", "2", "3", "4"]
  * Example Output: ["Beep!", "1", "2", "I'm sorry, Dave. I'm afraid I can't do that.", "4"]

* string array is tested incrementally from left to right using a for-loop; if the "number" includes "1" = true the "number" is replaced with "Boop!":
  * Example Input: ["0", "1", "2", "3", "4"]
  * Example Output: ["Beep!", "Boop!", "2", "I'm sorry, Dave. I'm afraid I can't do that.", "4"]

* string array is tested incrementally from left to right using a for-loop; if the "number" includes "0" = true && if the "number" includes "1" = true, both "numbers" are replaced with "Boop!Beep!":
  * Example Input: ["8", "9", "10", "11"]
  * Example Output: ["8", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!Beep!", "11"]

* string array is tested incrementally from left to right using a for-loop; if the "number" includes "11" = true the "number" is replaced with "Boop!Boop!":
  * Example Input: ["8", "9", "10", "11"]
  * Example Output: ["8", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!Beep!", "Boop!Boop!"]

* string array is tested incrementally from left to right using a for-loop; if the "number" includes "00" = true the "number" is replaced with "Beep!Beep!":
  * Example Input: ["8", "9", "10", "11", "100"]
  * Example Output: ["8", "I'm sorry, Dave. I'm afraid I can't do that.", "Boop!Beep!", "Boop!Boop!", "Boop!Beep!Beep!"]




## Setup/Installation Requirements

* access computer with internet connection and a browser
* go to github.com and search "thatcat13"
* browse thatcat13's repositories to find 'beep-boop' repository
* click on 'beep-boop' repository and copy URL link that directs to this specific repository
* access computer terminal and make sure you are at the top directory
* in terminal, after $ prompt, type in: git clone {-don't type the following, just do the following: paste URL into terminal after git clone-} then hit enter
* complete 'beep-boop' repository should be available at top directory (although desktop is suggested)
* browse folder of repository to find 'index.html'; drag file directly into browser OR in browser click file open and access 'index.html'


* or access gh-pages assigned to this project:
* thatcat13.github.io/beep-boop



## Known Bugs

No known bugs, but I'm a newbie so please keep an eye out for any bugs you may come across.

## Support and contact details

If you have any issues, please feel free to contact me at:
* thatcat13@gmail.com
* https://github.com/thatcat13

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

### License

* The MIT License (MIT) applies to:
* Bootstrap (and is copyright 2016 Twitter)
* jQuery


Copyright (c) 2017 **Cat Janowitz**
