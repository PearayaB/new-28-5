// document.getElementById('ok').addEventListener('click', function(e)
//{
 //   alert('ok')
 //   console.log(e)
//})
//document.getElementById('cancle').addEventListener('click', function(e)
//{
 //   alert('cancel')
 //   console.log(e)
//})
//document.getElementById('no').addEventListener('click', function(e)
//{
 //   alert('no')
 //   console.log(e)
//})

//document.getElementById('cancle').addEventListener('mousemove',function(c){
  // var x = c.client;
  // var y = c.client;
 //  console.log('x:'+x+','+'y:'+y)
//}
//)

//document.getElementById('ok').addEventListener('mousemove',function(c){
 //   var x = c.client;
 //   var y = c.client;
 //   console.log('x:'+x+','+'y:'+y)
 //}
 //)

 //document.getElementById('no').addEventListener('mousemove',function(c){
  //  var x = c.client;
  //  var y = c.client;
  //  console.log('x:'+x+','+'y:'+y)
 //}
 //)
 
 var sum = 5
document.getElementById('ok').addEventListener('click', function(e) {

 document.getElementById('cancel').style.marginLeft = `${sum}px `
 document.getElementById('cancel').style.marginRight = `${sum}px `
 document.getElementById('no').style.marginRight = `${sum}px `
 document.getElementById('no').style.marginLeft = `${sum}px `
 sum = sum + 10;
})


var num = 1

document.getElementById('no').addEventListener('dblclick', function(e) {
     alert("Doubleclick ครั้งที่ " + num);
     var c1 = 'วิชานี้'
     var c2 = 'ง่าย'
     var c3 = 'จริงๆ นะ'
     if (num == 1) {
         text = c1
         num++
     } else if (num == 2) {
         text = c2
         num++
     } else if (num == 3) {
         text = c3
         num = 1
     }
     document.getElementById('ok').innerHTML = text
 })
 cancelElement.addEventListener('mouseleave', function(e) {
    cancelElement.innerHTML = `cancel`
})