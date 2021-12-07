


# Brief explanation of the test framework:
-------------------------------------------

In Integration, you will have 2 test js files: contact.test.js and pricing.test.js.

Contact.test.js has all the tests related to the contact page:
-Test datepicker ==> 1 test
-Mandatory entry tests (email, phone, name and comment) ==> 4 tests
-Test from comment section ===> 1 test
-And a test that verifies the button and the function "submit form" ===> 1 test

Pricing.test.js has all the tests related to the pricing page:
-50 rental price for Starter, Professional and Ultimate prices ==> 3 tests
-Percentage of discount for one year and two years for Starter, Professional and Ultimate prices ==> 6 tests
-Currency test (selecting different currencies and calculating the appropriate exchange difference) ==> 19 tests


In the support folder you will have different files that help in the structure of the test:
-currencyUtils.js to store the different exchange rates
-dataUtils.js to map the months for better calendar management
-commonElements.js to manage common elements in an easier way
-DatePickerPage.js to correctly manage calendar year and month data

I also made some changes to the commands.js to add some useful commands