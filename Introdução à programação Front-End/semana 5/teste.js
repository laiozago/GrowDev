// função que recebe array de numeros e um valor soma, e retorna um array com os
// indices dos numeros que somados são iguais ao valor soma.

function somaIneficiente(array, soma) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === soma) {
                resultado.push(i, j);
                return resultado;
            }
        }
    }
}

function somaEficiente(array, soma) {
        // Create a new Map to store the indices of numbers we've seen so far
        const numIndices = new Map();

        // Iterate over each number in the array
        for (let i = 0; i < array.length; i++) {
            // Calculate the complement of the current number with respect to the target sum
            const complement = soma - array[i];

            // Check if we've seen the complement before
            if (numIndices.has(complement)) {
                // If so, return the indices of the two numbers that add up to the target sum
                return [numIndices.get(complement), i];
            }

            // Add the current number and its index to the Map
            numIndices.set(array[i], i);
        }

        // If we've iterated over the entire array without finding a pair that adds up
        // to the target sum, return an empty array
        return [];
    }

/*
Here is an explanation of how this improved version of the function works:

We create a new Map called numIndices to store the indices of the numbers we've seen so far. A Map is a built-in JavaScript object that allows us to store key-value pairs, where each key is unique.

We iterate over each number in the array. For each number, we calculate its complement with respect to the target sum soma, which is the difference between soma and the current number.

We check if we've seen the complement before by calling the has method on the numIndices Map. If we have seen the complement before, it means that we've found a pair of numbers that add up to the target sum, so we return an array containing the indices of the two numbers.

If we haven't seen the complement before, we add the current number and its index to the numIndices Map by calling the set method. The set method adds a new key-value pair to the Map, where the key is the current number and the value is its index.

If we've iterated over the entire array without finding a pair of numbers that add up to the target sum, we return an empty array.

This algorithm has a time complexity of O(n), where n is the length of the array. This is because we only need to iterate over the array once, and the time it takes to perform Map lookups and inserts is constant (i.e., O(1)). This is much more efficient than the original version of the function, which had a time complexity of O(n^2). */

// console.log(somaIneficiente([2, 3, 11, 10], 13));
// console.log(somaEficiente([2, 3, 11, 10], 13));

// function factorize(n) {
//     const factors = [];
//     let divisor = 2;

//     while (n > 1) {
//         if (n % divisor === 0) {
//             factors.push(divisor);
//             n /= divisor;
//         } else {
//             divisor++;
//         }
//     }

//     return factors;
// }

// function to factorialize a number into primes using pollard rho
// function factorize(n) {
//     const factors = [];
//     let divisor = 2;

//     while (n > 1) {
//         if (n % divisor === 0) {
//             factors.push(divisor);
//             n /= divisor;
//         } else {
//             divisor++;
//         }
//     }

//     return factors;
// }

function factorize(n) {
    const primes = [];
    const factors = [];
    let divisor = 2;

    // Generate a list of primes up to the square root of n
    const limit = Math.ceil(Math.sqrt(n));
    const isComposite = new Array(limit).fill(false);
    for (let i = 2; i <= limit; i++) {
        if (!isComposite[i]) {
            primes.push(i);
            for (let j = i * i; j <= limit; j += i) {
                isComposite[j] = true;
            }
        }
    }

    // Test each prime as a divisor in the factorization loop
    for (const prime of primes) {
        while (n % prime === 0) {
            factors.push(prime);
            n /= prime;
        }
    }

    // If there is a factor larger than the square root of n, it is also prime
    if (n > 1) {
        factors.push(n);
    }

    return factors;
}

const n = 6067;
console.log(factorize(n));