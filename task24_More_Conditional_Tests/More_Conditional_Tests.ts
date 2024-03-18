
console.log("Equality test with strings:", "apple" === "apple"); 
console.log("Equality test with strings:", "apple" !== "apple"); 


console.log("Inequality test with strings:", ("Banana" as string) !== "orange"); 
console.log("Inequality test with strings:", "Banana" !== "Banana"); 


console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello"); 
console.log("Lowercase function test:", ("HELLO" as string) === "hello"); 


console.log("Equality test with numbers:", 5 === 5);
console.log("Equality test with numbers:", 5 !== 5); 

 
console.log("Inequality test with numbers:", (2 as number) !== 3);
console.log("Inequality test with numbers:", (2 as number) === 3); 


console.log("Greater than test:", 10 > 5);
console.log("Greater than test:", 5 > 10); 


console.log("Less than test:", 5 < 10);
console.log("Less than test:", 10 < 5);


console.log("Greater than or equal to test:", 10 >= 10);
console.log("Greater than or equal to test:", 9 >= 10);


console.log("Less than or equal to test:", 5 <= 10);
console.log("Less than or equal to test:", 10 <= 9);


console.log("And operator test:", true && true);
console.log("And operator test:", true && false);


console.log("Or operator test:", true || false);
console.log("Or operator test:", false || false);


const fruits :string[] = ["Apple", "Banana", "Mango"];
console.log("Test 'Mango' in the array:", fruits.includes("Mango")); 
console.log("Test 'Mango' in the array:", fruits.includes("Orange")); 

console.log("Testing 'Tarbooz' is not in array:", !fruits.includes("Orange")); 
console.log("Testing 'Tarbooz' is not in array:", !fruits.includes("Mango")); 
