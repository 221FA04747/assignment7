function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name == "" || email == "" || password == "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return false;
    }

    alert("Registration successful!");
    // Simulate storing user data (temporarily)
    storeUserData(name, email, password);
    return false; // Prevent actual form submission for demo
}

// Email format validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Function to simulate data storage
function storeUserData(name, email, password) {
    // Simulate saving to a database
    console.log("Storing user data:", { name, email, password });
    // In a real application, you would send this data to the server
}