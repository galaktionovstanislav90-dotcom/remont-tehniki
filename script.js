document.getElementById('callback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const messageDiv = document.getElementById('form-message');
    
    if (name && phone) {
        console.log('Заявка от:', name, 'Телефон:', phone);
        
        messageDiv.innerHTML = '✅ Спасибо! Мы перезвоним вам в ближайшее время.';
        messageDiv.style.color = '#2ecc71';
        
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 5000);
    } else {
        messageDiv.innerHTML = '❌ Пожалуйста, заполните все поля';
        messageDiv.style.color = '#e74c3c';
    }
});
