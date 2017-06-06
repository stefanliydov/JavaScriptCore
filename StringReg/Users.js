/**
 * Created by Stefan on 3.6.2017 г..
 */
function Solve(arr) {
    let userList = [];
    for(let i =0; i<arr.length; i++){

     let email = arr[i];
     let splittedFirst = email.split('@');
        let result = splittedFirst[0]+".";
     let splittedSec = splittedFirst[1].split('.');
     for(let i =0; i<splittedSec.length; i++){
      result+=splittedSec[i][0];
     }
userList.push(result);
    }
    console.log(userList.join(', '));
}
Solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);