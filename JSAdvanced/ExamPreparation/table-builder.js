/**
 * Created by Stefan on 20.7.2017 г..
 */
function tableBuilder(selector) {
        let container = $(selector);
        function createTable(columnName) {
            container.empty();
            let table = $('<table>');
            let tr = $('<tr>');
            for(let col of columnName){
                let tableHeader = $('<th>');
                tableHeader.text(col);
                tr.append(tableHeader);
            }
                let action = $('<th>Action</th>');
            tr.append(action);
            table.append(tr);
            container.append(table)
        }
        function fillData(rowArr) {
            let table = $(`${selector} table`);
            for(let row of rowArr){
               let tableRow= $("<tr>");
                for(let element of row){
                    let currEl = $('<td>')
                        .text(element);
                    tableRow.append(currEl);
                }
                let btn = $('<td>')
                    .append($(`<button>Delete</button>`)
                        .click(function () {
                          $(this).parent().parent().remove();
                        })
                    );
                tableRow.append(btn);
                table.append(tableRow);
            }
        }
        return{
            createTable,
            fillData
}
}