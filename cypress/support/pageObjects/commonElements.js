
class commonElements{



    getNameInput(){

        return cy.get('input[name="name"]');

    }

    getMandatoryErrorMessage(){

        return  cy.get('div[class="ui red pointing below label"]');

    }


    getEmailInput(){

        return  cy.get('input[name="email"]');

    }

    getPhoneInput(){

        return cy.get('input[name="phone"]');

    }


    getCommentSection(){


        return cy.get('textarea[placeholder="Comment"]');

    }

    getFormErrorMessage(){

        return cy.get('div[class="ui error message"]');
    }


    getRentalNumberInput(){

        return cy.get('input[id="scroll-prop-plan"]');

    }



    getStarterPriceBox(){

        return cy.get('div[class="plan-price plan-price-2 text-dark"]');

    }

    getProfessionalPriceBox(){

        return cy.get('div[class="plan-price plan-price-1 btn-price-plan-prof text-dark"]');

    }

    getUltimatePriceBox(){

        return cy.get('div[class="plan-price plan-price-3 btn-price-plan-prof text-dark"]');

    }


    getCurrencySelector(){

        return cy.get('select[class="price-currency-select form-control input-sm form-control-bord-round"]');

    }


    getStarterPricePerMonth(){

        return cy.get('span[class="total-sum"]').eq(0);

    }

    getProfessionalPricePerMonth(){

        return cy.get('span[class="total-sum"]').eq(1);

    }

    getUltimatePricePerMonth(){

        return cy.get('span[class="total-sum"]').eq(2);

    }


    getMonthlyButton(){

        return  cy.get('li[data-price-period="1"]');
    }

    getYearlyButton(){

        return  cy.get('li[data-price-period="2"]');
    }

    getTwoYearsButton(){

        return  cy.get('li[data-price-period="3"]');
    }

}


export default commonElements