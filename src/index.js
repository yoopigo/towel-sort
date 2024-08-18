// You should implement your task here.

module.exports = function towelSort(matrix) {
    let towel = [];

    if (!Array.isArray(matrix) || matrix.length === 0) {
        return towel;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towel.push(...matrix[i]);
        } else {
            towel.push(...matrix[i].slice().reverse());
        }
    }
    return towel;
};
