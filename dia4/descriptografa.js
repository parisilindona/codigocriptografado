const letraA = ['a',0,0]
const letraB = ['b',1,0]
const letraC = ['c',2,0]
const letraD = ['d',3,0]
const letraE = ['e',4,0]

const letraF = ['f',0,1]
const letraG = ['g',1,1]
const letraH = ['h',2,1]
const letraI = ['i',3,1]
const letraJ = ['j',4,1]

const letraK = ['k',0,2]
const letraL = ['l',1,2]
const letraM = ['m',2,2]
const letraN = ['n',3,2]
const letraO = ['o',4,2]

const letraP = ['p',0,3]
const letraQ = ['q',1,3]
const letraR = ['r',2,3]
const letraS = ['s',3,3]
const letraT = ['t',4,3]

const letraU = ['u',0,4]
const letraV = ['v',1,4]
const letraW = ['w',2,4]
const letraX = ['x',3,4]
const letraY = ['y',4,4]

const letraZ = ['z',0,5]
const espaço = [' ',1,5]
const pontoF = ['.',2,5]
const virgula = [',',3,5]
const interrog = ['?',4,5]

const alfabeto=[letraA,letraB,letraC,letraD,letraE,letraF,letraG,letraH,letraI,letraJ,letraK,letraL,letraM,letraN,letraO,letraP,letraQ,letraR,letraS,letraT,letraU,letraV,letraW,letraX,letraY,letraZ,espaço,pontoF,virgula,interrog]

const M = [[-2,1],[3/2,-1/2]]
const numeros = prompt ('mande seus números separados por vírgula')
const apenasNumeros = numeros.split(",")
console.log(apenasNumeros)

for(let j=0;j<apenasNumeros.length; j++){
for(let i=0;i<alfabeto.length;i++){
    const produto = [apenasNumeros[j]*M[0][0] + apenasNumeros[j+1]*M[1][0],apenasNumeros[j]*M[0][1]+apenasNumeros[j+1]*M[1][1]];
   console.log(produto);
    if(produto[0]==alfabeto[i][1]&produto[1]==alfabeto[i][2]){
       document.body.innerHTML += ` <b>${alfabeto[i][0]}<b>`
   }
}
j+=1;
}

//thais