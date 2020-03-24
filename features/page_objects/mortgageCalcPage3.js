'use strict'

const locators =
{

    'Main': '#main_first_job_employment_status',
    'Joint': '#joint_first_job_employment_status',
    'Main Employed':'[value="E"]',
    'Joint Employed':'[value="E"]',
    'Main Contract':'#main_first_employed_contract',
    'Joint Contract':'#joint_first_employed_contract',
    'Permanent':'[value="PM"]',
    'Main Salary':'#main_first_gross_income',
    'Joint Salary':'#joint_first_gross_income',
    'Main Bonus':'#main_first_bonus',
    'Joint Bonus':'#joint_first_bonus',
    'Main Overtime':'#main_first_overtime',
    'Joint Overtime':'#joint_first_overtime',
    'Main Commission':'#main_first_commission',
    'Joint Commission':'#joint_first_commission',
    'Main Length':'#main_first_time_in_employment_yy',
    'Joint Length':'#joint_first_time_in_employment_yy',
    'Main Second Job':'#main_have_second_employment_no',
    'Joint Second Job':'#joint_have_second_employment_no',
    'next step':'#step3Form a:nth-of-type(2)'

}

export function mapsendVal (selector, value) {

    browser.element(locators[selector]).setValue(value);

}

export function mapClick (selector) {

    browser.element(locators[selector]).click();

}

export function mapDrop(selector, selector2) {

    browser.element(locators[selector]).click(locators[selector2]);

}

export function sendValwithTab (selector, value1, value2) {

    browser.element(locators[selector]).setValue(value1);
    browser.element(locators[selector]).keys(['Tab'])
    browser.elementActive().setValue(value2)

}
