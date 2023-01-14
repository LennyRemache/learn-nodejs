/* OS Module */

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

/* Path Module */

const path = require("path");

console.log(path.sep);

const filePath = path.join(__dirname, __filename);
console.log(filePath); // delimited by default delimiter '/'

const base = path.basename(filePath);
console.log(base);

// resolve important for having code work on different interfaces that may not have the same path directory to a certain file
const absolute = path.resolve(__dirname, "c");

/* FS Module (Sync) */

const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./lesson3-first.txt", "utf8");
const second = readFileSync("./lesson3-second.txt", "utf8");
console.log(first, second);

writeFileSync("lesson3-third.txt", "Hi this is third.txt", { flag: "a" }); // flag to prevent override and instead append to file

/* FS Module (async) */
// needs a callback
const { readFile, writeFile } = require("fs");

readFile("./lesson3-first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile("./lesson3-second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;

    writeFile(
      "lesson3-third-async.txt",
      `Async Writing ${first} ${second}`,
      { flag: "a" },
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
});
