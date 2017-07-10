/**
 * Created by Stefan on 8.7.2017 г..
 */
function validateRequest(obj) {
        if(!((/^(GET|POST|DELETE|CONNECT)$/g).test(obj.method))||!(obj.hasOwnProperty("method"))){

           throw new Error("Invalid request header: Invalid Method");
        }
        if(!(/[A-Za-z0-9.]+/g).test(obj.uri)||!(obj.hasOwnProperty("uri"))){
            throw new Error("Invalid request header: Invalid URI");
        }
        if(!(/^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/g).test(obj.version)){
            throw new Error("Invalid request header: Invalid Version");
        }
        if(!((/([^<>\\&\'\"])*/g).test(obj.message))||!(obj.hasOwnProperty("message"))){
            throw new Error("Invalid request header: Invalid Message");
        }

    return obj;
}



let obj = {
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
};
validateRequest(obj)

