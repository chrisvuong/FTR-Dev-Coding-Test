import * as readline from 'readline';


var input = (prompt:string ) => new Promise(resolve =>{ 
    let rl = readline.createInterface(
        {
            input:process.stdin,
            output:process.stdout
        }
    );
    rl.question(prompt, time => {
        resolve(time);
        rl.close();
    }) ;
});

export default input;