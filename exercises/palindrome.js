function palindrome(str) {
    // Remove non alpha, convert to lower case e creates an temp array
    var tmp = str.replace(/(_|\W)*/g,"").toLowerCase().split("");

    /*  The symmetric chars on a string are equal on a palindrome.
        We just have to compare the lower half with higher half of the array.
        Of course with an odd number of chars the middle is equal to itself.
    */
    for (var i=0; i < tmp.length/2>>0; i++){
        if (tmp[i] !== tmp[tmp.length - 1 - i]) {
            return false;
        }
    }
    return true;
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
