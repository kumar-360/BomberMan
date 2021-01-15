let parent=document.querySelector('#container');
let cellCount=1;
for(let i=0;i<9;i++){
    // let divNode=document.createElement('div');
    // document.body.appendChild(divNode);
    for(let j=0;j<9;j++){
        let divNode=document.createElement('div');
        divNode.className='inside';
        divNode.addEventListener('click',addPoints);
        divNode.id='cell_'+cellCount;
        cellCount++;
        parent.appendChild(divNode);
    }
    let x=document.createElement('br');
    parent.appendChild(x);
}
//console.log(Math.floor(Math.random()*81+1));
var random=[];
//arr.push(Math.floor(Math.random()*81+1));
//let count=0;
while(random.length!=10){
    
    //for(let j=0;j<arr.length;j++){
        let x=Math.floor(Math.random()*81+1);
        if(random.indexOf(x)===-1){
            random.push(x);
            //count++;
            //break;
        }
    //}
}
//console.log(random);
let bombs=document.getElementsByClassName('inside');
for(let i=0;i<bombs.length;i++){
    for(let j=0;j<random.length;j++){
        if(bombs[i].id=='cell_'+random[j]){
            bombs[i].classList.add('bomb');
        }
    }
}
let bombsFinal=document.getElementsByClassName('inside bomb');





let score=0;
function addPoints(eventGet){
    if(eventGet.target.className=='inside bomb'){
        for(let i=0;i<bombsFinal.length;i++){
            bombsFinal[i].style.backgroundColor='red';
            bombsFinal[i].style.backgroundImage='url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)';
            // let x=document.createElement('img');
            // x.setAttribute('src','https://img.icons8.com/emoji/48/000000/bomb-emoji.png');
            // bombsFinal[i].appendChild(x);
        }
        for(let i=0;i<bombs.length;i++){
            bombs[i].removeEventListener('click',addPoints);
        }
        document.getElementById('resetButton').style.display='inline-block';
        document.getElementById('resultDisplay').innerHTML='game over';

        return;
    }
    // let images=document.getElementsByTagName('img');
    // for(let i=0;i<images.length;i++){
    //     images[i].style.height='5px';
    //     images[i].style.width='5px';
    // }
    if(eventGet.target.className=='inside'){
        eventGet.target.style.backgroundColor='green';
    }

    if(score<71){
        score++;
        document.getElementById('gameScore').innerHTML='Score: '+score;
        if(score==71){
            document.getElementById('resultDisplay').innerHTML='win';
            //document.getElementById('reset').style.display='inline-block';
            for(let i=0;i<bombs.length;i++){
                bombs[i].removeEventListener('click',addPoints);
            }
            return;
        }
        
    }
    
    eventGet.target.removeEventListener('click',addPoints);
    //console.log(eventGet.target.className);
}
function reset(){
    location.reload();
}


