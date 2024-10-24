// FILE SYSTEM - CALLbBACK API
import * as fs from 'fs';

// ? CREATE THE DIRECTORY
fs.mkdir('D:\\Learning\\New\\Learning-NextJs-ExpresssJs-MongoDB\\Node Learning\\test', (error) => {
  if (error) throw error;
  console.log("Directory creation");
});

// ? READ CONTENT FROM THE DIRECTORY
fs.readdir('D:\\Learning\\New\\Learning-NextJs-ExpresssJs-MongoDB\\Node Learning\\test', (error, files) => {
  if (error) throw error;
  for (const file of files)
  console.log(file);
});

// ? READ CONTENT FROM THE DIERCTORY
fs.rmdir('D:\\Learning\\New\\Learning-NextJs-ExpresssJs-MongoDB\\Node Learning\\test', (error, files) => {
  if (error) throw error;
  console.log("Remove directory");
});

// ? WRITE CONTENT FROM THE DIRECTORY
fs.writeFile('readme.txt', 'Hello Callback', (error, files) => {
  if (error) throw error;
  console.log("File Created");
});

// ? READ CONTENT FROM THE DIRECTORY - BUFFER DATA
fs.readFile('readme.txt', (error, data) => {
  if (error) throw error;
  console.log(data);
});

// ? READ CONTENT FROM THE DIRECTORY - BUFFER DATA TO STRING
fs.readFile('readme.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});

// ? APPEND CONTENT TO THE FILE
fs.appendFile('readme.txt', 'HELLO', (error) => {
  if (error) throw error;
});

// ? COPY FILE
fs.copyFile('readme.txt', 'info.txt', (error) => {
  if (error) throw error;
});

// ? GET FILE INFORMATION
fs.stat('readme.txt', (error, stats) => {
  if (error) throw error;
  console.log('stats', stats.isDirectory());
  console.log('stats', stats.isFile());
});


// ? AND IN THE ASYNC API - WE JUST HAVE TO ADD THE async as a post prefix
fs.mkdirSync('D:\\Learning\\New\\Learning-NextJs-ExpresssJs-MongoDB\\Node Learning\\test')