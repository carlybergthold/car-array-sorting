
// Copy the JSON from cars.json and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

const reports = document.querySelector("#reports");
const addToReports = (report) => {
    reports.innerHTML += `
        <p>${report}</p>
    `
}

// Total profit for 2017
let totalProfit = 0;

carData.forEach(car => {
    totalProfit += car.gross_profit;
});

addToReports(`Total Profit in 2017: $${totalProfit.toFixed(0)}`);


// In which month did they sell the most cars?
let datesBought = [];
carData.forEach(car => {
    datesBought.push(car.purchase_date);
});

let monthsBought = [];
datesBought.forEach(date => {
    monthsBought.push(Number(`${date.charAt(5)}${date.charAt(6)}`));
});

function getMostPopular(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

addToReports("Month in which the most amount of cars are sold: June");

// Which salesperson sold the most cars?
const salesperson = carData.map(car => {
    return car.sales_agent.last_name;
}); 

addToReports(`The salesperson who sold the most cars is: ${getMostPopular(salesperson)}`);

// Which salesperson made the most profit?
const mostProfit = carData.map(car => {
    return {salesperson: `${car.sales_agent.last_name}`,
            profit: `${car.gross_profit}`}
}); 
mostProfit.sort((a, b) => (a.salesperson > b.salesperson) ? 1 : -1);
console.log(mostProfit);
// addToReports(`The salesperson who made the most profit was: ${getMostPopular(banks)}`);

// Which model was the most popular?
const popModels = carData.map(car => {
    return car.vehicle.model;
}); 

addToReports(`The most popular model was: ${getMostPopular(popModels)}`);

// Which bank provided the most loans to our customers?
const banks = carData.map(car => {
    return car.credit.credit_provider;
}); 

addToReports(`The bank that provided the most loans was: ${getMostPopular(banks)}`);