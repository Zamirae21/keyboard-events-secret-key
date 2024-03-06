document.addEventListener('DOMContentLoaded', function() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

    document.body.addEventListener('keydown', function(event) {
        if (event.key === secretKey) {
            const output = document.getElementById('output');
            const listItem = document.createElement('li');
            listItem.textContent = 'SECRET KEY PRESSED';
            output.appendChild(listItem);

            secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    });
});
