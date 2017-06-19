function main(arr) {

    let modulePattern = /^\$app='(.+)'$/g;
    let controllerPattern = /^\$controller='(.+)'&app='(.+)'$/g;
    let modelPattern = /^\$model='(.+)'&app='(.+)'$/g;
    let viewPattern = /^\$view='(.+)'&app='(.+)'$/g;

    let data = new Map();
    let cacheData = new Map();

    for(let i =0; i<arr.length; i++){
        let currInputLine = arr[i];

        let moduleMatch  = modulePattern.exec(currInputLine);
        let controllerMatch  = controllerPattern.exec(currInputLine);
        let modelMatch  = modelPattern.exec(currInputLine);
        let viewMatch  = viewPattern.exec(currInputLine);

        if(moduleMatch){
            let modulName = moduleMatch[1]
            data.set(modulName, new Map());
        }
        else if( controllerMatch){
            let controllerName = controllerMatch[1];
            let modulName = controllerMatch[2];

            if(data.has(modulName)){
                if(!data.get(modulName).has("controllers")){
                    data.get(modulName).set("controller", {})
                }
                data.get(modulName).get("controllers").push(controllerName);

            }

        }
        else if( modelMatch){
            let modelName = modelMatch[1];

        }
        else if( viewMatch){

        }
    }


}
main([ '$app=\'MyApp\'',
    '$controller=\'My Controller\'&app=\'MyApp\'',
    '$model=\'My Model\'&app=\'MyApp\'',
    '$view=\'My View\'&app=\'MyApp\'',
    '' ]
)