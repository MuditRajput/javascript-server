function diamond(Num){
    let s="";
    let j=Num;
    for(let i=1; i<=Num; i++){
    s="  ".repeat(j);
    console.log(s," *  ".repeat(i));
    s="";
    j--;
    }
    j=1;
    for(i=Num; i>=1; i--){
    s="  ".repeat(j);
    console.log(s," *  ".repeat(i));
    s="";
    j++;
    }
}

diamond(process.argv[2]);
