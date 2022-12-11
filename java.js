const divcontainer=document.querySelector('#message');
let isClicked = true;
function sayhello(){
    alert("clicked");
    if(isClicked)
    {
    divcontainer.style.display='inline';
    isClicked = false;
    }else{
        divcontainer.style.display='none';
        isClicked = true;
    }
}

               