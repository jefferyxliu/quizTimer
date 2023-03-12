const info = {
    courses: [
        {name: 'MAC 1105 College Algebra Lab 20 (HTL 104 Mon 8:00 AM)', value:'MAC 1105 Lab 20', timeStart: '08:00', seatingChart: 'MAC1105Lab20.png'},
        {name: 'MAC 1140 Precalculus Lab 21 (MCH 107 Thurs 2:00 PM)', value:'MAC 1105 Lab 21', timeStart: '14:00', seatingChart: 'MAC1140Lab21.png'}
    ],

    TA: [
        {name: '', value: ''},
        {name: 'John Doe', value: 'MCH 555 Mon 8:00-10:00 <br> jdoe@math.fsu.edu'},
        {name: 'Jane Doe', value: 'MCH 555 Mon 8:00-10:00 <br> jdoe@math.fsu.edu'}
    ],

    instructionText: "During testing, please ...&#013;\
&#10146; put away all notes and electronic devices.&#013;\
&#10146; close all other windows except the Macintosh calculator.&#013;\
When finished, put scratch paper in the box; then you may leave.&#013;\
Don't forget your belongings!",
    
    defaults: [
        {name: 'Review (20 min) + Quiz (30 min)', value: 'Quiz-1', after: 20, duration: 30},
        {name: 'Review (25 min) + Quiz (25 min)', value: 'Quiz', after: 25, duration: 25},
        {name: 'Test (50 min)', value: 'Test', after: 0, duration: 50},
        {name: 'Final Exam (120 min)', value: 'Final', after: 0, duration: 120},
        {name: '', value: 'None', after: 0, duration: 50},
    ],
}