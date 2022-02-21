

const pickerOpts = {
       types: [
              {
                     description: 'Audio',
                     accept: {
                            'audio/*': ['.mp3']
                     }
              },
       ],
       excludeAcceptAllOption: true,
       multiple: false
};

let fileHandle;

/**
 * File class
 * @param fileHandle
 */
class File {

       constructor() {
       }

       static async openFile() {
              // open file picker
              [fileHandle] = await window.showOpenFilePicker(pickerOpts);

              // get file contents
              const file = await fileHandle.getFile();
              const url = URL.createObjectURL(file);
              music.src = url;
              music.play();
              document.title = file.name;
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

btnStart.addEventListener("click", async function () {
       await File.saveFile();
       alert("save");
});

btnStop.addEventListener("click", async function () {
       await File.saveAsFile();
       alert("save");
});

