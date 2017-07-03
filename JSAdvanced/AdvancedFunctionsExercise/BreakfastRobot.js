function solution() {
   let robot = {
       protein: 0,
       carbohydrate: 0,
       fat: 0,
       flavour:0
   };

   let products ={
        apple:{
            carbohydrate:1,
            flavour:2
        },
        coke:{
            carbohydrate:10,
            flavour:20
        },
       burger:{

           carbohydrate:5,
           fat:7,
           flavour:3
       },
       omelet:{
           protein:5,
           fat:1,
           flavour:1
       },
       cheverme:{
            protein:10,
           carbohydrate:10,
           fat:10,
           flavour:10
       }
   };

    return function (str) {
        let [command, ingredient, quantity] = str.split(' ');
        quantity =Number(quantity);
        if(command === "restock"){
            robot[ingredient]+= quantity;
            return "Success";
        }
        else if(command === "report"){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour} `;

        }
        else if(command === "prepare"){
        let currProduct = products[ingredient];
        let canBeCooked = true;
        let notEnoughIngr = "";
        let count = 0;
            for(let microElement in currProduct){
                if(robot[microElement]< currProduct[microElement]*quantity){
                    canBeCooked = false;
                    if(count === 0) {
                        notEnoughIngr = microElement;
                    }
                    count++
                }
            }
            if(canBeCooked == true){
                for(let microElement in currProduct){
                    robot[microElement] = robot[microElement] - currProduct[microElement]*quantity
                }
                return "Success";
            }
            else
                return`Error: not enough ${notEnoughIngr} in stock`
        }
    }

}
solution("prepare cheverme 1")
solution("restock protein 10")
solution("prepare cheverme 1")
solution("restock carbohydrate 10")
solution("prepare cheverme 1")
solution("restock fat 10")
solution("prepare cheverme 1")
solution("restock flavour 10")
solution("prepare cheverme 1")
solution("report")
