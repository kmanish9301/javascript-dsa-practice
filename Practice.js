// Strings: Traversal, Reversing, Comparisons

// What & Why
// Strings are immutable; many problems require manual traversal and character manipulation.
// Approach to string problems
// Understand if you need index access or value-only.
// For reverse/traversal use index loops from ends; avoid .reverse().
// Use frequency counters (object map) for anagram/first unique character problems.

// Reverse example (no .reverse())

function reverseString(s) {
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) res += s[i];
  return res;
}

// First non - repeating character

function firstUnique(s) {
  const freq = {};
  for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of s) if (freq[ch] === 1) return ch;
  return null;
}

// Pitfalls
// Beware Unicode / multi-byte characters (if needed, use code-points methods).
// Avoid repeatedly concatenating large strings in hot loops in performance-critical code (use arrays + join if necessary).

// Practice
// Implement palindrome check ignoring spaces and punctuation.
// Implement isAnagram without .sort() (use frequency counters).

// =====================================================================================================================================
// =====================================================================================================================================
// Arrays: Loops, Searching, Max/Min, Manual Logic

// What & Why
// Arrays are everywhere; interviews test traversals, in-place transforms, and two-pointer techniques.

// Approach
// Choose iteration method by need: index (for) for in-place updates, for...of for value-only.
// For search/aggregation use a single pass if possible.
// Use two pointers for sorted arrays or reverse traversal problems.
// Find max/min (no Math.max)

function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
}

// Remove duplicates (no Set)
function removeDuplicates(arr) {
  const seen = {};
  const res = [];
  for (let v of arr) {
    if (!seen[v]) {
      seen[v] = true;
      res.push(v);
    }
  }
  return res;
}

// Two-sum (find two numbers that sum to target)
// Use a hash map; single pass O(n) time.

function twoSum(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (map[need] !== undefined) return [map[need], i];
    map[arr[i]] = i;
  }
  return null;
}

// Pitfalls
// Mutating arrays while iterating forwards (use reverse loop or adjust index).
// Using for...in on arrays—indices are strings and includes inherited props.

// Practice
// Rotate an array in-place k steps.
// Merge two sorted arrays into one sorted array without extra sorting.
// =====================================================================================================================================
// =====================================================================================================================================
// Objects: Frequency Counters, Grouping

// What & Why
// Objects (maps) are used as frequency counters, memoization stores, grouping results.

// Approach
// Identify key for grouping (a property or computed string).
// Use object/dictionary for counts or grouping lists.
// Frequency counter example

function frequency(arr) {
  const freq = {};
  for (let v of arr) freq[v] = (freq[v] || 0) + 1;
  return freq;
}

// Group by property

function groupBy(arr, key) {
  const out = {};
  for (let item of arr) {
    const k = item[key];
    if (!out[k]) out[k] = [];
    out[k].push(item);
  }
  return out;
}

// Pitfalls
// Using objects with numeric keys vs using Map (object keys are strings).
// Collision if using object stringification for grouping complex objects — create unique keys carefully.

// Practice
// Given array of people {name, age}, group by age.
// Find top K frequent elements using frequency counter.
// =====================================================================================================================================
// =====================================================================================================================================
// Functions: Closures, Recursion

