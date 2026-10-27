document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    clearErrors();
    document.getElementById('formResult').textContent = '';
    
    let valid = true;
    
    const fullname = document.getElementById('fullname').value.trim();
    if (fullname === '') {
        showError('fullname', 'Le nom complet est obligatoire.');
        valid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('email', "L'adresse email est obligatoire.");
        valid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', "L'adresse email n'est pas valide.");
            valid = false;
        }
    }
    
    const course = document.getElementById('course').value;
    if (course === '') {
        showError('course', 'Veuillez sélectionner un cours.');
        valid = false;
    }
    
    const levelRadios = document.getElementsByName('level');
    let levelSelected = false;
    for (let i = 0; i < levelRadios.length; i++) {
        if (levelRadios[i].checked) {
            levelSelected = true;
            break;
        }
    }
    if (!levelSelected) {
        document.getElementById('error_level').textContent = 'Veuillez sélectionner un niveau.';
        valid = false;
    }
    
    if (valid) {
        document.getElementById('formResult').textContent = 'Demande envoyée avec succès !';
        document.getElementById('formResult').style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResult').textContent = "Veuillez corriger les erreurs dans le formulaire.";
        document.getElementById('formResult').style.color = 'red';
    }
});

function showError(fieldId, message) {
    document.getElementById('error_' + fieldId).textContent = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error_msg');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}
