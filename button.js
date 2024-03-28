window.onload=function(){
    document.getElementById("solve").addEventListener("click", FindResidual);
}



function FindResidual(){
    let vector=document.getElementById("vector").value;   
    if(vector.match(/[2-9]/)){         
        document.getElementById('result').value = 'Это не вектор функции (есть числа помимо 0 и 1)';
    }
    if(vector.length%2!=0 ){
        document.getElementById('result').value = 'Это не вектор функции (длина не кратна 2)';
    }
    else{
        const form = document.getElementById("ost");
        let T=form.elements["d"].value;
        let el=document.getElementById('nom').value;
        if(el>vector.length){
            document.getElementById('result').value = 'Неверное значение номера аргумента';
        }
        else{
            let r='';
            for(let i=0;i<vector.length;i++){
               // alert(vector+" "+T+" "+el);
                let p=i%(1 << el)
                let d= 1<<(el-1);
                if(p/d==T){
                    r+=vector[i];
                   //alert(r+" "+i);
                }
               // alert(d);
            }
           // alert(r);
        }
    }
    
}
