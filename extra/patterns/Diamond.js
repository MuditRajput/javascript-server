function diamond(rows){
    let s="";
    let diamond="";
    for(let i=1; i<=rows*2; i++){
        if(i<=rows){
            s="  "
            for(let j=rows;j>=i;j--){
                s=s+"  ";
            }   
            for(let k=1;k<=i; k++){
                s=s+" *  "
            }
            diamond+="\n"+s;
        } 
        else{
            s="";
            for(let j=rows;j<=i;j++){
                s=s+"  ";
            }
        
            for(let k=rows*2;k>=i; k--){
                s=s+" *  "
            }
            diamond+="\n"+s;
        }
        s="";
    }
console.log(diamond);
}
diamond(process.argv[2]);
