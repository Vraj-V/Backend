const fs = require('node:fs');

//1.#  write a file || create a file
// fs.writeFile("hey.txt"," cat is a my favirite pet", function(err){
//     if(err) console.log(err);
//     else
//         { 
//             console.log("Meow complete");
//         }
// })

// 2.# read the file
// fs.readFile("hello.txt", "utf-8", function(err, data){
//     if (err) console.log("error:",err);
//     else console.log("data:",data);
// })



// 3.# append a file || update a file
// fs.appendFile("hey.txt"," cat is a my favirite pet", function(err){
//     if(err) console.log(err);
//     else
//         { 
//             console.log("Meow update complete");
//         }
// })

// 4.# copy a file || duplicate a file
// fs.copyFile("hey.txt","./copy.txt", function(err){
//     if(err) console.log(err);
//     else console.log("copy successful");
// })


// 5.#rename a file || change name of a file

// fs.rename("./copy.txt", "duplicate.txt", function(err){
//     if (err) console.log(err);
//     else console.log("rename successful");
// })
    

// 6.#delete a file || remove a file

// fs.unlink("duplicate.txt", function(err){
//     if (err) console.log(err);
//     else console.log("delete successful");

// })

// 7.# create a directory || make a folder
    // fs.mkdir("new",function(err){
    //     if (err) console.log(err);
    //     else console.log("new folder");
    // })
    // // 8.# remove a directory || delete a folder
    // fs.rmdir("copy",{recursive: true},function(err){
    //     if (err) console.log(err.message);
    //     else console.log("delete successful");

    //  why use Resursive is used here?
    // ans: Let say a delete is empty without recursive it cannot uninstall the folder so in order to do that we need use recursive which the tell to default . Default recursive is set to false.

    // })

// fs.rmdir("./copy" ,function(err){
//     if(err) console.log(err);
//     else console.log("delete folder");
// })

// 9.# read a directory || view a folder
// fs.readdir("./new",function(err, files){
//     if (err) console.log(err);
//     else console.log(files);
// })
// 10.# read file from folder
fs.readFile("./new/hello.txt",function(err, data){
    if (err) console.log(err);
    else console.log("Written from file : ",data);
})