/**
 * Created by Stefan on 20.7.2017 г..
 */
function move(direction) {
        if(direction == -1){
            let selected = $(":selected");
            selected.insertBefore(selected.prev());
        }
        else if(direction == 1){
        let selected = $(":selected");
        selected.insertAfter(selected.next());
    }
}