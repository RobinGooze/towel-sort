

module.exports = function towelSort (matrix) {
    let arrayReady = []

    if(matrix == []) return arrayReady;
    if(matrix == undefined) return arrayReady;

        for(let i = 0; i < matrix.length; i++) {
            let x = matrix[i];
            if(i % 2) x = matrix[i].reverse();
            arrayReady.push(x);
        };
    
    arrayReady = arrayReady.flat();

   return arrayReady;
}

