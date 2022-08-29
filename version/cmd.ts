import { exit } from "process";
import input from "../utils/input";

var state ={} ;
var t:any = 1000;
var halt:boolean = false;
var timeOut:any;
function getState(){
    var values =  Object.values(state);
    values = Array.from(new Set<any>(values));
    values.sort();
    values.reverse();
    var keys = Object.keys(state);
    var result = [];
    values.forEach(v=>{
        keys.forEach(k=>{
            if(state[k]== v){
                result = [...result, `${k}:${v}`];
            }
        });
    });
    if (result.length != 0)
        console.log(">> "+result.join(','));
    if(!halt) timeOut = setTimeout(getState, parseInt(t)*1000);
}

async function cmd(){
    t = await input(">> Please input the number of time in seconds between emitting numbers and their frequency \n");
    timeOut = setTimeout(getState, parseInt(t)*1000);
    var loop = true;
    var current:any = await input(">> Please enter the first number\n");
    while(loop){     
        if(parseInt(current)){
            var currentInt:number = parseInt(current) ;
            state[currentInt] = (state[currentInt] || 0) +1;
        }
        if(current == "halt"){
            halt = true;
            console.log(">> timer halted");
            clearTimeout(timeOut);

        }
        if(current == "resume"){
            halt = false;
            console.log(">> timer resumed");
            timeOut =setTimeout(getState, parseInt(t)*1000);
        }
        current = await input(">> Please enter the next number\n");
        loop = current != "quit";
    }
    clearTimeout(timeOut);
    halt = true;
    getState();
    console.log(">> Thank for playing, press any key to exit.")
    await input("");
    exit(0);
}

export default cmd;