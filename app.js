let AllButtons = document.querySelectorAll('.all-buttons button');
let output = document.getElementById('output');
let ans = "";
AllButtons.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        btnText = btn.innerText;
        if(btnText == 'X')
        {
            btnText = '*';
            ans += btnText;
            output.value = ans;
        }
        else if(btnText == "=")
        {   try{
                output.value = eval(ans);
                ans = "";
            }
            catch(err){
                output.value = "Wrong Input";
                ans = "";
            }
        }
        else if(btnText == "C"){
            output.value = "";
            ans = "";
        }
        else if(btnText ==""){
            lastCharRemoved = ans.slice(0, ans.length - 1);
            ans = lastCharRemoved
            output.value = ans;
        }
        else{
            ans += btnText;
            output.value = ans;
        }
    })
})