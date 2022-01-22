**_ Instructions (Dylan) _**

- Download Repo
- Within the VSCode Terminal run command "npm install" and "npm install -S node-addon-api" in that order
- Once dependencies are installed, you are free to modify the code however you like.

**_ Suggestions _**

- If you'd like to try putting custom code (your recent code) into the src folder, you will need to make the corresponding changes in the binding.gyp JSON file (target_name, sources)

  1. Target_name is the name of the dll file that will be created after
  2. Sources are the file names (currently greeting.cpp and index.cpp)

- After adding your c++ / header files and modifying binding.gyp, go ahead and pull up these urls: {"https://nodejs.org/api/n-api.html", "https://medium.com/jspoint/a-simple-guide-to-load-c-c-code-into-node-js-javascript-applications-3fcccf54fd32"} for documentation on communicating with the NAPI. It looks like c++ with namespace NAPI from what I'm seeing.
  Ex: NAPI::String greetHello()...

- Afterwards, go ahead and run the command "node-gyp configure" to create a build folder with boilerplate code. Included in the directory is a subdirectory called "Release" with your dll appended .node file which you can use in the ./electron-react-demo/index.js file to log to the console whatever you would like. Be sure to include the new dll in the index.js file

- Finally, to run the index.js file, you will need to run the command "node index.js"

- That should be all. Please, let me know if you have any questions. I will do my best to continue my research to help you communicate with the application effectively.

**_ Happy Coding 😄❗ _**
