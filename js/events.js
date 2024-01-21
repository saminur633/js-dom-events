console.log("This is a separate file");


function makered(){
    document.body.style.backgroundColor='red';
}

const makebluebutton = document.getElementById('make-blue');
makebluebutton.onclick = makeblue;
function makeblue(){
   document.body.style.backgroundColor='blue';
}
const purplebutton = document.getElementById('make-purple');
        purplebutton.onclick = function makepurple(){
              document.body.style.backgroundColor='purple';
}
const pinkbutton = document.getElementById('make-pink');
pinkbutton.addEventListener('click', makepink); 
function makepink(){
      document.body.style.backgroundColor='pink';
}
const greenbutton = document.getElementById('make-green');
greenbutton.addEventListener('click', function makegreen(){
    document.body.style.backgroundColor='green';


}); 
// important (we will use this type of click)
document.getElementById('make-orange').addEventListener('click', function makeorange(){
    document.body.style.backgroundColor = 'orange';
});

