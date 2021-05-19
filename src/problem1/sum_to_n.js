var sum_to_n_a = function(n) {
    //iterative loop, adding the sum
    var sum = 0;
    var i;
    for (i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    //recursive calls
    var sum = 0;
    if (n <= 1)
        return n;
    return n + sum_to_n_b(n - 1)    
};

var sum_to_n_c = function(n) {
    //mathematical formula using the summation of series
    return n*(n+1)/2;
};

module.exports = { 
    sum_to_n_a, 
    sum_to_n_b,
    sum_to_n_c }
