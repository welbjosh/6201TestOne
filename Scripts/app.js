/*
    Student Name  : Joshua Welby
    StudentID     : 100663217
    Date Completed: 2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let largeButtons;
    let h3Name;
    let h3ParentTag;
    let contentArea;
    let firstparagraph;
    let learnButtonText;
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        // Replaces large button text with learn more
        largeButtons = document.getElementById("largeButton");
        largeButtons.innerHTML = "Learn More";

        // Creates a h3 tag with my name and student id
        contentArea = document.getElementById("contentArea")

        h3Name = document.createElement('h3');
        h3Name.innerHTML = 'Name: Joshua Welby 100663217';
        contentArea.appendChild(h3Name);


        // replaces firstparagraph with new text
        firstparagraph = document.getElementById('firstParagraph')
        firstparagraph.innerHTML = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods."
        
        // hides the firstparagraph
        firstparagraph.hidden = true;

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        // Adds a click event to the large button
        learnButtonText = document.getElementById('largeButton');

        learnButtonText.addEventListener("click", function(){
            // Make the text of the button toggle between hide details and learn more
            if (largeButtons.textContent == "Learn More"){
                largeButtons.textContent = "Hide Details";
                // Hides firstparagraph when the button text is learn more
                firstparagraph.hidden = false;
            }
            else if (largeButtons.textContent == "Hide Details"){
                largeButtons.textContent = "Learn More";
                // Shows firstparagraph when the button text is hide details
                firstparagraph.hidden = true;
            }



        })
    }



    window.addEventListener("load", Start);
})(app || (app = {}));

