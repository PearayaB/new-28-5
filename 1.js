document.getElementById('ok').addEventListener('click', function(e)
{
    alert('ok')
    console.log(e)
})
document.getElementById('cancle').addEventListener('click', function(e)
{
    alert('cancel')
    console.log(e)
})
document.getElementById('no').addEventListener('click', function(e)
{
    alert('no')
    console.log(e)
})

document.getElementById('cancle').addEventListener('mousemove',function(c){
   var x = c.client;
   var y = c.client;
   console.log('x:'+x+','+'y:'+y)
}
)

document.getElementById('ok').addEventListener('mousemove',function(c){
    var x = c.client;
    var y = c.client;
    console.log('x:'+x+','+'y:'+y)
 }
 )

 document.getElementById('no').addEventListener('mousemove',function(c){
    var x = c.client;
    var y = c.client;
    console.log('x:'+x+','+'y:'+y)
 }
 )