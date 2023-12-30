document.getElementById('num').oninput = function () {
    let res;
    const num = document.getElementById('num').value;

    if (num < 0) {
        res = "Negative";
    }
    else if (num > 0) {
        res = "Positive";
    }
    else{
        res = "Zero";
    }

    document.getElementById('res').innerHTML = num + " is a " + res ;
}