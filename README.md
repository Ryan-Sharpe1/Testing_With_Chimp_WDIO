Webdriver.io + CucumberJS automation test
====================

Implement the Feature file "src/features/mortgageCalculator.feature" according to the following:

- Navitage to https://nationwide.co.uk
- Using the Menu navigatge to "Mortgages" > "Mortgage Calculator" > "Mortgage Affordability Calculator"
- Calculate mortgage affordability for the following case:
  - Buy New Property
  - Borrow Amount = £225000
  - Term = 35 Years 0 Months
  - Amount of Occupants = 2
  - Ownership Type = Standard
  - Found new home
  - Purchase Price = £250,000
  - House Type = Semi-Detatched
  - Freehold
- Enter the Applicants Mock Personal Data:
  - Person 1:
    - D.O.B = 21/04/1996
    - Gender = Male
    - Children = 0
    - Retirement Status = No
    - Retirement Age = 70
  - Person 2:
    - D.O.B = 31/03/1995
    - Gender = Female
    - Children = 0
    - Retirement Status = No
    - Retirement Age = 70
- Enter the Applicants Employment Status:
  - Person 1:
    - Employment Status = Employed
    - Contract = Permanent
    - Salary = £28,000
    - Bonus = £1000
    - Length of Employment = 0 Years, 7 Months
    - Second Job = No
  - Person 2:
    - Employment Status = Employed
    - Contract = Permanent
    - Salary = £22,000
    - Bonus = £1000
    - Length of Employment = 0 Years, 7 Months
    - Second Job = No
- Enter the Applicants Financial Situation:
  - Person 1:
    - Credit Card = 600
    - Personal Loans = 0
    - Secured Loans = 0
    - Buy Now Pay Later = 0 
    - Student Loan = 0 
    - Travel Costs = 0
    - Maintenance Costs = 0 
    - Regular Monthly Costs = 75
  - Person 2:
    - Credit Card = 500
    - Personal Loans = 0
    - Secured Loans = 0
    - Buy Now Pay Later = 0 
    - Student Loan = 0
    - Travel Costs = 200
    - Maintenance Costs = 0 
    - Regular Monthly Costs = 50
- Check that the results given are:
  - Able to borrow = £257,000 over 35 Years and 0 Months
  - Minimum term = £225,000 over 25 Years and 0 Months

All steps above completed plese refer to feature files.

## Quick start
run `npm install`
run `chimp` by default this runs on chrome.


## Notes
I used chimp framework which uses both webdriver Io and cucumber js as instructed you also find the documentation here:https://www.npmjs.com/package/chimp
