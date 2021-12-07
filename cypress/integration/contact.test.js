import DatePickerPage from "../support/pageObjects/DatePickerPage"

import commonElements from "../support/pageObjects/commonElements"

var month1="April"
var month2="June"
var daySince="14"
var dayTo="14"

describe('Lodgify contact page', function() {
  
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/Contact.html')
  })


   var datePicker = new DatePickerPage();
   var element = new commonElements();
 
it('Should have the Date picker working chossing ' + month1 + ' '+daySince+ ' and '+month2 +' ' +dayTo, function() {
 

   cy.wait(1000);
   cy.window().then(win =>{win.first=true})
   cy.window().its('first').should('be.true');
   datePicker.getCalendar().click();

    cy.selectMonth(month1)
    cy.get('td[aria-label*="'+month1+' '+daySince+'"]').click();
    cy.selectMonth('June')
    cy.get('td[aria-label*="'+month2+' '+dayTo+'"]').click();

   });


   it('Should have the name input section as mandatory', () => {
 
    //cy.get('input[name="name"]').invoke('val').should('be.empty').then(()=>{
    element.getNameInput().invoke('val').should('be.empty').then(()=>{
    element.getNameInput().click();
   // cy.get('input[name="name"]').click();
    cy.get('body').click(0,0);
    element.getMandatoryErrorMessage().contains('Name is mandatory');
    //cy.get('div[class="ui red pointing below label"]').contains('Name is mandatory');
      
      
    });
  
  
  });
  
  it('Should have the email input section as mandatory', () => {
   
    
    element.getEmailInput().invoke('val').should('be.empty').then(()=>{
    element.getEmailInput().click();
    cy.get('body').click(0,0);
    element.getMandatoryErrorMessage().contains('Email is mandatory');
      
  
    });
  
  
  });
  
  
  it('Should have the phone input section as mandatory', () => {
   
    
    element.getPhoneInput().invoke('val').should('be.empty').then(()=>{
    element.getPhoneInput().click();
    cy.get('body').click(0,0);
    element.getMandatoryErrorMessage().contains('Phone is mandatory');
      
  
    });
  
  
  });
  
  
  it('Should have the Comment input section as mandatory', () => {
   
    
    element.getCommentSection().invoke('val').should('be.empty').then(()=>{
    element.getCommentSection().click();
    cy.get('body').click(0,0);
    element.getMandatoryErrorMessage().contains('Comment is mandatory');
      
  
    });
  
  
  });
  
  
  
  it('Should have the Comment input working', () => {
    element.getCommentSection().invoke('val').should('be.empty').then(()=>{
    element.getCommentSection().type('lorem ipsum');
    cy.get('body').click(0,0);
 
    });
  
    });

    
    it('Should have the name input working', () => {
 
      element.getNameInput().invoke('val').should('be.empty').then(()=>{
      element.getNameInput().type('name');
      cy.get('body').click(0,0);

    
      });
    
    
    });


    it('Should have the email input working', () => {
 
      element.getEmailInput().invoke('val').should('be.empty').then(()=>{
      element.getEmailInput().type('something@gmail.com');
      cy.get('body').click(0,0);
     
    
      });
    
    
    });


    it('Should have the phone input working', () => {
 
      element.getPhoneInput().invoke('val').should('be.empty').then(()=>{
      element.getPhoneInput().type('44444444444');
      cy.get('body').click(0,0);
     
    
      });
    
    
    });


   
    
    




    it('Should have the form sending working', () => {
      
      //name
      element.getNameInput().invoke('val').should('be.empty').then(()=>{
      element.getNameInput().type('name');
      cy.get('body').click(0,0);
      });

      //phone
      element.getPhoneInput().invoke('val').should('be.empty').then(()=>{
      element.getPhoneInput().type('44444444444');
      cy.get('body').click(0,0);
      });

      //email
      element.getEmailInput().invoke('val').should('be.empty').then(()=>{
      element.getEmailInput().type('something@gmail.com');
      cy.get('body').click(0,0);
      });

      //comment
      element.getCommentSection().invoke('val').should('be.empty').then(()=>{
      element.getCommentSection().type('lorem ipsum');
      cy.get('body').click(0,0);
      });
    //calendar
      cy.wait(1000),
      cy.window().then(win =>{win.first=true}),
      cy.window().its('first').should('be.true'),
      datePicker.getCalendar().click(),
 
      cy.selectMonth(month1),
      cy.get('td[aria-label*="'+month1+' '+daySince+'"]').click(),
      cy.selectMonth('June'),
      cy.get('td[aria-label*="'+month2+' '+dayTo+'"]').click(),

      //send button
      cy.get('button[type="submit"]').click(),
      element.getFormErrorMessage().should('not.contain', 'Error')

    });
  
  












  
  });
  



