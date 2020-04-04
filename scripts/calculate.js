function mapping(x,y,sym){
    if(sym=='+'){
        return x+y;
    }else if(sym == 'x'){
        return math.multiply(x, y)
    }
}
function yroot(x,y){
    return   x + '^' + y 
}
var app= new Vue({
    el:'#app',
    data:{
        previous: "",
        first:"",
        symbol: "",
        answer: 0,
        demo: 0,
        memory:0
    },
    computed:{
        compute(){ return this.first + ' '}
    },
    methods:{
        zero(){
            this.first +='0';
            this.previous +='0';
        },one(){
            this.first += '1';
            this.previous += '1';
        },two(){
            this.first += '2';
            this.previous += '2';
        },three(){
            this.first += '3';
            this.previous += '3';
        },four(){
            this.first += '4';
            this.previous += '4';
        },five(){
            this.first += '5';
            this.previous += '5';
        },six(){
            this.first += '6';
            this.previous += '6';
        },seven(){
            this.first += '7';
            this.previous += '7';
        },eight(){
            this.first += '8';
            this.previous += '8';
        },nine(){
            this.first += '9';
            this.previous +='9';
        },
        plus(){
           this.symbol='+'
            this.first += '+';  
            this.previous+='+';
            
        },multiply(){
            this.first += 'x';
            this.previous+='*';
        },minus(){
            this.first += '-';
            this.previous += '-';
            this.symbol= '-'
        },divide(){
            this.first +='/';
            this.previous +='/';
            this.symbol
        },mod(){
            this.first +=' Mod ';
            this.previous +='Mod';
            this.symbol += 'M'
        },log(){
            this.first += 'log ';
            this.previous += 'log';
        },ln(){
            this.first += 'ln ';
            this.previous += 'ln';
        },cos(){
            var angle = this.previous;
            var str = 'cos('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        },sine(){
            var angle = this.previous;
            var str = 'sin('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        },tan(){
            var angle = this.previous;
            var str = 'tan('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        
        },asin(){
            var angle = this.previous;
            var str = 'asin('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        },acos(){
            var angle = this.previous;
            var str = 'acos('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        },atan(){
            var angle = this.previous;
            var str = 'atan('+ angle +')';
            this.first = str;
            this.previous = str;
            this.answer= mexp.eval(str);
        },x2(){
            this.first += '^2';
            this.previous += '^2';
            this.answer = mexp.eval(this.previous);
        },xy(){
            this.first += '^';
            this.previous += '^';
        },x3(){
            this.first += '^3';
            this.previous += '^3';
            this.answer = mexp.eval(this.previous);
        },x1y(){
            var str = '^1/';
            this.symbol = 'sp'
            this.first += str;
            this.previous = ''      
        },x12(){
            this.first += '^1/2';
            this.previous += '^'+1/2;
            this.answer = mexp.eval(this.previous);
        },antilog(){
            this.first = '10^' + this.previous;
            this.previous = this.first;
            this.answer = mexp.eval(this.previous);
        },dot(){
            this.first += '.';
            this.previous += '.';
        },inverse(){
            this.first = '1/'+ this.previous;
            this.answer = 1/parseInt(this.previous);
            this.previous = this.first;
        },exp(){
            this.first = 'e^'+this.previous;
            this.previous = this.first
            this.answer = mexp.eval(this.previous);
         
        },pi(){
            if(this.previous==''){
                this.answer = 1;
            }else if(this.answer==this.previous){
                this.answer = this.previous;
            }else{
                this.answer = this.previous
            }
            this.first = '3.141592653589793238462643*'+this.answer;
            this.previous = this.first;
            this.answer = mexp.eval(this.previous);
        },factorial(){
            var i;
            var n = parseInt(this.previous);
            for(i=1;i<n;i++){
                this.previous += '*'+(n-i);
            }
            this.answer = mexp.eval(this.previous);
        },openB(){
            this.first += '(';
            this.previous += '(';
        },closeB(){
            this.first += ')';
            this.previous += ')';
        },plusminus(){
        if(this.previous.charAt(0)=='-'){
              this.previous = this.previous.substring(1,this.previous.length)
              this.first = this.previous
              this.answer = this.previous;
          }else if(this.previous.length==1){
              this.previous = '-'+this.previous;
              this.first = this.previous
          }
          else{
            this.previous += '-';
            this.first = this.previous
          }
        },equal(){
            if(this.symbol =='sp'){
                this.previous = yroot(this.first.split("^")[0],parseFloat(1/parseInt(this.previous)))
                console.log(this.previous)
            }
           this.answer = mexp.eval(this.previous);
           this.first = this.answer
           this.previous = this.answer.toString()
            
        },ac(){
            this.first='';
            this.previous='';
            this.demo=0;
            this.answer=0;
        },backspace(){
            if(this.symbol == 'M'){
                this.previous = this.previous.substring(0,this.previous.length -3)
                this.first = this.first.substring(0,this.first.length-5);
            }else{
            this.first = this.first.substring(0,this.first.length-1);
            this.previous = this.previous.substring(0,this.previous.length -1)
            }
        },reload(){
            location.reload();
        },deg(){
            if(this.answer==0){
                this.answer = this.previous
            }
            this.answer = (this.answer*180)/3.141592653589793238462643;
        },rad(){
            if(this.answer==0){
                this.answer = this.previous
            }
            this.answer = (this.answer*3.141592653589793238462643)/180;

        }
    }
})