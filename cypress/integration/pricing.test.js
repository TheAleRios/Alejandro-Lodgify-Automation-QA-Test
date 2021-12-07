import commonElements from "../support/pageObjects/commonElements"

context('Lodgify pricing page', () => {

var rentalNumber = "50"
var expectedStarterPrice = "64"
var expectedProfessionalPrice = "375"
var expectedUltimatePrice = "525"

var yearlyDiscount = 30
var twoYearsDiscount = 35   

var usdCurrency = "$ USD"
var eurCurrency = "€ EUR"
var gbpCurrency = "£ GBP"

const { currencyRate } = require('../support/currencyUtils/currencyUtils.js')

  beforeEach(() => {
    cy.visit('http://localhost:8080/pricing.html');
  })

  var element = new commonElements();

  it('Should have $'+expectedStarterPrice+' Starter price for '+rentalNumber+ ' rental numbers', () => {

    
    element.getRentalNumberInput().clear();
    element.getRentalNumberInput().type(rentalNumber);
    element.getStarterPriceBox().contains(expectedStarterPrice);


  });



  it('Should have $'+expectedProfessionalPrice+' Starter price for '+rentalNumber+ ' rental numbers', () => {


    element.getRentalNumberInput().clear();
    element.getRentalNumberInput().type(rentalNumber);
    element.getProfessionalPriceBox().contains(expectedProfessionalPrice);


  });



  it('Should have $'+expectedUltimatePrice+' Starter price for '+rentalNumber+ ' rental numbers', () => {


    element.getRentalNumberInput().clear();
    element.getRentalNumberInput().type(rentalNumber);
    element.getUltimatePriceBox().contains(expectedUltimatePrice);


  });


  it('Should check yearly '+yearlyDiscount+'% discount in Starter Price', () => {

    
    element.getMonthlyButton().click().then(()=>{ 

        element.getStarterPricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getYearlyButton().click().then(()=>{ 

                element.getStarterPricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * yearlyDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});



it('Should check two years ' +twoYearsDiscount+'% discount in Starter Price', () => {


    element.getMonthlyButton().click().then(()=>{ 

        element.getStarterPricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getTwoYearsButton().click().then(()=>{ 

                element.getStarterPricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * twoYearsDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});


///Professional

it('Should check yearly '+yearlyDiscount+'% discount in Professional Price', () => {


    element.getMonthlyButton().click().then(()=>{ 
        
        element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getYearlyButton().click().then(()=>{ 

                element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * yearlyDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});



it('Should check two years ' +twoYearsDiscount+'% discount in Professional Price', () => {


    element.getMonthlyButton().click().then(()=>{ 

        element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getTwoYearsButton().click().then(()=>{ 

                element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * twoYearsDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});  


///Ultimate

it('Should check yearly '+yearlyDiscount+'% discount in Ultimate Price', () => {


    element.getMonthlyButton().click().then(()=>{ 
        
        element.getUltimatePricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getYearlyButton().click().then(()=>{ 

                element.getUltimatePricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * yearlyDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});



it('Should check two years ' +twoYearsDiscount+'% discount in Ultimate Price', () => {


    element.getMonthlyButton().click().then(()=>{ 

        element.getUltimatePricePerMonth().invoke('text').then((price) =>{
            var monthlyPrice = parseInt(price)

            element.getTwoYearsButton().click().then(()=>{ 

                element.getUltimatePricePerMonth().invoke('text').then((price) =>{
                    
                    var yearlyPrice = parseInt(price)

                    const discount = Math.round((monthlyPrice / 100) * twoYearsDiscount)

                    expect(yearlyPrice).to.eq(monthlyPrice-discount);  

                });
            });
        });
    });
});


////////Currency tests


it('Should select different currencies', () => {

  element.getCurrencySelector().select(usdCurrency).then(()=>{

    element.getCurrencySelector().find('option:selected').should('have.text', '$ USD');

      });

  element.getCurrencySelector().select(eurCurrency).then(()=>{

  element.getCurrencySelector().find('option:selected').should('have.text', '€ EUR');

     });

  element.getCurrencySelector().select(gbpCurrency).then(()=>{

  element.getCurrencySelector().find('option:selected').should('have.text', '£ GBP');

  cy.log(currencyRate.usdToEurs);

    });


});



it('Should change from USD to EUR with proper Currency Rate in Starter Price box', () => {


  //Check Starter Price
  element.getCurrencySelector().select(usdCurrency).then(()=>{
  
    element.getStarterPricePerMonth().invoke('text').then((price) =>{
      var usdPrice = parseInt(price)

        element.getCurrencySelector().select(eurCurrency).then(()=>{

          element.getStarterPricePerMonth().invoke('text').then((price) =>{

           var eurPrice = parseInt(price)
           var expectedPrice = usdPrice*currencyRate.usdToEurs;
           expect(eurPrice).to.eq(Math.round(expectedPrice));

        });

      });

    });

  });

});


it('Should change from USD to EUR with proper Currency Rate in Professional Price box', () => {

  //Check Professional Price
  element.getCurrencySelector().select(usdCurrency).then(()=>{
    
    element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
      var usdPrice = parseInt(price)

        element.getCurrencySelector().select(eurCurrency).then(()=>{

          element.getProfessionalPricePerMonth().invoke('text').then((price) =>{

           var eurPrice = parseInt(price)
           var expectedPrice = usdPrice*currencyRate.usdToEurs;
           expect(eurPrice).to.eq(Math.round(expectedPrice));

        });

      });

    });

  });    

});

it('Should change from USD to EUR with proper Currency Rate in Ultimate Price box', () => {

  //Check Ultimate Price
  element.getCurrencySelector().select(usdCurrency).then(()=>{
  
    element.getUltimatePricePerMonth().invoke('text').then((price) =>{
      var usdPrice = parseInt(price)

        element.getCurrencySelector().select(eurCurrency).then(()=>{

          element.getUltimatePricePerMonth().invoke('text').then((price) =>{

           var eurPrice = parseInt(price)
           var expectedPrice = usdPrice*currencyRate.usdToEurs;
           expect(eurPrice).to.eq(Math.round(expectedPrice));

        });

      });

    });

  });

}); 
//usdToGbp tests

it('Should change from USD to GBP with proper Currency Rate in Starter Price box', () => {


  //Check Starter Price
  element.getCurrencySelector().select(usdCurrency).then(()=>{
  
    element.getStarterPricePerMonth().invoke('text').then((price) =>{
      var usdPrice = parseInt(price)

        element.getCurrencySelector().select(gbpCurrency).then(()=>{

          element.getStarterPricePerMonth().invoke('text').then((price) =>{

           var gbpPrice = parseInt(price)
           var expectedPrice = usdPrice*currencyRate.usdToGbp;
           expect(gbpPrice).to.eq(Math.round(expectedPrice));

        });

      });

    });

  });

});

it('Should change from USD to GBP with proper Currency Rate in Professional Price box', () => {

    //Check Professional Price
    element.getCurrencySelector().select(usdCurrency).then(()=>{
  
    
      element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
        var usdPrice = parseInt(price)

          element.getCurrencySelector().select(gbpCurrency).then(()=>{

            element.getProfessionalPricePerMonth().invoke('text').then((price) =>{

             var gbpPrice = parseInt(price)
             var expectedPrice = usdPrice*currencyRate.usdToGbp;
             expect(gbpPrice).to.eq(Math.round(expectedPrice));

          });

        });

      });
  
    });

});


it('Should change from USD to GBP with proper Currency Rate in Ultimate Price box', () => {

  
  //Check Ultimate Price
  
  element.getCurrencySelector().select(usdCurrency).then(()=>{
  
    element.getUltimatePricePerMonth().invoke('text').then((price) =>{
      var usdPrice = parseInt(price)

        element.getCurrencySelector().select(gbpCurrency).then(()=>{

          element.getUltimatePricePerMonth().invoke('text').then((price) =>{

           var gbpPrice = parseInt(price)
           var expectedPrice = usdPrice*currencyRate.usdToGbp;
           expect(gbpPrice).to.eq(Math.round(expectedPrice));

        });

      });

    });

  });

});


//eursToUsd tests


  it('Should change from EUR to USD with proper Currency Rate in Starter Price box', () => {


    //Check Starter Price
    element.getCurrencySelector().select(eurCurrency).then(()=>{
    
      element.getStarterPricePerMonth().invoke('text').then((price) =>{
        var eurPrice = parseInt(price)

          element.getCurrencySelector().select(usdCurrency).then(()=>{

            element.getStarterPricePerMonth().invoke('text').then((price) =>{

             var usdPrice = parseInt(price)
             var expectedPrice = eurPrice*currencyRate.eursToUsd;
             expect(usdPrice).to.eq(Math.round(expectedPrice));

          });

        });

      });
  
    });

  });


  it('Should change from EUR to USD with proper Currency Rate in Professional Price box', () => {
  

    //Check Professional Price
    element.getCurrencySelector().select(eurCurrency).then(()=>{
      
      element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
        var eurPrice = parseInt(price)

          element.getCurrencySelector().select(usdCurrency).then(()=>{

            element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
              
             var usdPrice = parseInt(price)
             var expectedPrice = eurPrice*currencyRate.eursToUsd;
             expect(usdPrice).to.eq(Math.round(expectedPrice));

          });

        });

      });
  
    });    

  });

  it('Should change from EUR to USD with proper Currency Rate in Ultimate Price box', () => {

    //Check Ultimate Price
    element.getCurrencySelector().select(eurCurrency).then(()=>{
    
      element.getUltimatePricePerMonth().invoke('text').then((price) =>{
        var eurPrice = parseInt(price)

          element.getCurrencySelector().select(usdCurrency).then(()=>{

            element.getUltimatePricePerMonth().invoke('text').then((price) =>{

             var usdPrice = parseInt(price)
             var expectedPrice = eurPrice*currencyRate.eursToUsd;
             expect(usdPrice).to.eq(Math.round(expectedPrice));

          });

        });

      });
  
    });

  }); 


// eursToGbp tests


it('Should change from EUR to GBP with proper Currency Rate in Starter Price box', () => {


//Check Starter Price
element.getCurrencySelector().select(eurCurrency).then(()=>{

  element.getStarterPricePerMonth().invoke('text').then((price) =>{
    var eurPrice = parseInt(price)

      element.getCurrencySelector().select(gbpCurrency).then(()=>{

        element.getStarterPricePerMonth().invoke('text').then((price) =>{

         var gbpPrice = parseInt(price)
         var expectedPrice = eurPrice*currencyRate.eursToGbp;
         expect(gbpPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

});


it('Should change from EUR to GBP with proper Currency Rate in Professional Price box', () => {


//Check Professional Price
element.getCurrencySelector().select(eurCurrency).then(()=>{
  
  element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
    var eurPrice = parseInt(price)

      element.getCurrencySelector().select(gbpCurrency).then(()=>{

        element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
          
         var gbpPrice = parseInt(price)
         var expectedPrice = eurPrice*currencyRate.eursToGbp;
         expect(gbpPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});    

});

it('Should change from EUR to GBP with proper Currency Rate in Ultimate Price box', () => {

//Check Ultimate Price
element.getCurrencySelector().select(eurCurrency).then(()=>{

  element.getUltimatePricePerMonth().invoke('text').then((price) =>{
    var eurPrice = parseInt(price)

      element.getCurrencySelector().select(gbpCurrency).then(()=>{

        element.getUltimatePricePerMonth().invoke('text').then((price) =>{

         var gbpPrice = parseInt(price)
         var expectedPrice = eurPrice*currencyRate.eursToGbp;
         expect(gbpPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

}); 

// gbpToUsd tests

it('Should change from GBP to USD with proper Currency Rate in Starter Price box', () => {


//Check Starter Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{

  element.getStarterPricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(usdCurrency).then(()=>{

        element.getStarterPricePerMonth().invoke('text').then((price) =>{

         var usdPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToUsd;
         expect(usdPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

});

it('Should change from GBP to USD with proper Currency Rate in Professional Price box', () => {


//Check Professional Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{
  
  element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(usdCurrency).then(()=>{

        element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
          
         var usdPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToUsd;
         expect(usdPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});    

});

it('Should change from GBP to USD with proper Currency Rate in Ultimate Price box', () => {

//Check Ultimate Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{

  element.getUltimatePricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(usdCurrency).then(()=>{

        element.getUltimatePricePerMonth().invoke('text').then((price) =>{

         var usdPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToUsd;
         expect(usdPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

}); 


//gbpToEurs tests

it('Should change from GBP to EUR with proper Currency Rate in Starter Price box', () => {


//Check Starter Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{

  element.getStarterPricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(eurCurrency).then(()=>{

        element.getStarterPricePerMonth().invoke('text').then((price) =>{

         var eurPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToEurs;
         expect(eurPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

});


it('Should change from GBP to EUR with proper Currency Rate in Professional Price box', () => {


//Check Professional Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{
  
  element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(eurCurrency).then(()=>{

        element.getProfessionalPricePerMonth().invoke('text').then((price) =>{
          
         var eurPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToEurs;
         expect(eurPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});    

});

it('Should change from GBP to EUR with proper Currency Rate in Ultimate Price box', () => {

//Check Ultimate Price
element.getCurrencySelector().select(gbpCurrency).then(()=>{

  element.getUltimatePricePerMonth().invoke('text').then((price) =>{
    var gbpPrice = parseInt(price)

      element.getCurrencySelector().select(eurCurrency).then(()=>{

        element.getUltimatePricePerMonth().invoke('text').then((price) =>{

         var eurPrice = parseInt(price)
         var expectedPrice = gbpPrice*currencyRate.gbpToEurs;
         expect(eurPrice).to.eq(Math.round(expectedPrice));

      });

    });

  });

});

}); 




//////




})