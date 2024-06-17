import { app } from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove
} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js';

const db = getDatabase();

const Ref = ref(db, 'Patients/')
  onValue(Ref, snapshot => {
  const data = snapshot.val();

  console.log(data);
  const tableBody = document.getElementById('table').querySelector('tbody');
                    
    for (var i in data){

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${data[i].name}</td>
        <td>${i}</td>
        <td>${data[i].age}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].room_no}</td>
        <td><button class="btn btn-danger delete-button" id = "${i}">Delete</button></td>
    `;

    tableBody.appendChild(row);
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.id;
            console.log(id);
            remove(ref(db, 'Patients/' + id));
           location.reload() 
        });
    });
    }
 
})







