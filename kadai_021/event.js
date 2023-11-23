const btn = document.getElementById('btn');


function textContent(){
  setTimeout( function(){
  document.getElementById('text').textContent ='ボタンをクリックしました';
} , 2000);
}
document.getElementById('btn').addEventListener('click',textContent)


