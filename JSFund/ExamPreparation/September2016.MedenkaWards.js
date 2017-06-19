/**
 * Created by Stefan on 14.6.2017 г..
 */
function Wars(arr) {
 let vitkorDmgDealt = 0;
 let naskorDmgDealt = 0;

 let vitkorConsAtt = 0;
 let naskorConsAtt = 0;

 let vitkorPrevDmg = -1;
 let naskorPrevDmg = -1;

    for(let row of arr){
        let [times, side] = row.split(' ');

        let count = Number(times);
        if(side == 'white'){
            let dmg = count*60;
            if(dmg==vitkorPrevDmg){
                vitkorConsAtt++;
            }
            else
                vitkorConsAtt=1;

            if(vitkorConsAtt ==2){
                vitkorDmgDealt+= dmg*2.75;
                vitkorPrevDmg = dmg*2.75;
                vitkorConsAtt =0;
            }
            else{
                vitkorDmgDealt+=dmg;
                vitkorPrevDmg= dmg;
            }
        }
        else{
            let dmg = count*60;
            if(dmg==naskorPrevDmg){
                naskorConsAtt++;
            }
            else
                naskorConsAtt=1;

            if(naskorConsAtt ==5){
                naskorDmgDealt+= dmg*4.5;
                naskorPrevDmg = dmg*4.5;
                naskorConsAtt = 1;
            }
            else{
                naskorDmgDealt+=dmg;
                naskorPrevDmg= dmg;
            }
        }
    }


    if(vitkorDmgDealt>naskorDmgDealt){
        console.log("Winner - Vitkor");
        console.log("Damage - "+ vitkorDmgDealt);
    }
    else{
        console.log("Winner - Naskor");
        console.log("Damage - "+ naskorDmgDealt);
    }

}
Wars(
    [
        '2 dark medenkas',
        '1 white medenkas',
        '2 dark medenkas',
        '2 dark medenkas',
        '15 white medenkas',
        '2 dark medenkas',
        '2 dark medenkas'
    ]
)