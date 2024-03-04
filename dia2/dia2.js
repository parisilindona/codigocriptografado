// * -> mjultiplicacao
// / -> divisao
// ** potencia
let A = [[1,2],[3,4]];
let det; 
function determinante (A) {
    det = A[0][0]*A[1][1]-(A[1][0]*A[0][1])
    if (det == 0) {
alert(`Você não pode prosseguir, pois o determinante de ${A} é 0`)

  }
}

determinante(A)