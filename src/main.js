
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAVX2FITvrVAm3jnLsf8Oht5ZgD2i_nzc",
    authDomain: "marcosbbdd-e707e.firebaseapp.com",
    projectId: "marcosbbdd-e707e",
    storageBucket: "marcosbbdd-e707e.appspot.com",
    messagingSenderId: "141099312269",
    appId: "1:141099312269:web:ef70e01085c1b96e5caec4",
    measurementId: "G-4GV5DSX07S"
};

// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  signup_email = document.getElementById('signup_email').value
signup_password = document.getElementById('signup_password').value
signup_name = document.getElementById('signup_name').value


  
  // Validate input fields
  if (validate_email(signup_email) == false || validate_password(signup_password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  // Move on with Auth
  auth.createUserWithEmailAndPassword(signup_email, signup_password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
        signup_email : signup_email,
        signup_name : signup_name,
        last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    console.error(error_code, error_message);
    alert(error_message);
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  login_email = document.getElementById('login_email').value
  login_password = document.getElementById('login_password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}