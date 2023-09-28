import demoPage from '../pageObject/demoFunctions.js'

//Feature
describe('Fill retirement calculator form', () => {

    //Senario #1 filling all calculator form values
    it('I filled the calculator form', async () => {

        //Steps
        await demoPage.open()
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails()
        await demoPage.clickCalculatorButton()
        await demoPage.verifyResultDisplayed()
        await demoPage.close()
        await demoPage.quit()
    })

    //Senario #2 filling calculator form with default popup value updates
    it('I filled the calculator form with default popup value updates', async () => {

        //Steps
        await demoPage.open()
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails()
        await demoPage.clickOnDefaultPopup()
        await demoPage.fillDefaultPopupValues()
        await demoPage.clickCalculatorButton()
        await demoPage.verifyResultDisplayed()
        await demoPage.close()
        await demoPage.quit()
    })

    //Senario #3 validating madetory fields entries
    it('validating madetory fields entries', async () => {

        //Steps
        await demoPage.open()
        await demoPage.verifyPageDisplayed()
        await demoPage.clickCalculatorButton()
        await demoPage.verifyMadetoryFieldResultDisplayed()
        await demoPage.close()
        await demoPage.quit()
    })

    //Senario #4 calculator form with Social secutity value updates
    it('I filled the calculator form with Social secutity value updates', async () => {

        //Steps
        await demoPage.open()
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails()
        await demoPage.setSocialSecurity()
        await demoPage.clickCalculatorButton()
        await demoPage.verifyResultDisplayed()
        await demoPage.close()
        await demoPage.quit()
    })

    //Senario #5 calculator form with Social secutity value is No
    it('I filled the calculator form with Social secutity value is No', async () => {
     //Steps
        await demoPage.open()
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails()
        await demoPage.clickCalculatorButton()
        await demoPage.verifyResultDisplayed()
        await demoPage.close()
        await demoPage.quit()
})