// Closures — What & Approach
// A function that captures variables from outer scope. Useful for encapsulation and retaining state (e.g., counters, debounce).
// Debounce (closure) example
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Recursion — What & Approach
// Identify the base case(s).
// Ensure each recursive call progresses toward base case.
// Prefer iterative or memoization if recursion depth is large (stack limits).
// Factorial example
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Memoized Fibonacci
function fib(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Pitfalls
// Stack overflow with deep recursion.
// Missing base case causing infinite recursion.

// Practice
// Implement flatten nested arrays recursively.
// Generate all subsets (power set) using recursion.
// =====================================================================================================================================
// =====================================================================================================================================
// Loops & Conditions: Nested Loops, Edge Cases
// When to use nested loops
// Pairwise comparisons, matrix traversal, pattern printing.
// But nested loops are O(n²) — watch for performance.

// Approach
// Try to find linear or hash-based approach first for large n.
// When nesting, minimize inner loop work and break early when possible.
// Matrix example — spiral/transpose basics

// simple matrix transpose
function transpose(matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const res = Array.from({ length: n }, () => Array(m));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
}

// Edge cases checklist
// Empty inputs, single-element inputs.
// Null/undefined.
// Very large or negative numbers (when dealing with indices).

// Practice
// Print multiplication table using nested loops.
// Find maximum product of two numbers in an array (O(n²) then optimize).
// =====================================================================================================================================
// =====================================================================================================================================
// Math: Prime, Factorial, Fibonacci, GCD/LCM
// Prime check

// Efficient: test divisibility up to sqrt(n).
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// GCD (Euclidean algorithm)
function gcd(a, b) {
  while (b !== 0) {
    const tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

// LCM via GCD
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

// Fibonacci (iterative faster than naive recursion)
function fibIter(n) {
  if (n < 2) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Pitfalls
// Floating point precision when using division; use integers where possible.
// For huge factorials, use BigInt or special libraries.

// Practice
// Compute factorial using loop and recursion.
// Implement nCr (combinations) efficiently.
// =====================================================================================================================================
// =====================================================================================================================================
// Sorting/Searching: Bubble, Selection, Insertion, Binary Search
// Sorting building blocks
// Understand simple sorts (bubble/selection/insertion) conceptually — good for interviews.
// Learn divide & conquer sorts (merge sort, quick sort) for performance.
// Bubble Sort — O(n²)

function bubbleSort(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return a;
}

// Selection Sort — O(n²)
// Insertion Sort — O(n²), good for nearly-sorted arrays.
// Merge Sort — O(n log n), stable
// Split, sort halves, merge.
// Quick Sort — average O(n log n), in-place variants exist, watch worst-case O(n²).
// Binary Search — O(log n) on sorted arrays
function binarySearch(arr, target) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// Pitfalls

// Off-by-one when implementing binary search (mid calculation and lo<=hi vs lo<hi).
// Quick sort worst-case if pivot chosen poorly.

// Practice
// Implement merge sort and quick sort (no .sort()).
// Write binary search and variants (first occurrence, last occurrence).
// =====================================================================================================================================
// =====================================================================================================================================
// Recursion: Factorial, Flatten Array, Subsets
// Systematic recursive approach
// Identify base case(s).
// Define how to reduce problem to smaller subproblem.
// Think of function signature (what params to pass).
// Consider memoization if overlapping subproblems.
// Flatten example

function flatten(arr) {
  const res = [];
  for (let v of arr) {
    if (Array.isArray(v)) res.push(...flatten(v));
    else res.push(v);
  }
  return res;
}

// Subsets (power set)
function subsets(nums) {
  const res = [];
  function dfs(i, cur) {
    if (i === nums.length) {
      res.push([...cur]);
      return;
    }
    // exclude
    dfs(i + 1, cur);
    // include
    cur.push(nums[i]);
    dfs(i + 1, cur);
    cur.pop();
  }
  dfs(0, []);
  return res;
}

// Pitfalls
// Excessive copying in recursion — prefer passing indices and pushing/popping to reuse arrays.

// Practice
// Implement permutations, combinations, and generate parentheses (classic backtracking).
// =====================================================================================================================================
// =====================================================================================================================================
// ES6+: Spread, Destructuring, Async/Await
// Spread & Rest
// Spread ...arr expands, rest ...args collects.

// spread to clone
const a = [1, 2],
  b = [...a, 3];
// rest parameters
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}

// Destructuring
const [x, y] = [1, 2];
const { name, age } = { name: "M", age: 20 };

// Promises & async/await
// async functions return a Promise. await pauses until Promise resolves (must be inside async).

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await wait(1000);
  return "done";
}

// Approach for async problems
// Prefer async/await for readability.
// Use Promise.all for parallel independent async tasks (note error behavior).
// Catch errors with try/catch around await.

// Pitfalls
// forgetting await leads to unresolved promises.
// running sequential awaits when parallelism is allowed (use Promise.all).

// Practice
// Convert promise chains to async/await.
// Implement a small retry mechanism using async/await.
