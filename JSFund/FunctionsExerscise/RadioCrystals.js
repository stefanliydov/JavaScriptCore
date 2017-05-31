/**
 * Created by Stefan on 31.5.2017 г..
 */
function RadioCrystals(arr){
    "use strict";
    let goal = arr[0];
    
    function CutCrystal(goal ,crystal) {
        console.log(`Processing chunk ${crystal} microns`);
        let count = 0;
        //Cut
        while (true){
            if(crystal/4 >= goal ){
                crystal/=4;
                count++;
            }
            else
                break;
        }
        crystal = Math.floor(crystal);
        if(crystal == goal){
            return console.log(`Cut x${count}\nTransporting and washing\nFinished crystal ${crystal} microns`);
        }
        else if(crystal+1 == goal){
            crystal++;
           return console.log(`Cut x${count}\nTransporting and washing\nX-ray x1\nFinished crystal ${crystal} microns`);

        }

            console.log(`Cut x${count}\nTransporting and washing`);

        count=0;

        //Lap
        while(true){
            if(crystal*0.80 >= goal){
                crystal*=0.80;
                count++;
            }
            else break;
        }
        crystal = Math.floor(crystal);
         if(crystal==goal){
             return console.log(`Lap x${count}\nTransporting and washing\nFinished crystal ${crystal} microns`);
         }
         else if(crystal+1 == goal){
             crystal++;
             return console.log(`Lap x${count}\nTransporting and washing\nX-ray x1\nFinished crystal ${crystal} microns`);

         }
            console.log(`Lap x${count}\nTransporting and washing`);
         count =0;
         //Grind
        while(true){
            if(crystal-20 >=goal){
                crystal-=20;
                count++;
            }
            else break;
        }
        crystal = Math.floor(crystal);
        if(crystal==goal){
            return console.log(`Grind x${count}\nTransporting and washing\nFinished crystal ${crystal} microns`);
        }
        else if(crystal+1 == goal){
            crystal++;
            return console.log(`Grind x${count}\nTransporting and washing\nX-ray x1\nFinished crystal ${crystal} microns`);

        }
            console.log(`Grind x${count}\nTransporting and washing`);
        count=0;

        //Etch
        while(true){
            if(crystal-1 >= goal){
                crystal-=2;
                count++;
            }

            else break;
        }
        crystal = Math.floor(crystal);
        if(crystal==goal){
            return console.log(`Etch x${count}\nTransporting and washing\nFinished crystal ${crystal} microns`);
        }
        else if(crystal+1 == goal){
            crystal++;
            return console.log(`Etch x${count}\nTransporting and washing\nX-ray x1\nFinished crystal ${crystal} microns`);

        }


    }
    
    
    
    for(let i =1; i<=arr.length -1; i++){
        if(goal<arr[i])
        CutCrystal(goal, arr[i]);
        else if(goal==arr[i])
            console.log(`Processing chunk ${arr[i]} microns\nFinished crystal ${arr[i]} microns`)
    }
    
    
}
RadioCrystals([1375, 50000]);