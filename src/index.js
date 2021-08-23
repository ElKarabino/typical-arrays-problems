
exports.min = function min (array) {
    return Math.min.apply(0, array);
}

exports.max = function max (array) {
    return Math.max.apply(0, array);
}

exports.avg = function avg (array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
  return sum / array.length;
}
