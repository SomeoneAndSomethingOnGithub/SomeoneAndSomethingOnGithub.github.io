const form = document.getElementById('code-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const   
 code = document.getElementById('code').value;

    // Make a request to your backend to verify the code
    const response = await fetch('/verify_code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    });

    const   
 data = await response.json();

    if (data.success)   
 {
        // If code is valid, prompt for username and password
        const username = prompt('Enter your username');
        const password = prompt('Enter your password');

        // Make a request to your backend to authenticate
        const authResponse = await fetch('/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const authData = await authResponse.json();

        if (authData.success) {
            // If authentication is successful, send the request to the URL
            const requestUrl = 'https://example.com'; // Replace with your desired URL
            const requestResponse = await fetch(requestUrl);

            if (requestResponse.ok) {
                resultDiv.textContent = 'Request sent successfully!';
            } else {
                resultDiv.textContent = 'Error sending request.';
            }
        } else {
            resultDiv.textContent = 'Invalid username or password.';
        }
    } else {
        resultDiv.textContent = 'Invalid code.';
    }
});
