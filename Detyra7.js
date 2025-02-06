

        function myfunction(){

                var num1 = parseInt(document.getElementById('num1').value);
                var num2 = parseInt(document.getElementById('num2').value);
                var operators = document.getElementById('operators').value;
        
             if( operators === '+'){
        
                document.getElementById('result').value = num1 + num2;

            }
             else if( operators === '-'){

                document.getElementById('result').value = num1 - num2;
        
            }
             else if( operators === '*'){
  
                document.getElementById('result').value = num1 * num2;
        
            }
             else if( operators === '/'){
   
                document.getElementById('result').value = num1 / num2;
        
            }
        }
        function clearfunction(){
            document.getElementById("num1").value = " ";
            document.getElementById("num2").value = " ";
            document.getElementById("operators").value = "None";
            document.getElementById("result").value = " ";

        }