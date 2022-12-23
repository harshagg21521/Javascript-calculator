function display(num){
    document.getElementById('textarea').value+=num;
}
function calculate(){
    var value=document.getElementById('textarea').value;
    var ans=eval(value);
    document.getElementById('textarea').value=ans;
}
function clr(){
    document.getElementById('textarea').value='';
}