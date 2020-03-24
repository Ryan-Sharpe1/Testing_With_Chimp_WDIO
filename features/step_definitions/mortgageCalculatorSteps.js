'use strict'
import * as homeNav from '../page_objects/homeNavigation'
import * as morgCalc1 from '../page_objects/mortgageCalcPage1'
import * as morgCalc2 from '../page_objects/mortgageCalcPage2'
import * as morgCalc3 from '../page_objects/mortgageCalcPage3'
import * as morgCalc4 from '../page_objects/mortgageCalcPage4'
import * as morgCalc5 from '../page_objects/mortgageCalcPage5'

module.exports = function () {

    this.Given(/^I open the page "([^"]*)"$/, function (url){

        homeNav.navigatingToHomePage(url);

    })

    this.When(/^I search for "([^"]*)" via "([^"]*)"$/, function (secondaryNavLink, navLink) {

        homeNav.hoverNav(navLink);
        homeNav.clickNav(secondaryNavLink);

    })

    this.When(/^I choose the "([^"]*)"$/, function (calcButton) {

        homeNav.clickNav(calcButton);

    })

    this.When(/^I click the chose "([^"]*)" and click "([^"]*)"$/, function (whatDo, buyNew) {

        morgCalc1.clickButt(whatDo);
        morgCalc1.clickButt(buyNew);

      })

      this.When(/^I choose to "([^"]*)" an amount of "([^"]*)"$/, function (borrow, amount) {

        morgCalc1.setVal(borrow, amount);
        
      })

      this.When(/^select a mortgage term "([^"]*)" and "([^"]*)" of "([^"]*)" years and "([^"]*)" months$/, function (year, month, yearFig, monthFig) {

        morgCalc1.setVal(year, yearFig);
        morgCalc1.setVal(month, monthFig);

      })

      this.When(/^I have clicked "([^"]*)"$/, function (people) {

        morgCalc1.clickButt(people);

      })

      this.When(/^I choose the "([^"]*)" of "([^"]*)"$/, function (ownership, standard) {

        morgCalc1.clickButt(ownership);
        morgCalc1.clickButt(standard);

      })

      this.When(/^I select "([^"]*)"$/, function (home) {

        morgCalc1.clickButt(home);

      })

      this.When(/^declare a "([^"]*)" of "([^"]*)"$/, function (price, priceFig) {

        morgCalc1.setVal(price, priceFig);

      })

      this.When(/^I choose "([^"]*)" of "([^"]*)"$/, function (type, semi) {

        morgCalc1.clickButt(type);
        morgCalc1.clickButt(semi);

      })

      this.When(/^"([^"]*)" it is "([^"]*)"$/, function (and, free) {

        morgCalc1.clickButt(and);
        morgCalc1.clickButt(free);

      })

      this.Then(/^I click "([^"]*)"$/, function (next) {

        morgCalc1.clickButt(next);

      })

      this.Then(/^I enter the date of birth of both applicants:$/, function (tableData) {

        var data = tableData.raw();

        data.map(function(value) {
          morgCalc2.dateOfBirth(value[0], value[1]);

        })
      })

      this.When(/^I select the following genders for both applicants:$/, function (table) {

        var data = table.rows();

        data.map(function(value) {
          morgCalc2.genderSelect(value[0]);

        })
      });

      this.Then(/^enter that the following responsibilities for both applicants:$/, function (table) {

        var data = table.rows();

        data.map(function(value){
          morgCalc2.applicantResponsibilities(value[0], value[1]);

        })
      });

      this.Then(/^confirm the following retirement status of both applicants:$/, function (table) {

        var data =table.rows();

        data.map(function(value) {
          morgCalc2.retirementStatus(value[0]);

        })
      });

      this.Then(/^confirm the following ages of retirement for both applicants:$/, function (table) {

        var data = table.rows();

        data.map(function(value) {
          morgCalc2.retirementAge(value[0], value[1]);

        })
      });

      this.Then(/^I can progress to the "([^"]*)"$/, function (nextStep) {

        morgCalc2.clickButt(nextStep);

      });

      this.When(/^I select the following employment status for both parties:$/, function (table) {

        var data = table.raw()
        
        data.map(function(value){
          morgCalc3.mapDrop(value[0], value[1]);
          
        })
      });

      this.When(/^I enter the following employment status:$/, function (table) {

        var data = table.raw();

        data.map(function(value){
          morgCalc3.mapDrop(value[0], value[1]);

        })
      });

      this.When(/^I then fill in the subsequent information:$/, function (table) {
        
        var data = table.raw();

        data.map(function(value){
          morgCalc3.mapsendVal(value[0],value[1]);

        })
      });

      this.When(/^I enter their length of employment:$/, function (table) {
        
        var data = table.rows();

        data.map(function(value){
          morgCalc3.sendValwithTab(value[0],value[1], value[2]);
          
        })
      });

      this.When(/^I enter whether the applicant has a second job:$/, function (table) {
        
        var data = table.raw();

        data.map(function(value){
          morgCalc3.mapClick(value[0]);

        })
      });

      this.Then(/^I can click "([^"]*)"$/, function (nextStep3) {

        morgCalc3.mapClick(nextStep3);
        
      });

      this.When(/^I outline the following additional job details:$/, function (table) {

        var data = table.raw();
      
        data.map(function(value){
          morgCalc4.clickButt(value[0]);

        })
      })
      
      this.Then(/^I can click on the "([^"]*)" button$/, function (nextStep4) {

        morgCalc4.clickButt(nextStep4)
      })
    
      this.When(/^the below information is added for both applicants:$/, function (table) {
        
        var data = table.raw();

        data.map(function(value) {
          morgCalc5.sendValues(value[0], value[1]);
        })
      });

      this.Then(/^I click the "([^"]*)" Button$/, function (nextStep5) {
        
        morgCalc5.clickNext(nextStep5)
      });

}