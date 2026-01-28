// console.log("Hello, Node.js!");
//  use npm start to run the script.js file
//  why we use npm start to run the script.js file because it is a command that is used to run the script.js file.
//  npm start is a command that is used to run the script.js file. And we add start in the scripts section in the package.json file.


//  For File System COMMAND IN NODE JS
// Q1. Write a code to create a file and write a message in it using node Js.
// Ans:
 // use writeFile to create a file

        // const fs = require("fs");
        // fs.writeFile ("hello.txt","hello file created using node Js", function(err){
        //     if (err) console.log(err);
        //     else console.log("File created successfully");
        // })

// Q2. Write a code to read a file and print the message in it using node Js.
// Ans:
    // use readFile to read a file
            // const fs = require("fs");
            // fs.readFile("hello.txt",function(err,data){
            //     if(err) console.log(data);
            //     else console.log("Read file data: \n" + data);
            // })

// Q3. Write a code to delete a file using node Js.
// Ans:
    // use unlink to delete a file
            // const fs = require("fs");
            // fs.unlink( "hello.txt", function(err){
            //     if (err) console.log(err.message);
            //     else console.log("File deleted successfully");
            // })

// Q4. Write a code to update a file using node Js.
// Ans:
    // use writeFile to update a file
            // const fs = require("fs");
            // fs.writeFile("hello.txt","hello file updated using node Js", function(err){
            //     if (err) console.log(err.message);
            //     else console.log("File updated successfully");
            // })

// Q5. Write a code to append a file using node Js.
// Ans:
    // use appendFile to append a file
                // const fs = require("fs");
                // fs.appendFile("hello.txt"," . New line was added using Append", function(err){
                //     if (err) console.log(err.message);
                //     else console.log("File appended successfully");
                // })

// Q6. Write a code to rename a file using node Js.
// Ans:
    // use rename to rename a file
            // const fs = require("fs");
            // fs.rename("hello.txt","english.txt", function(err){
            //     if (err) console.log(err.message);
            //     else console.log("File renamed successfully");
            // })
    

// Q7. Write a code to copy a file using node Js.
// Ans:
    // use copyFile to copy a file
            // const fs = require("fs");
            // fs.copyFile("english.txt","hello.txt", function(err){
            //     if (err) console.log(err.message);
            //     else console.log("File copied successfully");
            // })
            

// Q8. Write a code to create a directory using node Js.
// Ans:
    // use mkdir to create a directory
        // const fs = require("fs");
        // fs.mkdir("new_directory", function(err){
        //     if (err) console.log(err.message);
        //     else console.log("Directory created successfully");
        // })

// Q9. Write a code to delete a directory using node Js.
// Ans:
    // use rmdir to delete a directory
            // const fs = require("fs");
            // fs.rmdir("new_directory", function(err){
            //     if (err) console.log(err.message);
            //     else console.log("Directory deleted successfully");
            // })

// Q10. Write a code to check if a file exists using node Js.
// Ans:
    // use access to check if a file exists
            const fs = require("fs");
            fs.access("hello.txt", function(err){
                if (err) console.log(err.message);
                else console.log("File exists");
            })
            