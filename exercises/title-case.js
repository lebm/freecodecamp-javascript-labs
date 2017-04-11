function titleCase(str) {
    var tmp = str.toLowerCase().split("");
    var max = tmp.length;
    var change = true;
    for(var i=0; i< max; i++){
        if (change){
            if (tmp[i].match(/[a-z]/)){
                tmp[i] = tmp[i].toUpperCase();
                change = false;
            }
        }
        else {
            change = tmp[i].match(/[^a-z']/);
        }
    }
    return tmp.join("");
}

console.log(titleCase("I'm a little tea pot"));
