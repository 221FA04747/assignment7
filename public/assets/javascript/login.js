document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Here, you would typically send this data to your server for authentication
    alert(`Logged in with Email: ${email}`);
    // Redirect to dashboard or another page after successful login
    // window.location.href = 'dashboard.html';
};