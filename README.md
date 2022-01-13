<img src="https://media0.giphy.com/media/E90GssJoIqMRW/giphy.gif">

# The Perfect Excuse

My first javascript project for shcool. The theme: "The useless web".

Have you ever been in the situation where you just don't want to do something but you don't have a good excuse not to? Well, fear no more! This Perfect Excuse generator will get you out of any obligations.

# Installation

No installation needed. Just visit https://theperfectexcuse.netlify.app

# Code Review

Code review written by Amanda Hultén.

1. `style.css` - Don't forget to use variables for your colors to easier access them if changes occur. This can be done with the :root-element.  
2. `style.css:30-32` - Instead of writing the margins on seperate lines, you could write margin: top right bottom left. In your case it would be margin: 40px 10px 0 10px.
3. `index.html:117-120` - Remember to always have your script-tags inside the body, most commonly in the end of the body.  Otherwise, the document is considered invalid. (The browsers these days will often fix problems when placed outside, but it's not good practice). 
4. `style.css` - To get a more efficient code you could also use the :root-element to set your font-sizes.
5. `index.html: 10` - The html-tag should only have two children: head and body. Therefore you can't have your h1-tag outside those two children. It should be inside the body-tag. 
6. You have really good comments, especially in your js-files, wich gives me a good overview of your code - well done!   

# Testers

Tested by the following people:

1. Nelly Svarvare Petrén
2. Agnes SKönvall
3. Anton Marinov
