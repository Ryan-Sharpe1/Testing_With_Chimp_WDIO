'use strict'

export const locators = 
{

    'Day 1':'#main_date_of_birth_d',
    'Day 2':'#joint_date_of_birth_d',
    'Month 1':'#main_date_of_birth_m',
    'Month 2':'#joint_date_of_birth_m',
    'Year 1':'#main_date_of_birth_y',
    'Year 2':'#joint_date_of_birth_y',
    'Male':'#main_gender_male',
    'Female':'#joint_gender_female',
    'MainRe':'#main_no_of_dependants',
    'JointRe':'#joint_no_of_dependants',
    '0M':'[value="0"]',
    '0J':'[value="0"]',
    'Main No':'#main_are_retired_no',
    'Joint No':'#joint_are_retired_no',
    'MainRA':'#main_planned_retirement_age',
    'JointRA':'#joint_planned_retirement_age',
    '70M':'[value="70"]',
    '70J':'[value="70"]',
    'next step':'#step2Form a:nth-of-type(2)'
    
}

export function dateOfBirth (selector, value) { 

    browser.element(locators[selector]).setValue(value);

}

export function genderSelect (selector) {

    browser.element(locators[selector]).click();

}

export function applicantResponsibilities (selector, selector2) {

    browser.element(locators[selector]).click(locators[selector2]);

}

export function retirementStatus (selector) {

    browser.element(locators[selector]).click();

}

export function retirementAge (selector, selector2) {

    browser.element(locators[selector]).click(locators[selector2]);
}


export function clickButt (selector) {
    
    browser.element(locators[selector], 5000, 'Waited and not found element');
    browser.click(locators[selector]);
}

