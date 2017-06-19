function main(arr) {
    arr =arr.filter(e => e!='');
    let register = new Set();
    let subscriptions = new Map();
    let peopleSubTo = new Map();
    for(let i in arr) {
        if (arr[i].length == 1)
            register.add(arr[i]);
        else {
            let [firstPerson, secondPerson] = arr[i].split('-');
            if (register.has(firstPerson) && register.has(secondPerson) && firstPerson != secondPerson) {
                if (!subscriptions.has(secondPerson)) {
                    subscriptions.set(secondPerson, new Set());
                }

                    subscriptions.get(secondPerson).add(firstPerson);
                if (!peopleSubTo.has(firstPerson)) {
                    peopleSubTo.set(firstPerson, 0);
                }

                peopleSubTo.set(firstPerson, peopleSubTo.get(firstPerson)+1);

            }
        }
    }
    let count =1;
    let desiredRow = [...subscriptions.entries()].sort((a, b) => {
        let resultCode = b[1].size - a[1].size;

        if(resultCode === 0){
            let secCriteria = peopleSubTo.get(b[0]) - peopleSubTo.get(a[0]);
            return secCriteria;
        }
        else
            return resultCode;
    })[0];

    console.log(desiredRow[0]);
   let array = [...desiredRow[1]]

    for (let i = 0; i <array.length; i++) {
               console.log(`${count}. ${array[i]}`);
               count++;
           }

}
main([
    'A',
    'B',
    'C',
    'A-B',
    'B-A',
    'A-C ']
)