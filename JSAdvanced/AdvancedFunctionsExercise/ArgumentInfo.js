function result() {
    let summary = {};
   for(let  i =0; i< arguments.length; i++){
       let obj = arguments[i];
       let type = typeof obj;
       console.log(`${type} = ${obj}`);
       if(!summary[type]){
           summary[type]=1;
       }else{
           summary[type]++;
       }
   }
   let sortedType = [];
   for(let el in summary) {
       sortedType.push([el, summary[el]]);
   }
   sortedType= sortedType.sort((a,b) => b[1] - a[1] );
    for(let i =0; i<sortedType.length; i++){
   console.log(`${sortedType[i][0]} = ${sortedType[i][1]}`);
    }
}
result('cat', 42, function () { console.log('Hello world!'); });