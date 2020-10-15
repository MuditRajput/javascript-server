function equilateral(Num){
    let s="";
    let j=Num;
    for(let i=1; i<=Num; i++){
        s="  ".repeat(j);
    console.log(s," *  ".repeat(i));
    s="";
    j--;
}
}

equilateral(process.argv[2]);