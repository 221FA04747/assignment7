
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert("Both fields must be filled out");
        return false;
    }
    return true;
}
function logout() {
    // Show a confirmation message
    alert("You are logged out successfully!");
    
    // Redirect to the login page after the alert is dismissed
    window.location.href = 'login.html';
}
