import { auth } from '../firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Sign up user
document.getElementById('Sign-Up-Button').addEventListener('click', async function (e) {
    // 4. Prevent the default form submission behavior
    e.preventDefault();
    // 5. Store user inputs in variables
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // 7ab. Store error and success messages in variables
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("succese-message");
    // 6. Try and catch logic to create user with email and password
    try {
        // 6a. Use async/await to create user with email and password
        await createUserWithEmailAndPassword(auth, email, password);
        // 8a. Display success message 
        successMessageMessage.textContent="Sign up successful, Login to continue";
        errorMessage.textContent=' ';
    } catch (error) {
        // 8b. Display error message
        errorMessage.textContent=error.message;
        successMessage.textContent='Wrong';
    }
});

// 9. Login user
