import demoPage from './demoFunctions.js'

describe('Fill retirement calculator form', () => {
   
    it('I filled the calculator form', async () => {
        await demoPage.open()  
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails() 
        await demoPage.clickCalculatorButton()    
        await demoPage.verifyResultDisplayed()           
    })  

    it('I filled the calculator form with default value updates', async () => {
        await demoPage.open()  
        await demoPage.verifyPageDisplayed()
        await demoPage.fillFormDetails() 
        await demoPage.changeDefaultValues()        
        await demoPage.clickCalculatorButton()    
        await demoPage.verifyResultDisplayed()           
    })  
    
})