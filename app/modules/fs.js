const fs = require("fs");
const path = require("path");

// fs.mkdirSync  // sync
// fs.mkdir  // async

// fs.mkdir(path.join(__dirname, "templates"), (err) => {
//   if (err) throw new Error();

//   console.log("Folder was created successfully");
// });

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();

//   console.log("Folder was created successfully");
// });

fs.writeFile(
  path.join(__dirname, "notes", "october.txt"),
  "Create new course NodeJS",
  (err) => {
    if (err) throw new Error();

    console.log("File was created successfully");

    fs.appendFile(
      path.join(__dirname, "notes", "october.txt"),
      " and microservice project",
      (err) => {
        if (err) throw new Error();

        console.log("File was changed successfully");


        // after readfile way-2
        fs.readFile(
          path.join(__dirname, "notes", "october.txt"),
          "utf-8",
          (err, data) => {
            if (err) throw new Error();

            console.log(data);
          }
        );
      }
    );
  }
);

// bufferni o'qish yo'li - 1

// fs.readFile(path.join(__dirname, "notes", "october.txt"), (err, data) => {
//   if (err) throw new Error();

//   console.log(Buffer.from(data).toString());
// });

// bufferni o'qish yo'li - 2

// fs.readFile(
//   path.join(__dirname, "notes", "october.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw new Error();

//     console.log(data);
//   }
// );
