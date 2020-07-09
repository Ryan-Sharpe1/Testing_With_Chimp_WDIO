'use strict'

const locators = 
{
    'Council Tax':'#property_council_tax',
    'House Insurance':'#property_building_insurance',
    'Main Other Mortgages':'#main_do_you_have_other_mortgages_no',
    'Joint Other Mortgages':'#joint_do_you_have_other_mortgages_no',
    'next step':'#step6Form a:nth-of-type(2)'
}

export function sendVal (selector, value) {

    browser.element(locators[selector]).setValue(value);

}

export function clickButt (selector) {

    browser.element(locators[selector]).click();
}