const fs = require("fs");

// ------------------ Create file and Write --------------

// Sync
// fs.writeFileSync("test.txt", "Hey There");

// Async
// fs.writeFile("test.txt", "Hello world", (err) => {
//   console.log(err);
// });

// ---------------------- Only Read File ---------------------

// Sync

// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);

//Async

// fs.readFile("contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else console.log(result);
// });

//-------------------- Append File Also Create File ----------------

// fs.appendFileSync(
//   "test.txt",
//   `\nDate: ${new Date()}\nhello i am Harendra godara`,
// );

// fs.appendFile(
//   "test.txt",
//   `\nDate: ${new Date()}\nhello i am Harendra godara`,
//   (err, result) => {
//     if (err) console.log(err);
//     else console.log(result);
//   },
// );

//---------------- some Functions -------------

// copy file
// fs.copyFileSync("./test.txt", "./copy.txt");
// fs.copyFile("./test.txt", "./copy.txt", () => {});

// Delete File
// fs.unlinkSync("./copy.txt");
// fs.unlink("./copy.txt", () => {});

// File Statics
// console.log(fs.statSync("test.txt"));

// ===============================================================

// Sync => return karta h
//Async => return type void hota h mtlb return nahi krta hai
