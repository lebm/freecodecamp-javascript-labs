// Tip: the regex used on split must be "\W+". "\W*" wil break the string
// after each char
function findLongestWord(str) {
    var tmp = str.split(/\W+/);
    var longest = 0;
    for(var i=0; i < tmp.length; i++){
        var l = tmp[i].length;
        if (l > longest){
            longest = l;
        }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
