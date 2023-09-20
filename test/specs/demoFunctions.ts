

import Locator from '../locators/locators'
import TestData from '../testdata/testData'

class DemoPage {


    get currentAge() { return $(Locator.CURRENT_AGE) }
    get retirementAge() { return $(Locator.RETIREMENT_AGE) }
    get currentIncome() { return $(Locator.CURRENT_ANNUAL_INCOME) }
    get currentIncomeSpouse() { return $(Locator.SPOUSE_ANNUAL_INCOME) }
    get currentRetirementSavingBalance() { return $(Locator.CURRENT_RETIREMENT_SAVING_BALANCE) }
    get currentlySaving() { return $(Locator.CURRENTLY_SAVING_EACH_YEAR) }
    get savingIncreaseRate() { return $(Locator.SAVING_RATE_INCREASE) }
    get heading() { return $(Locator.HEADING) }
    get calculaterButton() { return $(Locator.CALCULATER_BUTTON) }
    get result() { return $(Locator.RESULT) }
    get socialIncomeYes() { return $(Locator.SOCIAL_INCOME_YES_RADIO) }
    get socialSecurityOverrideAmount() { return $(Locator.SOCIAL_SECURITY_OVERRIDE_AMOUNT) }

    //Default Value Popup
    get defaultSelectorPopup() { return $(Locator.DEFAULT_SELECTOR_POPUP) }
    get retirementDuration() { return $(Locator.PUPUP_RETIREMENT_DURATION) }
    get popupSubmitBtn() { return $(Locator.POPUP_SUBMIT) }



    open () {
        browser.maximizeWindow();
        return browser.url(TestData.BASE_URL)
    }   


    async changeDefaultValues() {        
        await this.defaultSelectorPopup.click()

        await this.retirementDuration.waitForExist()
        await this.retirementDuration.setValue(TestData.PUPUP_RETIREMENT_DURATION)

        await this.popupSubmitBtn.waitForExist()
        await this.popupSubmitBtn.click()
    }

    async verifyPageDisplayed() {
        await this.heading.waitForDisplayed()
        await expect(this.heading).toHaveTextContaining(TestData.HEADING)
    }

    async verifyResultDisplayed() {
        await this.result.waitForDisplayed()
        await expect(this.result).toHaveTextContaining(TestData.RESULT)
    }

    async fillFormDetails() {
        await this.currentAge.setValue(TestData.CURRENT_AGE)
        await this.retirementAge.setValue(TestData.RETIREMENT_AGE)
        await this.currentIncome.setValue(TestData.CURRENT_ANNUAL_INCOME)
        await this.currentIncomeSpouse.setValue(TestData.SPOUSE_ANNUAL_INCOME)
        await this.currentRetirementSavingBalance.setValue(TestData.CURRENT_RETIREMENT_SAVING_BALANCE)
        await this.currentlySaving.setValue(TestData.CURRENTLY_SAVING_EACH_YEAR)
        await this.savingIncreaseRate.setValue(TestData.SAVING_RATE_INCREASE)
    }

    async setSocialSecurity() {     
        await this.socialIncomeYes.waitForDisplayed()
        await this.socialIncomeYes.click()
        await this.socialSecurityOverrideAmount.waitForDisplayed()
        await this.socialSecurityOverrideAmount.setValue(TestData.SOCIAL_SECURITY_OVERRIDE_AMOUNT)
    }

    async clickCalculatorButton() {
        await this.calculaterButton.click()
    }

}

export default new DemoPage()
