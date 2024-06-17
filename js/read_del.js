import { app } from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  onValue,
  set
} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js';


const db = getDatabase();


const Ref = ref(db, 'Patients/')
  onValue(Ref, snapshot => {
  const data = snapshot.val();
  console.log(data);

  let inner_html = "";
  let cardclass = "";

  const base_div = document.getElementById("base");
  const alertSound = document.getElementById('alertSound');

  const alertState = localStorage.getItem('alertCheckboxState');
  const sAlertState = localStorage.getItem('sAlertState')
  const minBpm = localStorage.getItem('minbpm');
  const maxBpm = localStorage.getItem('maxbpm');
  const minO2 = localStorage.getItem('minO2');
 
    for (var i in data){
      if (data[i].spO2 == -1) {
          data[i].spO2 = 0;
      }
      if(data[i].bpm == -1)
      {
        data[i].bpm = 0;
      }
     if(alertState === "checked")
      {
        if (data[i].bpm < minBpm || data[i].bpm > maxBpm || data[i].spO2 < minO2) {
          cardclass = "card text-black bg-danger mb-3";
          if(sAlertState === 'checked'){
            alertSound.play();
          }
        }
        else{
          cardclass = "card text-black bg-primary mb-3";
        }
      }
      if(alertState === "uc"){
        cardclass = "card text-black bg-primary mb-3";
      }
  
      inner_html += `<div class="col">
                        <div class="${cardclass}"  style = "border-radius: 15px;">
                          <div class="card-body">
                            <div style="text-align: left;" >
                              <div style="font-size: x-large; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold;">
                                ${data[i].name}
                              </div>
                              <div style="font-size: large; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 600;">
                                bpm: ${data[i].bpm}<br>spO2: ${data[i].spO2}<br>Room no: ${data[i].room_no}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`
    }
    base_div.innerHTML = inner_html; 
})






