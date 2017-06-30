/**
 * Created by Stefan on 28.6.2017 г..
 */
function attachEvent() {
    $('#items li').click(select);


    function select() {
        let li = $(this);
        if(li.attr('data-selected')){
            li.removeAttr('data-selected');
            li.css("background", "");
        }
        else{
            li.attr('data-selected', 'true');
            li.css('background','#DDD');
        }
    }

}