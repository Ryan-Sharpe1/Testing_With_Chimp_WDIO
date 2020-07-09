'use strict'
// Locators relating to the elements on the webpage
export const locators = 
{
    'mortgages': '#MortgagesNavItem',
    'mortgage calculators': '#MortgagesNavItem > .subNavigation div:nth-child(2) li:nth-child(2) > a',
    'mortgage affordability calculator': '[href="/products/mortgages/our-mortgages/mortgage-calculators/mortgage-affordability-calculator"]'
}

// Opens the browser environment and waits for the page to load
export function navigatingToHomePage(url){
    browser.url(url)
    browser.sleep(1000)
}

// Waiting for the element to be visibile and then moving the cursor 
export function hoverNav(navLink) {
    browser.waitForVisible(locators[navLink],10000,'Waited for item and it is not Visible')
    return browser.moveToObject(locators[navLink]).pause(500)
}

// Clicks the element
export function clickNav(navLink) {
    return browser.click(locators[navLink])
}