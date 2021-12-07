// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import DatePickerPage from "../support/pageObjects/DatePickerPage"
import DateUtils from "../support/dateUtils/dateUtils"
import currencyUtils from "../support/currencyUtils/currencyUtils"

var datePickerPage = new DatePickerPage();
var dateUtils = new DateUtils();


Cypress.Commands.add('selectMonth',(monthName)=>{


    let currentMonth = new Date().getMonth()+1
    let giventMonth = dateUtils.getMonthIndexFromName(monthName)
    datePickerPage.getMonthAndYear1().then(($month)=>{

        if($month.text().includes(monthName)){

            cy.log(monthName+ ' month is selected')
            return
        }

        else{
            if(giventMonth > currentMonth){

                datePickerPage.goNext().click()


            }

            else if(giventMonth<currentMonth){

                datePickerPage.goPrev().click();

            }

        }

        cy.selectMonth(monthName)


    })


})











