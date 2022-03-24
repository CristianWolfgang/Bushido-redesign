const d = document,
countries={
    "us":function(){
        document.getElementById("contact-us").style.display="block";
    },
    "pa":function(){
        document.getElementById("contact-pa").style.display="block";
    },
    "ve":function(){
        document.getElementById("contact-ve").style.display="block";
    }
},
showContact = country =>{

    d.addEventListener("click",e=>{
        if(e.target.matches("#show-contact-us")){
            instructions(e);
            countries["us"]();
            
        }else if(e.target.matches("#show-contact-pa")){
            instructions(e);
            countries["pa"]();
        
        }else if(e.target.matches("#show-contact-ve")){
            instructions(e);
            countries["ve"]();
            
        }
    });
},
closeContact = ()=>{
    d.addEventListener("click",e=>{
        if(e.target.matches(".btn-close")){
            e.target.parentElement.style.display="none";
            
            if(!window.showingDealers){
                d.documentElement.style.overflowY="scroll";
                d.querySelector("main").style.filter="";
                d.querySelector(".header").style.filter="";
                d.querySelector(".header").style.pointerEvents="";
            
            }
                
            
        }
    })
};

export function instructions(e){
    e.preventDefault();
    scroll(0,0);
    d.documentElement.style.overflowY="hidden";
    d.querySelector("main").style.filter="blur(3px)";
    d.querySelector(".header").style.filter="blur(3px)";
    d.querySelector(".header").style.pointerEvents="none";
}
export {showContact,closeContact, countries};