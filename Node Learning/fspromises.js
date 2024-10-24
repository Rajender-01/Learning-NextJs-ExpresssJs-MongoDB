import * as fs from 'fs/promises';
// ? MAKE THE DIRECTORY
try {
  await fs.mkdir("C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir")
} catch (error) {
  console.error(error);
}

try {
  await fs.mkdir("C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir\\NestedDir");
  console.log("Created directory....")
} catch (error) {
  console.error(error);
}

// ? READ THE DIRECTORY
try {
  const files = await fs.readdir("C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir");
  console.log(files);
} catch (error) {
  console.error(error);
}

// ? REMOVE THE DIRECTORY
try {
  await fs.rmdir("C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir");
} catch (error) {
  console.error(error);
}
 

// ? CREATE AND WRITE THE FILE
try {
  await fs.writeFile('readme.txt', 'Hello, world coder!');
} catch (error) {
  console.error(error);
}

// ? READ FILE - RETURN BUFFER
try {
  const data = await fs.readFile('readme.txt');
  console.log('data :>> ', data);
} catch (error) {
  console.error(error);
}

// ? READ FILE - FORMAT THE BUFFER DATA INFO TEXT
try {
  const data = await fs.readFile('readme.txt', 'utf-8');
  console.log('data :>> ', data);
} catch (error) {
  console.error(error);
}

// ? APPEND DATA INTO FILE
try {
  await fs.appendFile('readme.txt', ' welcome to the readme.txt');
} catch (error) {
  console.error(error);
}

// ? COPY FILE
try {
  await fs.copyFile('readme.txt', "C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir\\copy.txt");
} catch (error) {
  console.error(error);
}

// ? GET FILE INFORMATION
try {
  const stats = await fs.stat('readme.txt', "C:\\Users\\RWIT\\Desktop\\Desktop\\Delete\\Node Learning\\testDir\\copy.txt");
  console.log(stats.isDirectory())
  console.log(stats.isFile())
} catch (error) {
  console.error(error);
}

