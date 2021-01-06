function extractFile(str) {

    let lastDot = str.lastIndexOf('.');
    let lastSlash = str.lastIndexOf('\\')
    let name = str.substring(lastSlash+1, lastDot)
    let extension = str.substring(lastDot + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')

// function extractFile(str) {

//     let regex = /(?<file>\\\w+(\.[\w]+)?)(?<ex>\.[\w]+)/g;
//     let match = regex.exec(str)
//     console.log(`File name: ${match.groups.file.substring(1)}`);
//     console.log(`File extension: ${match.groups.ex.substring(1)}`);
// }

// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs.cs')