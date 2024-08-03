let url = 'https://script.google.com/macros/s/AKfycbzK2mGOHPcZBwz3Hrw-JcFUliJP0X09aY2ld0F8HZT74Ojf8TidNLEs2hUWUvYrhyXw/exec'
let form = document.querySelector("#dataForm")
let btn = document.getElementById("#btn")
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Submitting....";
    let d =new FormData(dataForm);
    fetch(url,{
        method: "POST",
        body: d
    }).then((res)=>res.text()).then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML=finalRes;
            form.reset();
        setTimeout(()=> {
            document.getElementById("#res").innerHTML="";   
        }, 5000)})
    e.preventDefault();
})