/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   let a = {};
//   for (let i = 0; i < transactions.length; i++) {
//     let trans = transactions[i];
//     let { category, price } = trans;

//     if (category in a) {
//       a[category] += price;
//     } else {
//       a[category] = price;
//     }
//     const result = [];
//     for (let category in a) {
//       result.push({ category, totalSpent: a[category] });
//     }
//     return result;
//   }
//   return [];
// }

// function calculateTotalSpentByCategory(transactions) {
//   if (!Array.isArray(transactions)) {
//     throw new Error("Input must be an array of transactions");
//   }

//   const categoryTotals = {};

//   for (let i = 0; i < transactions.length; i++) {
//     const transaction = transactions[i];

//     if (
//       typeof transaction !== "object" ||
//       !("category" in transaction) ||
//       typeof transaction.category !== "string" ||
//       !("price" in transaction) ||
//       typeof transaction.price !== "number"
//     ) {
//       console.error("Invalid transaction format:", transaction);
//       continue; // Skip invalid transactions
//     }

//     const { category, price } = transaction;

//     if (category in categoryTotals) {
//       categoryTotals[category] += price;
//     } else {
//       categoryTotals[category] = price;
//     }
//   }

//   const result = [];

//   for (let category in categoryTotals) {
//     result.push({ category, totalSpent: categoryTotals[category] });
//   }

//   return result;
// }

function calculateTotalSpentByCategory(transactions) {
  // Check if the input is an array
  if (!Array.isArray(transactions)) {
    throw new Error("Input must be an array of transactions");
  }

  // Object to store total spending by category
  const categoryTotals = {};

  // Loop through each transaction in the array
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    // Check if the transaction has the required properties
    if (
      typeof transaction !== "object" ||
      typeof transaction.category !== "string" ||
      typeof transaction.price !== "number"
    ) {
      console.error("Invalid transaction format:", transaction);
      continue; // Skip invalid transactions
    }

    // Update total spending for each category
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] += transaction.price;
    } else {
      categoryTotals[transaction.category] = transaction.price;
    }
  }

  // Array to store the final result
  const result = [];

  // Convert the object to an array of objects
  for (let category in categoryTotals) {
    result.push({ category, totalSpent: categoryTotals[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
