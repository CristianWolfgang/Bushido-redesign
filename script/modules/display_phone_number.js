const displayPhoneNumber=()=>{
    document.addEventListener("click",e=>{
        if(e.target.matches("#icon-phone") || e.target.matches("#icon-phone *")){
            e.preventDefault();
            alert("0243-554.51.78 \n0243.551.18.48 \nFax: 0243.554.26.45")
        }
    })
}
export default displayPhoneNumber;