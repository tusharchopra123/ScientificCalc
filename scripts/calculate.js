function mapping(x,y,sym){
    if(sym=='+'){
        return x+y;
    }else if(sym == 'x'){
        return math.multiply(x, y)
    }
}
var flag="0"
function yroot(x,y){
    return   x + '^' + y 
}
function myfunction(event){
    console.log(event.keyCode)
    if(48==event.keyCode){
        document.getElementById("prev").innerText += 0
    }else if(49==event.keyCode){
        document.getElementById("prev").innerText += 1
    }else if(50==event.keyCode){
        document.getElementById("prev").innerText += 2
    }else if(51==event.keyCode){
        document.getElementById("prev").innerText += 3 
    }else if(52==event.keyCode){
        document.getElementById("prev").innerText += 4
    }else if(53==event.keyCode){
        document.getElementById("prev").innerText += 5
    }else if(54==event.keyCode){
        document.getElementById("prev").innerText += 6
    }else if(55==event.keyCode){
        document.getElementById("prev").innerText += 7
    }else if(56==event.keyCode){
        document.getElementById("prev").innerText += 8
    }else if(57==event.keyCode){
        document.getElementById("prev").innerText += 9
    }else if(43==event.keyCode){
        document.getElementById("prev").innerText += '+'
    }else if(45==event.keyCode){
        document.getElementById("prev").innerText += '-'
    }else if(42==event.keyCode){
        document.getElementById("prev").innerText += '*'
    }else if(47==event.keyCode){
        document.getElementById("prev").innerText += '/'
    }else if(37==event.keyCode){
        document.getElementById("prev").innerText += 'Mod'
    }else if(8==event.keyCode){
        console.log("Heloo")
    }else if(61==event.keyCode||13==event.keyCode){
        var prevs = document.getElementById("prev").textContent
        if(flag == 1){
            var length = document.getElementById("prev").textContent.length
            var power = prevs.charAt(length-1)
            prevs = yroot(document.getElementById("prev").textContent.split("^")[0],parseFloat(1/parseInt(power)))
        }
       var str = mexp.eval(prevs);
       console.log(str)
       document.getElementById("ans").innerText = str;
       document.getElementById("prev").innerText = str;
       flag=0;
       event.preventDefault();
    }
}
document.getElementById("bdy").addEventListener("keypress",myfunction);

