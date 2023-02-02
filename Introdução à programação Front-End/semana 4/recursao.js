// function print(n) {
//     if(n){
//     console.log(n);
//     n--;
//     print(n);
//     }
//     return
// }

// print(10);

// function pares(n) {
//     if(n){
//         if(n%2 == 0){
//             console.log(n);
//         }
//         n--;
//         pares(n);
//     }
//     return
// }
    
// pares(10);

function impares(n) {
    if(n){
        if(n%2 != 0){
            console.log(n);
        }
        n--;
        impares(n);
    }
    return
}
    
impares(10);