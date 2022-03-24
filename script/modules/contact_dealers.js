import { instructions } from "./contact_info.js";
import { countries } from "./contact_info.js";
const d=document,
showContactDealers = ()=>{
    d.addEventListener("click",e=>{
        if(e.target.matches("#contact-dealers")|| e.target.matches("#contact-dealers *")){
            instructions(e);
            window.showingDealers=true;
            const {us,pa,ve} = countries;
            us();
            pa();
            ve();
        }
    });
},
closeContactDealers=()=>{
    d.addEventListener("click",e=>{
        if(e.target.matches("#contact-us > .btn-close") && window.showingDealers){
            window.showingDealers=false;
            d.documentElement.style.overflowY="scroll";
            d.querySelector("main").style.filter="";
            d.querySelector(".header").style.filter="";
            d.querySelector(".header").style.pointerEvents="";

        }
    })
};
export {showContactDealers,closeContactDealers};