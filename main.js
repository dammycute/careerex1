//1. Score Checker Function 
function jambPassMark(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

//2. Voting Eligibility Check Function
function votingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote"
    } else {
        return "Not eligible"
    }
}

// 3. Grade Checker Function 
function gradeChecker(score, name) {
    if (score >= 90) {
        return 'Excellent'
    } else if (score >= 75) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}

// 4. ID and Age Checker for Access 
function canAccess(hasID, isAbove18) {
    return hasID && isAbove18 ? "Access granted" : "Access denied";
  }

  
//5. Using For loop
function checkScores(scores) {
    for (let score of scores) {
      if (score > 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
  
// 6. Using Arrow Function for subject pass
const passedBothSubjects = (math, english) =>
    math >= 50 && english >= 50 ? "Yes" : "No";

// 7. Signup Details Checker
function canSignUp(email, phone) {
    if (email || phone) {
      return "You can sign up";
    } else {
      return "Provide email or phone number";
    }
  }
  
//8. Input Validation Function
function validateLogin(username, password) {
    if (!username || !password) {
      return "Invalid input";
    } else {
      return "Login successful";
    }
  }
  
// 9. Work Hours Checker Function
function checkWorkType(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
  }
  
// 10. Using Arrow FUnction 
const getLarger = (a, b) => (a > b ? a : b);
