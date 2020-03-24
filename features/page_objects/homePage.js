'use strict'
export const locators =
  {
    'mortgages': '#MortgagesNavItem',
    'mortgage rates': '#MortgagesNavItem > .subNavigation div:nth-child(2) li:nth-child(1) > a'
  }

export function navigateToHomePage(url){
  browser.url(url)
}
export function hoverOnNavItem(navItem) {
  browser.waitForVisible(locators[navItem],5000,'Waited for some seconds and element was not visisble')
  return browser.moveToObject(locators[navItem]).pause(500)
}

export function clickNavItem(navItem) {
  return browser.click(locators[navItem])
}
