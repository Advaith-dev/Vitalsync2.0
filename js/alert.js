const alert = document.getElementById("alert");

const s_Alert = document.getElementById("sound_Alert");
const min_Bpm = document.getElementById("min_Bpm");
const max_Bpm = document.getElementById("max_Bpm");
const min_O2 = document.getElementById("min_O2");
const confirm = document.getElementById("set_Alert");

const Alertstate = localStorage.getItem('alertCheckboxState')
const sAlertstate = localStorage.getItem('sAlertState')

if(Alertstate === 'checked'){
    alert.checked = true;
    s_Alert.disabled = false;
    min_Bpm.disabled = false;
    max_Bpm.disabled = false;
    min_O2.disabled = false;
    confirm.disabled = false;
   
}
else{
    alert.checked = false;
    s_Alert.checked = false;
    s_Alert.disabled = true;
    min_Bpm.disabled = true;
    max_Bpm.disabled = true;
    min_O2.disabled = true;
    confirm.disabled = true;
}

if(Alertstate === 'checked' && sAlertstate === 'checked'){
    s_Alert.checked = true;
}
else{
    s_Alert.checked = false;
    
}

alert.addEventListener('change', function () {
    if (alert.checked) {
        localStorage.setItem('alertCheckboxState', 'checked');
        s_Alert.disabled = false;
        min_Bpm.disabled = false;
        max_Bpm.disabled = false;
        min_O2.disabled = false;
        confirm.disabled = false;
    } else {
        localStorage.setItem('alertCheckboxState', 'uc');
        s_Alert.checked = false;
        s_Alert.disabled = true;
        min_Bpm.disabled = true;
        max_Bpm.disabled = true;
        min_O2.disabled = true;
        confirm.disabled = true;
    }
});


s_Alert.addEventListener('change', function () {
    if (s_Alert.checked) {
        localStorage.setItem('sAlertState', 'checked');
    } else {
        localStorage.setItem('sAlertState', 'uc');
   
    }
});

confirm.addEventListener('click', function () {
    localStorage.setItem('minbpm', min_Bpm.value);
    localStorage.setItem('maxbpm', max_Bpm.value);
    localStorage.setItem('minO2', min_O2.value);    
});