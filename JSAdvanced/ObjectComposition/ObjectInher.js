function solve(arr) {


    let objects = new Map();
    let inheritor = (function () {

        function create(name,param, parent) {
            if(param) inherit(name, parent);
            else objects.set(name, {});
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(objName, propName, value) {
            objects.get(objName)[propName] = value;
        }

        function print(name) {
            let curr = objects.get(name);

            let props = [];
            for (let prop in curr) {
                props.push(`${prop}:${curr[prop]}`);
            }
            console.log(props.join(', '));
        }
        return{
            create,
            inherit,
            set,
            print
        }
    }());

    for(let cmd of arr){
        let [command, name, param, value] = cmd.split(' ');
        inheritor[command](name, param, value);
    }
}


(solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
));