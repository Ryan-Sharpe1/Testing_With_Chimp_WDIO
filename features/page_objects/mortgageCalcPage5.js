'use strict'

const locators = 
{
    'Main Credit Card':'#main_total_credit_card_balance',   
    'Joint Credit Card':'#joint_total_credit_card_balance',  
    'Main Personal Loans':'#main_monthly_unsecured',   
    'Joint Personal Loans':'#joint_monthly_unsecured',  
    'Main Secured Loans':'#main_monthly_secured',   
    'Joint Secured Loans':'#joint_monthly_secured',  
    'Main Buy Now Pay Later':'#main_monthly_dpa', 
    'Joint Buy Now Pay Later':'#joint_monthly_dpa',
    'Main Student Loan':'#main_monthly_student_loan',
    'Joint Student Loan':'#joint_monthly_student_loan',
    'Main Travel Costs':'#main_monthly_travel',  
    'Joint Travel Costs':'#joint_monthly_travel', 
    'Main Maintenance Costs':'#main_monthly_dependent_maintenance',  
    'Joint Maintenance Costs':'#joint_monthly_dependent_maintenance', 
    'Main Regular Monthly Costs':'#main_monthly_regular', 
    'Joint Regular Monthly Costs':'#joint_monthly_regular',
    'next step':'#step5Form a:nth-of-type(2)' 
}

export function sendValues(selector, value) {

    browser.element(locators[selector]).setValue(value);

}

export function clickNext(selector) {

    browser.element(locators[selector]).click();

}