function main(input){
    "use strict";
        let overValidCheck = /^<message\s([\w\W\n]+?)<\/message>$/g;
        let toCheck = /^<message.+?\bto="([a-zA-Z\s.]+)"+/g;
        let fromCheck = /^<message.+?from="([a-zA-Z\s.]+)"+/g;
        let messageCheck = />([\w\W\n]+?)<\/message>$/g
        let anotherCheck = /^<message(\s[\w\W\n]+?)>[\w\W\n]+?<\/message>$/g;



    if(!input.match(overValidCheck)){
        return console.log("Invalid message format");
        }
    let checked = anotherCheck.exec(input);


       let arr = checked[1].split(/ +(?=[\w]+:)/g);
        for(let att of arr){
            if(!att.match(/[a-z]+="[a-zA-Z0-9.\s]+"/g)){
                return console.log("Invalid message format");
            }
    }


        if((!input.match(toCheck)) ||(!input.match(fromCheck))){
            return console.log("Missing attributes");
        }
        console.log("<article>");
        let toMatch = toCheck.exec(input);
    let fromMatch = fromCheck.exec(input);
        console.log(`  <div>From: <span class="sender">${fromMatch[1]}</span></div>`);

        console.log(`  <div>To: <span class="recipient">${toMatch[1]}</span></div>`);
        console.log(`  <div>`);

        let messageMatch = messageCheck.exec(input);
    let message = messageMatch[1].split(/\n/);
    for(let line of message){
        console.log(`    <p>${line}</p>`);

    }

    console.log(`  </div>`);
    console.log("</article>");

}
main(`<message mailto="everyone" from="Grandma" to="Everyone">FWD: FWD: FWD: FWD: Forwards from grandma</message>`);