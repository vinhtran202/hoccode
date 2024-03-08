const table=document.querySelector('.table');
var row, rowCount=0;
for(var i=1; i<=64;i++) {
    if(i%8==1){
        rowCount++;

        row=document.createElement('div');
        row.className='row';

        table.appendChild(row);
    }

    var square=document.createElement('div');
    square.className='square';

    if((rowCount%2==0 && i%2==0) || (rowCount%2!=0 && i%2!=0)){
        square.style.backgroundColor='#fff'
    }
    else {
        square.style.backgroundColor='#000'

    }
    row.appendChild(square);
}
