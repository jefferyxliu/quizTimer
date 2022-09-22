Quiz Timer v.alpha
created by Jeffery Liu

Description: Quiz Timer is page which displays class information, instructor/TA information, seating chart, timer, quiz/test instructions all in one convenient place. Intended for use by lab TAs in lab sections.

==================
1. File Structure
==================

quizTimer/
	backgrounds/ 
		- This folder contains the background images which appear the application.
	favicon/
		- This folder contains the timer favicon which appears in the title.
	seatingChart/
		- This folder is for images of seating charts for your courses.
	index.html 
		- the main HTML file for the Quiz Timer.
	info.js
		- a javascript file which contains information about each class and instructor/TA.
	README.txt
		- a text file explaining the application, which you are reading.

==============
2. User Guide
==============

Download and unzip the quizTimer directory onto your machine. A web browser (e.g. Chrome, Firefox, Vivaldi, etc.) supporting HTML,CSS,Javascript is required to use the Quiz Timer app. To open the Quiz Timer app, click the file "index.html" and open it in your browser of choice. (To open in a browser other than your default browser, right click and select "open with"). Alternatively, you may enter the file path into your browser's url bar.

-----------------------------
2.1. Class and Quiz Selector
-----------------------------

The first panel contains a drop down for lab sections, which encodes class start times. The information is read from the "info.js" file.

It also contains two default timer settings:

	"Review (25 min) + Quiz (25 min)" - This sets "Start" to 25 minutes after the class start time, and sets the "Duration" to 25 minutes.

	"Test (50 min)" - This sets "Start" to the class start time, and sets the "Duration" to 50 minutes.

(After "info.js" file setup) When an option is selected, the corresponding seating chart will be automatically displayed in the Seating Chart panel and the "Start", "Duration", and "End" in the Timer and Password panel will be automatically calculated.

-----------------------------------
2.2. Instructor and TA Information
-----------------------------------

The second panel contains a drop down for the instructors and TAs. Two slots are displayed by default, but up to four slots can be shown; The number of slots shown can be adjusted in the footer panel.

(After "info.js" file setup) When a name is selected, the corresponding contact information will appear to the right. 

-------------------
2.3. Seating Chart
-------------------
The third panel displays an image of the seating chart. 

(After "info.js" file setup) It is automatically updated when the class is selected in the Class and Quiz Selector panel.

This panel can be toggled by pressing the ">" or "<" button on the right side.

----------
2.4 Clock
----------
The fourth panel contains a clock. This is synced to the clock on your machine. It updates every second, so it should be off by no more than a second. The clock will turn red within 5 minutes of the "End" time.

-----------------------
2.5 Timer and Password
-----------------------
The fifth panel contains the "Start", "Duration", and "End" times. 

(After "info.js" file setup) These are automatically calculated from the settings in the first panel, but may be manually adjusted.

The fifth panel also contains an input box for a password to the quiz or test. Enter the password, and click the "Show / Hide" button to toggle its visibility. 

This panel can be toggled by pressing the ">" or "<" button on the right side.

-----------------------
2.6 Instructions Panel
-----------------------
The sixth panel contains text instructions for the students during quiz or test time. You may edit the instructions by typing directly in the text area.

This panel can be toggled by pressing the ">" or "<" button on the right side.

-----------
2.7 Footer
-----------
The footer panel contains credits, and selectors for background image and the number of instructor slots.

======================
3. Setup Instructions
======================
--------------------------
3.1 Upload Seating Charts
--------------------------
Put images of the the seating chart for each of your classes into the "seatingChart/" folder. Make a different image for each chart. The supported image file types depend on your browser; usually PNG, JPEG, SVG, WebP are widely supported.

See https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types to see which image types your browser supports.

----------------------------
3.2 Fill in Your Class info
----------------------------
Open "info.js" with a text editor. 

