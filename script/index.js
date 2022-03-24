import {showContact,closeContact} from "./modules/contact_info.js";
import displayMail from "./modules/display_mail.js";
import displayPhoneNumber from "./modules/display_phone_number.js";
import {showContactDealers, closeContactDealers} from "./modules/contact_dealers.js";
const d=document;
d.addEventListener("DOMContentLoaded",e=>{
    showContact();
    closeContact();
    displayMail();
    displayPhoneNumber();
    showContactDealers();
    closeContactDealers();
});