// JavaScript Algorithm Examples

// Example 1: Two Sum Problem
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
}

console.log('=== Two Sum Problem ===');
const nums = [2, 7, 11, 15];
const target = 9;
console.log('Input:', nums, 'Target:', target);
console.log('Output:', twoSum(nums, target));

// Example 2: Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log('\n=== Reverse String ===');
const testString = 'Hello, World!';
console.log('Input:', testString);
console.log('Output:', reverseString(testString));

// Example 3: Find Maximum in Array
function findMax(arr) {
    if (arr.length === 0) {
        console.warn('Array is empty!');
        return null;
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log('\n=== Find Maximum ===');
const numbers = [3, 7, 2, 9, 1, 5, 8];
console.log('Input:', numbers);
console.log('Maximum:', findMax(numbers));

// Example 4: Check Prime Number
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

console.log('\n=== Prime Number Check ===');
const testNumbers = [2, 3, 4, 5, 10, 17, 20, 23];
testNumbers.forEach(num => {
    console.log(`${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
});

// Example 5: Factorial (Recursive)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log('\n=== Factorial ===');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}! = ${factorial(i)}`);
}

// Example 6: Object Manipulation
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 95 }
];

console.log('\n=== Student Scores ===');
console.log('All students:', students);

const topScorer = students.reduce((max, student) => 
    student.score > max.score ? student : max
);
console.log('Top scorer:', topScorer);

const average = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log('Average score:', average.toFixed(2));

// Example 7: Error Handling
console.log('\n=== Error Handling ===');
try {
    console.log('Attempting risky operation...');
    throw new Error('Something went wrong!');
} catch (error) {
    console.error('Caught error:', error.message);
}

console.log('\n✅ All examples completed!');
