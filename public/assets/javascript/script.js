function generateBudget() {
    const income = document.getElementById('income').value;
    if (income <= 0) {
        alert("Please enter a valid income.");
        return;
    }
  
    // Budget percentages (you can adjust these as needed)
    const budgetPercentages = {
        Savings: 0.15,
        Housing: 0.25,
        Food: 0.15,
        Utilities: 0.07,
        Transportation: 0.10,
        Entertainment: 0.05,
        Education: 0.13,
        Health: 0.05,
        Clothing: 0.05 
    };
  
    const budgetPlan = document.getElementById('budget-plan');
    budgetPlan.innerHTML = ''; // Clear previous results
  
    // Create budget plan
    for (let category in budgetPercentages) {
        let amount = income * budgetPercentages[category];
        let budgetItem = document.createElement('div');
        budgetItem.className = 'budget-item';
        budgetItem.innerHTML = `<span>${category}</span><span> $${amount.toFixed(2)}</span>`;
        budgetPlan.appendChild(budgetItem);
    }
}
