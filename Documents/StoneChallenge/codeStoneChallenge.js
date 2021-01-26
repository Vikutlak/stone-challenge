const products = [
  {
    item: 'coffee',
    numberOfItems: 1,
    price: 100,
  },
  {
    item: 'chocolate',
    numberOfItems: 1,
    price: 208,
  },
  {
    item: 'paper',
    numberOfItems: 2,
    price: 300,
  },
];

const emails = [
  {
    name: 'Mary',
    myDebt: 0,
  },
  {
    name: 'John',
    myDebt: 0,
  },
  {
    name: 'Aubrey',
    myDebt: 0,
  },
];

function stone(listItems, listEmails) {
  if(listItems.length === 0) {
    return console.error("Insert a valid item list.");
  }

  if(listEmails.length === 0) {
    return console.error("Insert a valid email list.");
  }

  let debtSum = 0;
  for(let i=0; i<listItems.length; i++){
    if(listItems[i].price < 0) {      
      return console.error(`The price for ${listItems[i].item} is not accepted.`);
    }
    debtSum += listItems[i].price * listItems[i].numberOfItems;
  }

  let paidDebt = 0

  for(let j=0; j<listEmails.length; j++){
    if (j === (listEmails.length - 1)){
      let debtNumber = (debtSum - paidDebt); 
      listEmails[j].myDebt = debtNumber;
    }
    else {
      let debtNumber = Math.round(debtSum/listEmails.length);      
      listEmails[j].myDebt = debtNumber;
      paidDebt += debtNumber;
    }
  }

  return listEmails;
}

const desafio = stone(products, emails);
console.log(desafio);
