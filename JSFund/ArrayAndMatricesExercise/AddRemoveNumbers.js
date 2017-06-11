/**
 * Created by Stefan on 1.6.2017 г..
 */
function AddRemove(arrCom) {
 let result = [];
 let count  =1;

 for(let i =0; i<=arrCom.length-1; i++){
     result = AddRem(arrCom[i], result,count);
     count++

 }
 function AddRem(command,arr,count) {
     switch (command){
         case "add": arr.push(count);break;
         case "remove": arr.pop();break;
     }
     return arr;
 }
 if(result.length>0){
     return result.join("\n");
 }
 else
     return "Empty";
}
