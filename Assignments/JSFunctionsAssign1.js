function tagPassword(password) {
  if (typeof password !== 'string') {
    return "INVALID";
  }
  if (password.length < 8) {
    return "WEAK";
  }

  let hasLetters = false;
  let hasNumbers = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetters = true;
    }
    if (char >= '0' && char <= '9') {
      hasNumbers = true;
    }
  }
  if (password.length >= 12 && hasLetters && hasNumbers) {
    return "STRONG";
  } 
  else if (password.length >= 8 && hasLetters && hasNumbers) {
    return "MEDIUM";
  } 
  else {
    return "WEAK";
  }
}
console.log(tagPassword("Rlokesh@73493"));
console.log(tagPassword("Rhaa"));
console.log(tagPassword("Rhaa2004"));
console.log(tagPassword(12334));