let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]

console.log(studentRecords[0].name.toUpperCase()); // --- Q1
console.log(studentRecords[1].name.toUpperCase());
console.log(studentRecords[2].name.toUpperCase());
console.log(studentRecords[3].name.toUpperCase());


for(i=0; i<=3; i++){                                // --- Q2
    if (studentRecords[i].marks > 50){
        console.log(studentRecords[i]); 
    }
}



for(i=0; i<=3; i++){                                // --- Q3
    if (studentRecords[i].marks > 50 && studentRecords[i].id >120){
        console.log(studentRecords[i]); 
    }
}

let totalmarks = 0;                                 // --- Q4
for(i=0; i<=3; i++){                                
    totalmarks += studentRecords[i].marks;
}
console.log(totalmarks);


for(i=0; i<=3; i++){                                // --- Q5
    if (studentRecords[i].marks > 50){
        console.log(studentRecords[i].name); 
    }
}


let somemarks = 0;                                 // --- Q6
for(i=0; i<=3; i++){   
    if (studentRecords[i].id >120){                             
    somemarks += studentRecords[i].marks;
    }
}
console.log(somemarks);


// Question 7: This time we are required to print the total marks of 
// the students with marks greater than 50 after a grace of 15 marks
// has been added to those students who scored less than 50.
let gracedmark = 0;
for(i=0; i<=3; i++){                                // --- Q7
    if (studentRecords[i].marks < 50){
        studentRecords[i].marks += 15; // added grace for 2 students
    }  
    if (studentRecords[i].marks > 50){
        gracedmark += studentRecords[i].marks; // revised total for >50
    }
}
console.log(gracedmark); // 98+60+75



function Student(sname,sclass,srollno){             // --- Q8
    this.sname = sname;
    this.sclass = sclass;
    this.srollno = srollno;
}

let std1 = new Student("tony stark", "lvl10", 1);
let std2 = new Student("steve rogers", "lvl10", 3);
let std3 = new Student("bruce banner", "lvl10", 4);
let std4 = new Student("natasha romanoff", "lvl10", 6);
let std5 = new Student("thor sonofodin", "lvl10", 2);
let std6 = new Student("hawkeye", "lvl10", 5);


let avengers = [std1, std2, std3, std4, std5, std6];
console.log(avengers);






















