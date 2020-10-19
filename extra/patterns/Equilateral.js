function equilateral(rows){
    let s="";
    let pyramid="";
    for(let i=1; i<=rows; i++){
        for(let j=rows;j>=i;j--){
            s=s+"  ";
        }
        for(let k=1;k<=i; k++){
            s=s+" *  "
        }
        pyramid=pyramid+"\n"+s;
        s="";
    }
console.log(pyramid);
}
equilateral(process.argv[2]);
