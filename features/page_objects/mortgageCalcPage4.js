'use strict'

const locators = 
{
    'Main Second Job':'#main_have_additional_income_no',
    'Joint Second Job':'#joint_have_additional_income_no',
    'next step':'#step4Form a:nth-of-type(2)'
}

export function clickButt (selector) {

    browser.element(locators[selector]).click();
}