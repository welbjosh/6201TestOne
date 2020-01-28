/*
    Student Name  :
    StudentID     :
    Date Completed:
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


        // Hides the h3 paragraph made above

        
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