In the list under the "courses" attribute, input the information for each of your lab sections, as JSON object the following attributes:
	
	name - a string containing the name of the course. This will be displayed in the drop down in the Class and Quiz Selector panel.

	value - a unique identifier for each of the course, such as the course and lab number. It does not matter what is here except that it is unique to each course.

	timeStart - a string containing the class start time. It is imperative that this string is in "HH:MM" (24 hour) format, since the quiz or test start time is calculated from this string.

	seatingChart - the file extension for the image of the seating chart of the course withing the "seatingChart/" folder.


Separate each list entry with a comma. Once you have completed, save the "info.js" file. The information will appear in the quizTimer application once you refresh or reopen the page.

Example 3.2.1. If you are the lab TA for MAC 1105 College Algebra Lab 20 which meets in HTL 104 on Mondays at 8:00 AM, and you have uploaded the seating chart as an image in the seatingChart folder with the extension "MAC1105Lab20.png", you would add the following to the list under the "courses" attribute.

	{name: 'MAC 1105 College Algebra Lab 20 (HTL 104 Mon 8:00 AM)', value:'MAC 1105 Lab 20', timeStart: '08:00', seatingChart: 'MAC1105Lab20.png'}

Example 3.2.2. If you are the lab TA for MAC 1140 Precalculus Lab 21 which meets in MCH 107 on Thursdays at 2:00 PM, and you have uploaded the seating chart as an image in the seatingChart folder with the extension "MAC1105Lab21.png", you would add the following to the list under the "timeClassStart" attribute. Note the 24-hour time format under the "timeStart" attribute.

	{name: 'MAC 1140 Precalculus Lab 21 (MCH 107 Thurs 2:00 PM)', value:'MAC 1105 Lab 21', timeStart: '14:00', seatingChart: 'MAC1140Lab21.png'}

--------------------------------------------
3.3 Fill in TA Office Hour and Contact info
--------------------------------------------
Open "info.js" with a text editor.

In the list under the "TA" attribute, input the information for each instructor/TA of your lab sections, as JSON object with two attributes:

	name - a string containing the instructors/TA's name.
	value - a string containing any contact information for the instructor/TA. This will be displayed next to the instructors/TA's name if it is selected in the Instructor and TA Information panel. You can use "<br>" as a new line separator.

Separate each list entry with a comma. Once you have completed, save the "info.js" file. The information will appear in the quizTimer application once you refresh or reopen the page.

Example 3.3.1. If Jane Doe is a TA for one of the lab sections, and her email is jdoe@math.fsu.edu and her office hours are in MCH 555 on Monday from 8:00-10:00, you would add the following to the list under the "TA" attribute.

        {name: 'Jane Doe', value: 'OH: MCH 555 Mon 8:00-10:00 <br> Email: jdoe@math.fsu.edu'}

=======================
4. Privacy Information
=======================
All of the information in the "info.js" file and seating chart images is saved locally, only on the machine in which you have downloaded quizTimer application. It is not visible on the internet to the public, despite using a web browser.

DO NOT publish this application on a web server, as doing so will expose the contents of the "info.js" file and your seating charts to the public. The Family Educational Rights and Privacy Act (FERPA) prohibits any educational agency or institution receiving funding from the Department of Education the disclosure of educational records, such as course lists.

See https://studentprivacy.ed.gov/ferpa for more information.

===========
5. Credits
===========
The quizTimer application was created by Jeffery Liu

The background photos which appear in the application belong to the following creators:

"chalkboard" by benzoix - https://www.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-concrete_13475906.htm#query=chalkboard%20background&position=3&from_view=keyword

"clouds" by eberhard grossgasteiger - https://www.pexels.com/photo/down-angle-photography-of-red-clouds-and-blue-sky-844297/
                    
"library" by Stanislav Kondratiev - https://www.pexels.com/photo/books-in-shelves-in-library-2908976/

"night sky" by Marc Schulte - https://www.pexels.com/photo/sky-full-of-stars-2779948/

"FSU math" by Florida State University Department of Mathematics- https://www.math.fsu.edu/Computer/Backgrounds/