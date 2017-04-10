function palindrome(str) {
    // Remove non alpha, convert to lower case e creates an temp array
    var tmp = str.replace(/(_|\W)*/g,"").toLowerCase().split("").reverse().join("");
    return tmp == str;
}

function checkPalindrome(str) {
    if (palindrome(str)){
        console.log(str," is palindrome.");
    }
    else{
        console.log(str," is not palindrome.");
    }
}
checkPalindrome("The Quick Brown Foz Jumps Over The Lazy Dog!");
checkPalindrome("1 2 3 4 5");
checkPalindrome("eye");
checkPalindrome("_eye");
checkPalindrome("aeyea");
checkPalindrome("abba");
