const displayMail = ()=>{
    document.addEventListener("click",e=>{
        if(e.target.matches("#icon-mail") || e.target.matches("#icon-mail *")){
            e.preventDefault();
            alert("E-mail: info@bushido.com.ve");
        }
    })
};
export default displayMail;