

import Locator from '../locators/locators'
import TestData from '../testdata/testData'

class DemoPage {

    //form value getters
    get currentAge() { return $(Locator.CURRENT_AGE) }
    get retirementAge() { return $(Locator.RETIREMENT_AGE) }
    get currentIncome() { return $(Locator.CURRENT_ANNUAL_INCOME) }
    get currentIncomeSpouse() { return $(Locator.SPOUSE_ANNUAL_INCOME) }
    get currentRetirementSavingBalance() { return $(Locator.CURRENT_RETIREMENT_SAVING_BALANCE) }
    get currentlySaving() { return $(Locator.CURRENTLY_SAVING_EACH_YEAR) }
    get savingIncreaseRate() { return $(Locator.SAVING_RATE_INCREASE) }
    get socialIncomeYes() { return $(Locator.SOCIAL_INCOME_YES_RADIO) }
    get materialStatus() { return $(Locator.MARIATAL_STATUS) }
    get socialSecurityOverrideAmount() { return $(Locator.SOCIAL_SECURITY_OVERRIDE_AMOUNT) }

    //clicking on default select popup link
    get defaultSelectorPopup() { return $(Locator.DEFAULT_SELECTOR_POPUP) }

    //Default Value Popup getters
    get additinalOtherIncome() { return $(Locator.ADDITIONAL_OTHER_INCOME) }
    get retirementDuration() { return $(Locator.PUPUP_RETIREMENT_DURATION) }
    get finalAnualIncomeDesired() { return $(Locator.FINAL_ANUAL_INCOME_DESIRED) }
    get preRetirementRate() { return $(Locator.PRE_RETIREMENT_INVESTIMENT_RETURN) }
    get postRetirementRate() { return $(Locator.POST_RETIREMENT_INVESTIMENT_RETURN) }
    get popupSubmitBtn() { return $(Locator.POPUP_SUBMIT) }


    get heading() { return $(Locator.HEADING) }
    get calculaterButton() { return $(Locator.CALCULATER_BUTTON) }

    //validating the result
    get result() { return $(Locator.RESULT) }

    //validating the madateray filed message
    get madetoryFileldsExpectedMsg() { return $(Locator.REQUIRED_FIELDS_EXPECTED_MSG) }


    open () {
        browser.maximizeWindow();
        return browser.url(TestData.BASE_URL)
    }

    close () {
         this.close()
    }

    quit ()
    {
        this.quit()
    }

    //Click on Default popup
    async clickOnDefaultPopup() {
        await this.defaultSelectorPopup.waitForExist()
        await this.defaultSelectorPopup.click()
    }

    async fillDefaultPopupValues() {

        await this.additinalOtherIncome.waitForExist()
        await this.additinalOtherIncome.setValue(TestData.ADDITIONAL_OTHER_INCOME)

        await this.retirementDuration.waitForExist()
        await this.retirementDuration.setValue(TestData.PUPUP_RETIREMENT_DURATION)

        await this.finalAnualIncomeDesired.waitForExist()
        await this.finalAnualIncomeDesired.setValue(TestData.FINAL_ANUAL_INCOME_DESIRED)

        await this.preRetirementRate.waitForExist()
        await this.preRetirementRate.setValue(TestData.PRE_RETIREMENT_INVESTIMENT_RETURN)

        await this.postRetirementRate.waitForExist()
        await this.postRetirementRate.setValue(TestData.POST_RETIREMENT_INVESTIMENT_RETURN)

        await this.popupSubmitBtn.waitForExist()
        await this.popupSubmitBtn.click()
    }

    //verifying required page is getting displayed
    async verifyPageDisplayed() {
        await this.heading.waitForDisplayed()
        await expect(this.heading).toHaveTextContaining(TestData.HEADING)
    }

    //verifiying expected result is getting displayed or not
    async verifyResultDisplayed() {
        await this.result.waitForDisplayed()
        await expect(this.result).toHaveTextContaining(TestData.RESULT)
    }

    //validating madetory fields missing message to be displayed
    async verifyMadetoryFieldResultDisplayed() {
        await this.madetoryFileldsExpectedMsg.waitForDisplayed()
        await expect(this.madetoryFileldsExpectedMsg).toHaveTextContaining(TestData.REQUIRED_FIELDS_EXPECTED_MSG)
    }

    //setting values in the form fields
    async fillFormDetails() {
        await this.currentAge.setValue(TestData.CURRENT_AGE)
        await this.retirementAge.setValue(TestData.RETIREMENT_AGE)
        await this.currentIncome.setValue(TestData.CURRENT_ANNUAL_INCOME)
        await this.currentIncomeSpouse.setValue(TestData.SPOUSE_ANNUAL_INCOME)
        await this.currentRetirementSavingBalance.setValue(TestData.CURRENT_RETIREMENT_SAVING_BALANCE)
        await this.currentlySaving.setValue(TestData.CURRENTLY_SAVING_EACH_YEAR)
        await this.savingIncreaseRate.setValue(TestData.SAVING_RATE_INCREASE)
    }

    //selecting social secutiy and filling values for it
    async setSocialSecurity() {
        await this.socialIncomeYes.waitForDisplayed()
        await this.socialIncomeYes.click()
        await this.socialSecurityOverrideAmount.waitForDisplayed()
        await this.socialSecurityOverrideAmount.setValue(TestData.SOCIAL_SECURITY_OVERRIDE_AMOUNT)
    }

    //Clicking on the caliculator button
    async clickCalculatorButton() {
        await this.calculaterButton.click()
    }

}

export default new DemoPage()