var app= new Vue({
    el:'#app',
    data:{
        previous: "" ,
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
            document.getElementById("prev").innerText += 0
        },one(){
            document.getElementById("prev").innerText += 1
        },two(){
            document.getElementById("prev").innerText += 2
        },three(){
            document.getElementById("prev").innerText += 3
        },four(){
            document.getElementById("prev").innerText += 4
        },five(){
            document.getElementById("prev").innerText += 5
        },six(){
            document.getElementById("prev").innerText += 6
        },seven(){
            document.getElementById("prev").innerText += 7
        },eight(){
            document.getElementById("prev").innerText += 8
        },nine(){
            document.getElementById("prev").innerText += 9
        },
        plus(){
            document.getElementById("prev").innerText += '+';           
        },multiply(){
            document.getElementById("prev").innerText += '*'
        },minus(){
            document.getElementById("prev").innerText += '-'
        },divide(){
            document.getElementById("prev").innerText += '/'
        },mod(){
            document.getElementById("prev").innerText += 'Mod' 
        },log(){
            document.getElementById("prev").innerText += 'log'
        },ln(){
            document.getElementById("prev").innerText += 'ln'
        },cos(){
            var angle = document.getElementById("prev").textContent;
            var str = 'cos('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },sine(){
            var angle = document.getElementById("prev").textContent;
            var str = 'sin('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },tan(){
            var angle = document.getElementById("prev").textContent;
            var str = 'tan('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },asin(){
            var angle = document.getElementById("prev").textContent;
            var str = 'asin('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },acos(){
            var angle = document.getElementById("prev").textContent;
            var str = 'acos('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },atan(){
            var angle = document.getElementById("prev").textContent;
            var str = 'atan('+ angle +')';
            document.getElementById("prev").innerText = str;
            var inter= mexp.eval(str);
            document.getElementById("ans").innerText = inter
        },x2(){
            document.getElementById("prev").innerText += '^2';
            var inter = mexp.eval(document.getElementById("prev").textContent);
            document.getElementById("ans").innerText = inter;
        },xy(){
            document.getElementById("prev").innerText += '^';
        },x3(){
            document.getElementById("prev").innerText += '^3';
            var inter = mexp.eval(document.getElementById("prev").textContent);
            document.getElementById("ans").innerText = inter;
        },x1y(){
            this.symbol = 'sp'
            flag=1
            document.getElementById("prev").innerText += '^1/';  
        },x12(){
            var str = '^'+ 1/2;
            document.getElementById("prev").innerText += str;
            var inter = mexp.eval(document.getElementById("prev").textContent);
            document.getElementById("ans").innerText = inter;
        },antilog(){
            this.first = '10^' + this.previous;
            document.getElementById("prev").innerText = '10^'+ document.getElementById("prev").textContent;
            var inter = mexp.eval(document.getElementById("prev").textContent);
            document.getElementById("ans").innerText = inter;
        },dot(){
            document.getElementById("prev").innerText = '.';
        },inverse(){
            document.getElementById("prev").innerText = '1/'+ document.getElementById("prev").textContent;
            var length = document.getElementById("prev").textContent.length;
            var value = document.getElementById("prev").textContent.charAt(length-1)
            var inter = 1/parseFloat(value);
            document.getElementById("ans").innerText = inter;
        },exp(){
            document.getElementById("prev").innerText = 'e^'+document.getElementById("prev").textContent;
            var inter = mexp.eval(document.getElementById("prev").textContent);
            document.getElementById("ans").innerText = inter;
        },pi(){
            var prevs = document.getElementById("prev").textContent;
            var inter = document.getElementById("ans").textContent;
            if(prevs==''){
                inter = 1;
            }else if(inter==prevs){
                inter = prevs;
            }else{
                inter = prevs
            }
            prevs = '3.141592653589793238462643*'+inter;
            document.getElementById("prev").innerText = prevs;
            var answer = mexp.eval(prevs)
            document.getElementById("ans").innerText = answer;
        },factorial(){
            var i;
            var n = parseInt(document.getElementById("prev").textContent);
            var str=document.getElementById("prev").textContent;
            for(i=1;i<n;i++){
                 str += '*'+(n-i);
            }
            var answer = mexp.eval(str);
            document.getElementById("ans").innerText = answer
            document.getElementById("prev").innerText = answer
        },openB(){
            document.getElementById("prev").innerText += '('
        },closeB(){
            document.getElementById("prev").innerText += ')'
        },plusminus(){
            var prevs = document.getElementById("prev").textContent;
            var inter = document.getElementById("ans").textContent;
            if(prevs.charAt(0)=='-'){
              prevs = prevs.substring(1,prevs.length)
              document.getElementById("prev").innerText = prevs;
              document.getElementById("ans").innerText = prevs;
          }else if(prevs.length==1){
              prevs = '-'+prevs;
              document.getElementById("prev").innerText = prevs;
          }
          else{
            prevs += '-';
            document.getElementById("prev").innerText = prevs;
          }
        },equal(){
            var prevs = document.getElementById("prev").textContent
            if(this.symbol =='sp'){
                var length = document.getElementById("prev").textContent.length
                var power = prevs.charAt(length-1)
                prevs = yroot(document.getElementById("prev").textContent.split("^")[0],parseFloat(1/parseInt(power)))
            }
           var str = mexp.eval(prevs);
           document.getElementById("ans").innerText = str;
           document.getElementById("prev").innerText = str;
           this.symbol = ''
        },ac(){
            document.getElementById("prev").innerText = ''
            document.getElementById("ans").innerText = 0;
        },backspace(){
            var prevs = document.getElementById("prev").textContent
            var length = prevs.length
            if(prevs.charAt(length-1)=='d'||prevs.charAt(length-1)=='g'){
                prevs = prevs.substring(0,length-3)
                document.getElementById("prev").innerText = prevs;
            }else if(prevs.charAt(length-1)=='n'){
                prevs = prevs.substring(0,length-2)
                document.getElementById("prev").innerText = prevs;
            }else{
                prevs = prevs.substring(0,length-1)
                document.getElementById("prev").innerText = prevs;
            }  
        },reload(){
            location.reload();
        },deg(){
            var prevs = document.getElementById("prev").textContent;
            var inter = document.getElementById("ans").textContent;
            if(inter==0){
                inter = prevs
            }
            inter = (inter*180)/3.141592653589793238462643;
            document.getElementById("ans").innerText = inter;
        },rad(){
            var prevs = document.getElementById("prev").textContent;
            var inter = document.getElementById("ans").textContent;
            if(inter==0){
                inter = prevs
            }
            inter = (inter*3.141592653589793238462643)/180;
            document.getElementById("ans").innerText = inter;
        }
    }
})