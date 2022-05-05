const fs = require('fs');
let filesWithDraftPath = 'C:\\users\\juan1\\Desktop\\javascript';
let alreadyDownloadedExercisesPath = 'C:\\works\\Exercism\\Exercism-Solutions\\javascript';
let filesWithDraft = fs.readdirSync(filesWithDraftPath);

filesWithDraft.forEach(file => {
    let jsDraftFiles = fs.readdirSync(`${filesWithDraftPath}\\${file}`).filter(name => name != `${file}.js`);
    
    if (jsDraftFiles.length > 0) {
        jsDraftFiles.forEach(draftFile => {
            let dataFromFile = fs.readFileSync(`${filesWithDraftPath}\\${file}\\${draftFile}`, 'utf8', (err, data) => {
                if (err) throw err;
            })
            
            let pathForWriteDraft = `${alreadyDownloadedExercisesPath}\\${file}`

            fs.writeFileSync(`${pathForWriteDraft}\\${draftFile}.js`, dataFromFile, err => {
                if (err) throw err;
            })
            console.log(`${draftFile} was successfully written on: ${pathForWriteDraft}`)
        })
    }
})