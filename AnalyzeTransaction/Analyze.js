// create a function which have three parameters.
function analyzeTransactions(transactions,startDate,endDate){
const categoryTotals = {};

//loop through an array
 transactions.forEach(transaction => {
    const{category,amount,date} = transaction;

    if(date>=startDate && date<=endDate){

        if(categoryTotals[category]){
            categoryTotals[category] += amount;
        }else{
            categoryTotals[category] = amount;
        }
    }
    
 });
  return categoryTotals;
}

//for example
const transactions = [
    { category: 'Groceries', amount: 50, date: new Date('2024-04-01') },
    { category: 'Dining', amount: 30, date: new Date('2024-04-05') },
    { category: 'Groceries', amount: 20, date: new Date('2024-04-10') },
    { category: 'Transportation', amount: 40, date: new Date('2024-04-15') },
    { category: 'Dining', amount: 25, date: new Date('2024-04-20') }
  ];
  
  const startDate = new Date('2024-04-01');
  const endDate = new Date('2024-04-30');
  
  const result = analyzeTransactions(transactions, startDate, endDate);

  //print result
  console.log(result);