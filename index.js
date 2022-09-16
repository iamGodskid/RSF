//parse jssn parser
let trg=document.getElementById("mess");
(function(){
let parse = new parseJSSNFile("db/db.jssn");
parse.then(res=>{
  console.log(res);
  let key=JSON.parse(res);
  let param=Object.keys(key);
  for(let i=0;i<param.length;i++){
    let y=key[param[i]];
    console.log(y["name"])
    
    document.querySelector("#mess").insertAdjacentHTML("beforeend", `
    
 
    <div class="container pt-1 pl-0 pr-0">
   <audio src="${y['url']}" controls></audio>

<div class="container text-dark text-center">
${y["name"]}
 </div>
      
    </div>
    `);
    
  }
  
});
parse.catch(err=>console.log(err));
})()
