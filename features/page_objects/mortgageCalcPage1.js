'use strict'
export const locators = 
{
    'what i would like to do':'#borrower_type',
    'Buy new property':'[value="MG"]',
    'borrow':'#required_loan',
    'year':'#requested_term_yy',
    'month':'#requested_term_mm',
    'two people applying':'#sole_or_joint_joint',
    'ownership type':'#property_ownership',
    'standard':'[value="SD"]',
    'Found new home':'#have_found_property_yes',
    'purchase price':'#purchase_price',
    'house type':'#property_type',
    'Semi-Detatched':'[value="2"]',
    'and':'#property_tenure',
    'freehold':'[value="0"]',
    'next step':'[class="button buttonStyle01 continue"]'
}

export function clickButt (selector) {
    browser.waitForVisible(locators[selector], 5000, 'Waited and not found element')
    browser.click(locators[selector]);
}

export function setVal(selector, value) {
    browser.element(locators[selector]).setValue(value);
}

