class DatePickerPage{


    getCalendar() {

        return cy.get('button[class="DateRangePickerInput_calendarIcon DateRangePickerInput_calendarIcon_1"]');
    
    }

    goNext(){

        return cy.get('div[class="DayPickerNavigation_button DayPickerNavigation_button_1 DayPickerNavigation_button__default DayPickerNavigation_button__default_2 DayPickerNavigation_button__horizontal DayPickerNavigation_button__horizontal_3 DayPickerNavigation_button__horizontalDefault DayPickerNavigation_button__horizontalDefault_4 DayPickerNavigation_leftButton__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault_5"]');
    }

    goPrev(){
        return cy.get('div[class="DayPickerNavigation_button DayPickerNavigation_button_1 DayPickerNavigation_button__default DayPickerNavigation_button__default_2 DayPickerNavigation_button__horizontal DayPickerNavigation_button__horizontal_3 DayPickerNavigation_button__horizontalDefault DayPickerNavigation_button__horizontalDefault_4 DayPickerNavigation_rightButton__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault_5"]');
    
    }


    getMonthAndYear1(){

        return cy.get('div[class="CalendarMonth CalendarMonth_1"]').eq(1);

    }

    getMonthAndYear2(){

        return cy.get('div[class="CalendarMonth CalendarMonth_1"]').eq(2);


    }


}


export default DatePickerPage