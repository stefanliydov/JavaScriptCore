/**
 * Created by Stefan on 12.7.2017 г..
 */
class Request {
    constructor(method, uri, version, message){
        this.method=method;
        this.uri =uri;
        this.version= version;
        this.message= message;
        this.response= undefined;
        this.fulfilled = false;
    }


}