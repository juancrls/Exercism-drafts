import fs from 'fs';
let exercismPath = 'C:\\Users\\juan1\\Exercism\\javascript';

fs.readdir(exercismPath, (err, exercises) => {
    fs.mkdir('javascript', error => {
        if(error) console.log(error)
    })
    
    exercises.forEach(exercise => {
        let newExercismPath = `javascript/${exercise}`

        fs.mkdir(newExercismPath, error => {
            if(error) console.log(error)
        })

        fs.readdir(`${exercismPath}\\${exercise}`, (err, files) => {
            files = files.filter(f => {
                if(/.js$/.test(f) && f !== 'babel.config.js' && !/.spec.js$/.test(f)) {
                    return true
                }
                return false;
            })

            files.forEach(file => {
                fs.readFile(`${exercismPath}\\${exercise}\\${file}`, 'utf8', (err, data) => {
                    
                    let d = data
                    // console.log(d)

                    fs.writeFile(`${newExercismPath}\\${file}`, d, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });
                    // console.log(`${exercismPath}\\${exercise}\\${file}`)
                    // console.log(data)
                })

            })
        })
    })
    
});

