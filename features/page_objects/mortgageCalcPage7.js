'use strict'
var assert = require('assert');

const locators = 
{
    'Step 1':'#calcStep1 li:nth-of-type(1)',
    'Step 2':'#calcStep2 li:nth-of-type(1)',
    'Step 3':'#calcStep3 li:nth-of-type(1)',
    'Step 4':'#calcStep4 li:nth-of-type(1)',
    'Step 5':'#calcStep5 li:nth-of-type(1)',
    'Step 6':'#calcStep6 li:nth-of-type(1)',
    //'Maximum Amount':'#result_mortgage_amount',
   // 'Maximum Term':'#calcStep7 p:nth-of-type(2) span:nth-child(1)',
    'Minimum Amount':'#calcStep7 div:nth-of-type(10) span:nth-child(1)',
    //'Minimum Term':'#calcStep7 div:nth-of-type(8) p:nth-child(1)'
    
}

export function checkText(selector, steps){

    assert.equal(browser.getText(locators[selector]), steps)
}

export function checkAmount(amount, length) {

    console.log(browser.getText(locators['Mortgage Result1']))
    
    console.log(browser.getText(locators['Mortgage Term1']))

    browser.getText(locators['Mortgage Result2'])

    console.log(browser.getText(locators['Mortgage Term2']))

    assert.equal(browser.getText(locators['Mortgage Result1']), amount);

    assert.equal(browser.getText(locators['Mortgage Term1']), length);
}

export function checkAmount2(amount, length) {

}
