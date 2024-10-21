const olderCitizensSelect = document.getElementById('olderCitizens');
        const olderCitizensDetails = document.getElementById('olderCitizensDetails');
        const healthConditionContainer = document.getElementById('healthConditionContainer');
        const olderCitizensCount = document.getElementById('olderCitizensCount');

        olderCitizensSelect.addEventListener('change', function() {
            if (this.value === 'yes') {
                olderCitizensDetails.style.display = 'block';
            } else {
                olderCitizensDetails.style.display = 'none';
                olderCitizensCount.value = '';
                healthConditionContainer.style.display = 'none';
            }
        });

        olderCitizensCount.addEventListener('input', function() {
            if (this.value > 0) {
                healthConditionContainer.style.display = 'block';
            } else {
                healthConditionContainer.style.display = 'none';
                document.getElementById('healthCondition').value = '';
            }
        });

        const hasChildrenSelect = document.getElementById('hasChildren');
        const childrenDetails = document.getElementById('childrenDetails');
        const childrenCount = document.getElementById('childrenCount');
        const childrenEducationDetails = document.getElementById('childrenEducationDetails');

        hasChildrenSelect.addEventListener('change', function() {
            if (this.value === 'yes') {
                childrenDetails.style.display = 'block';
            } else {
                childrenDetails.style.display = 'none';
                childrenCount.value = '';
                childrenEducationDetails.innerHTML = '';
            }
        });

        childrenCount.addEventListener('input', function() {
            const count = parseInt(this.value);
            childrenEducationDetails.innerHTML = ''; // Clear previous fields
            if (count > 0) {
                for (let i = 1; i <= count; i++) {
                    const childEducationField = document.createElement('div');
                    childEducationField.innerHTML = `
                        <fieldset>
                            <legend>Child ${i} Educational Details</legend>
                            <label for="child${i}Name">Name:</label>
                            <input type="text" id="child${i}Name" name="child${i}Name" required>
                            
                            <label for="child${i}Age">Age:</label>
                            <input type="number" id="child${i}Age" name="child${i}Age" min="0" required>
                            
                            <label for="child${i}Education">Education Level:</label>
                            <input type="text" id="child${i}Education" name="child${i}Education" required>
                        </fieldset>
                    `;
                    childrenEducationDetails.appendChild(childEducationField);
                }
            }
        });

        const hasLoansSelect = document.getElementById('hasLoans');
        const loanDetails = document.getElementById('loanDetails');

        hasLoansSelect.addEventListener('change', function() {
            if (this.value === 'yes') {
                loanDetails.style.display = 'block';
            } else {
                loanDetails.style.display = 'none';
                document.getElementById('loanType').value = '';
                document.getElementById('loanAmount').value = '';
                document.getElementById('loanDuration').value = '';
            }
        });

        function calculateBudget() {
            const income = parseFloat(document.getElementById('income').value);
            const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
            const hasLoans = document.getElementById('hasLoans').value;
            const familySize = parseInt(document.getElementById('familyMembers').value);
            const olderCitizens = document.getElementById('olderCitizens').value;
            const hasChildren = document.getElementById('hasChildren').value;

            // Basic Budget Allocation
            let essentials = income * 0.5;
            let savings = income * 0.2;
            let discretionary = income * 0.3;
            let loanRepayment = 0;

            // Adjust based on Loans
            if (hasLoans === 'yes' && loanAmount > 0) {
                loanRepayment = loanAmount * 0.05;  
                discretionary -= loanRepayment; // Reduce discretionary spending based on loan repayment
            }

            // AI-like Adjustments for Family Size and Older Citizens
            if (familySize > 4) {
                essentials += income * 0.05;  // Allocate more to essentials for larger families
                discretionary -= income * 0.05;  // Reduce discretionary spending
            }

            if (olderCitizens === 'yes') {
                essentials += income * 0.03;  // Allocate more to essentials for healthcare needs
                discretionary -= income * 0.03;  // Reduce discretionary spending
            }

            if (hasChildren === 'yes') {
                savings += income * 0.05;  // Increase savings for children's education
                discretionary -= income * 0.05;  // Reduce discretionary spending
            }

            // Update the Budget Output
            document.getElementById('essentials').innerText = essentials.toFixed(2);
            document.getElementById('savings').innerText = savings.toFixed(2);
            document.getElementById('discretionary').innerText = discretionary.toFixed(2);
            document.getElementById('loanRepayment').innerText = loanRepayment.toFixed(2);

            document.getElementById('budgetOutput').style.display = 'block';
        }