const Fibbonaci = [0,1];
function isFib(n:number){
    return Fibbonaci.includes(n);
}
function createFib(){
    while(Fibbonaci.length<1000){
        Fibbonaci.push(Fibbonaci[Fibbonaci.length-1]+ Fibbonaci[Fibbonaci.length-2]);
    }
    return isFib;
}
export default createFib;