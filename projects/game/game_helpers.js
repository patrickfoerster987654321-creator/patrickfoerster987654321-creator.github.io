function print(text){                                                           
                                                                                 
     const output=document.getElementById('output');                             
                                                                                 
     const line=document.createElement('div');                                   
                                                                                 
     line.innerHTML="<p>"+text+"</p>";                                           
                                                                                 
     output.appendChild(line);                                                   
                                                                                 
     output.scrollTop=output.scrollHeight;                                       
                                                                                 
 }                                                                               
                                                                                 
 function clear(){                                                               
     document.getElementById('output').innerHTML='';                             
 }                                                                               
                                                                                 
 document.getElementById('user-input').addEventListener('keypress',function(e){  
                                                                                 
     if(e.key==='Enter' && gameActive){                                          
                                                                                 
         const input=this.value.trim();                                          
                                                                                 
         this.value='';                                                          
                                                                                 
         print("> "+input);                                                      
                                                                                 
         handleInput(input);                                                     
                                                                                 
     }                                                                           
                                                                                 
 });                                                                             
                                                                                 
 function handleInput(input){                                                    
     console.log("No handler for input: "+input);                                
 }                                                                               
                                                                                 
 function waitForInput(handlerFunction){                                         
     handleInput=handlerFunction;                                                
 }                                                                               
                                                                                 
 function stayHere(){                                                            
     print("\nSorry, I don't understand your input. I'll assume you stay here.");
 }   
