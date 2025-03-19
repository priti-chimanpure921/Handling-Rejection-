
//Handling Rejections
console.log("Handling rejections");

let h2 = document.querySelector("h2");

function changeColorH2(color,delay)
{
    return new Promise((resolve,reject)=>{
        let randomNum = Math.floor(Math.random() * 5) + 1 ;
        setTimeout(()=>{
            if(randomNum>3)
            {
                reject("Promise rejected");
            }
            else
            {
                h2.style.color = color ;
                resolve();
            }
        },delay);
        let a = 3;
        console.log("new number " , a+10);
    });
}

async function setColorH2()
{
    try
    {
        await changeColorH2("red",1000);
        await changeColorH2("green",1000);
        await changeColorH2("yellow",1000);
        await changeColorH2("orange",1000);
    }
    catch
    {
        console.log("Error caught");   
    }
    
}
setColorH2();
