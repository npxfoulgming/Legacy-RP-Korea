<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }

        .login-container h2 {
            margin-top: 0;
            margin-bottom: 20px;
            color: #333;
        }

        .btn {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn-google {
            background-color: #db4437;
            color: #fff;
        }

        .btn-google:hover {
            background-color: #c13584;
        }

        .btn-discord {
            background-color: #7289da;
            color: #fff;
        }

        .btn-discord:hover {
            background-color: #4e5d94;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            transition: border-color 0.3s;
        }

        .form-group input:focus {
            border-color: #009688;
        }

        .form-group input::placeholder {
            color: #999;
        }

        .form-group.checkbox label {
            display: inline;
            margin-left: 5px;
            color: #666;
        }

        .form-group.checkbox input {
            display: inline-block;
            margin-right: 5px;
            vertical-align: middle;
        }

        .link {
            color: #007bff;
            text-decoration: none;
            transition: color 0.3s;
        }

        .link:hover {
            color: #0056b3;
        }
        
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <button class="btn btn-google" onclick="loginWithGoogle()">Login with Google</button>
        <button class="btn btn-discord" onclick="loginWithDiscord()">Login with Discord</button>
        <hr>
        <form id="loginForm" action="#" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <div class="form-group checkbox">
                <input type="checkbox" id="rememberMe" name="rememberMe">
                <label for="rememberMe">Remember Me</label>
            </div>
            <button type="submit" class="btn">Login</button>
            <a href="#" onclick="forgotPassword()" class="link">Forgot Password?</a>
            <p>Don't have an account? <a href="register.html" class="link">Create Account</a></p>
        </form>
    </div>
    <script>
        function loginWithGoogle() {
            // OAuth integration for Google login
        }

        function loginWithDiscord() {
            // OAuth integration for Discord login
        }

        function forgotPassword() {
            // Password recovery logic
            alert("Forgot Password clicked!");
        }

        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Get username and password values
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const rememberMe = document.getElementById("rememberMe").checked;

            // Check if username and password are correct
            if (username === "admin" && password === "password") {
                alert("Login successful!");
                // Redirect to home page (replace "home.html" with your home page URL)
                window.location.href = "home.html";
        

                if (rememberMe) {
                    // Store login credentials for future visits
                }
                // Redirect to dashboard or perform other actions
            } else {
                alert("Incorrect username or password. Please try again.");
                // Clear input fields or show error message
            }
        });
    </script>
</body>
</html>








