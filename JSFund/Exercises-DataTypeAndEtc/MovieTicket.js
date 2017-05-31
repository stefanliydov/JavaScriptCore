/**
 * Created by Stefan on 26.5.2017 г..
 */
function movieTickets(arr) {
    let name =arr[0].toLowerCase();
    let day = arr[1].toLowerCase();

switch (name){
    case "the godfather":switch (day){
        case "monday":return 12;
            break;
        case "tuesday":return 10;
            break;
        case "wednesday":return 15;
            break;
        case "thursday":return 12.50;
            break;
        case "friday":return 15;
            break;
        case "saturday":return 25 ;
            break;
        case "sunday":return 30 ;
            break;
        default:return 'error';
    }break;
    case "schindler's list":switch (day){
        case "monday":return 8.50;
            break;
        case "tuesday":return 8.50 ;
            break;
        case "wednesday":return 8.50;
            break;
        case "thursday":return 8.50 ;
            break;
        case "friday":return 8.50;
            break;
        case "saturday":return 15;
            break;
        case "sunday":return 15;
            break;
        default:return 'error';
    }
        break;
    case "casablanca":switch (day){
        case "monday":return 8;
            break;
        case "tuesday":return 8;
            break;
        case "wednesday":return 8;
            break;
        case "thursday":return 8;
            break;
        case "friday":return 8;
            break;
        case "saturday":return 10;
            break;
        case "sunday":return 10;
            break;
        default:return 'error';
    }
        break;
    case "the wizard of oz":switch (day){
        case "monday":return 10;
            break;
        case "tuesday":return 10;
            break;
        case "wednesday":return 10;
            break;
        case "thursday":return 10;
            break;
        case "friday":return 10;
            break;
        case "saturday":return 15;
            break;
        case "sunday":return 15;
            break;
        default:return 'error';
    }
        break;
    default:console.log('error');
    break;




}
}