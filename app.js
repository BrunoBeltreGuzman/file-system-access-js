
/**
 * File class
 * @param fileHandle
 */

let fileHandle;

class File {

       constructor() {
       }

       static async openFile() {
              // open file picker
              [fileHandle] = await window.showOpenFilePicker();

              // get file contents
              const fileData = await fileHandle.getFile();
              const textFile = await fileData.text();
              textarea.innerText = textFile;
       }

       static async saveFile() {
              const stream = await fileHandle.createWritable();
              await stream.write(textarea.innerText);
              await stream.close();
       }

       static async saveAsFile() {
              fileHandle = await window.showSaveFilePicker();
              const stream = await fileHandle.createWritable();
              await stream.write(textarea.innerText);
              await stream.close();
       }
}

/**
 * Add Event
 */
btnOpen.addEventListener("click", async function () {
       await File.openFile();
});

btnSave.addEventListener("click", async function () {
       await File.saveFile();
       alert("save");
});

btnSaveAs.addEventListener("click", async function () {
       await File.saveAsFile();
       alert("save");
});

