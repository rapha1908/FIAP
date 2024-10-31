document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const names = [
        document.getElementById('name1').value,
        document.getElementById('name2').value,
        document.getElementById('name3').value,
        document.getElementById('name4').value
    ];
    const message = document.getElementById('history').value;

    const data = {
        names: names,
        message: message
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
           
        });
        console.log(response)
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem. Verifique a conexão com a internet.');
    }
});
