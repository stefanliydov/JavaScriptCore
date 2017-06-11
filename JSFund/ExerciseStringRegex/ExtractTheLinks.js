/**
 * Created by Stefan on 7.6.2017 г..
 */
function Extract(arr) {
    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    let linkArray = [];

    for(let sen of arr){

        let result = regex.exec(sen);
        while (result !=null){
            let match =result[0];
            linkArray.push(match);
            result = regex.exec(sen)

        }

    }
    linkArray.forEach(x => console.log(x));
}
Extract([`Need information about cheap hotels in London?`,`You can check us at www.london-hotels.co.uk!`,`We provide the best services in London.`,`Here are some reviews in some blogs:`,`"London Hotels are awesome!" - www.indigo.bloggers.com`,`"I am very satisfied with their services" - ww.ivan.bg`,`"Best Hotel Services!" - www.rebel21.sedecrem.moc `]);