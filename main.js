let input = document.querySelector('#input');
let elem = document.querySelectorAll('.elem');
let clear = document.querySelector('.AC')
let result = document.querySelector('#result')
let num1 ='';
let num2 ='';
let sign = '';
let res = '';
let value = ['1','2','3','4','5','6','7','8','9','0','.'];
let options = ['+','-','/','x']
clear.addEventListener('click',function(){
    input.value = ''
    num1 = '';
    num2 = '';
    sign = '';
})


for(let i =0;i<elem.length;i++){ 
    elem[i].addEventListener('click',function(){
        
        if(value.includes(this.innerText)){
        if(num1 === '' || sign === '' ){ 
           num1 += this.innerText;
           input.value = num1
          return
        }else
        num2 += this.innerText
        input.value=num2
        console.log(num1,num2,sign)
        
       }

       if(options.includes(this.innerText)){
        sign = this.innerText;
        input.value=sign
        console.log(num1,num2,sign)
        
       }    
       result.addEventListener('click',function(){
      if(this.innerText = "=")
        switch(sign){
          case 'x': res = num1*num2;
          break;
          case '-':res = num1-num2;
          break;
          case '/':res = num1/num2;
          break;
          case '+': res = +num1+ +num2;
          break;
          default:
        }
    input.value = res;
})
})
}




