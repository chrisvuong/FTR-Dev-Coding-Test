import input from './utils/input';
import cmd from './version/cmd';

async function run() {
    var command:any = await input("Press 1 for command line interface, 2 to UI and other to quit: ");
    if(parseInt(command) == 1){
        console.log("Command line interface has started ... ");
        cmd();
    }else if (parseInt(command) == 2){
        // start local host
    }
}
run();
