import {db} from "./firebase-config.js";

import {

doc,

onSnapshot

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const ref=doc(db,"devices","phone");

onSnapshot(ref,(snap)=>{

const d=snap.data();

document.getElementById("device").innerHTML=d.name;

document.getElementById("battery").innerHTML=d.battery+"%";

document.getElementById("storage").innerHTML=d.storage;

document.getElementById("network").innerHTML=d.network;

document.getElementById("location").innerHTML=d.location;

});
