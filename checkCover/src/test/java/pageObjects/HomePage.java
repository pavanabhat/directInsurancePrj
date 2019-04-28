package pageObjects;

import common.BaseTest;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BaseTest {

	// Header link
	@FindBy(css="#header > a")
	private WebElement headerLink;
	
	// Drive Away insurance text
	@FindBy(id="dlg-dealersearch-title")
	private WebElement driveAwayInsurance;
	
	// Subtitle text
	@FindBy(id="dlg-dealersearch-subtitle")
	private WebElement dealerSubtitle;
	
	// Registration num text
	@FindBy(id="vehicleReg")
	private WebElement inputVehicleReg;
	
	// Find button
	@FindBy(xpath="//button[@name='btnfind']")
	private WebElement findButton;
	
	//Error message
	@FindBy(xpath="//*[@id='page-container']//div[@class='dlg-dealersearch-control']//div[@class='error-required']")
	private WebElement carRegError;
	
	//Result for text
	@FindBy(className="result")
	private WebElement resultForText;
	
	// Cover start
	@FindBy(xpath="//div[contains(text(),'Cover start')]/span")
	private WebElement coverStartDate;
	
	// Cover end
	@FindBy(xpath="//div[contains(text(),'Cover end')]/span")
	private WebElement coverEndDate;
		
	// Record not found
	@FindBy(xpath="//div[contains(text(),'Sorry record not found')]")
	private WebElement recNotFound;
	
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public void clickOnVolkswagonLink() {
		//Click on volkswagon link
		headerLink.click();

	}
	
	public String getTitle() {
		return driver.getTitle();
	}
	
	public String getDealerSearchTitle() {
		return driveAwayInsurance.getText();
	}
	
	public String getDealerSearchSubTitle() {
		return dealerSubtitle.getText();
	}
	
	public boolean textboxIsDisplayed() {
		return inputVehicleReg.isDisplayed();
	}
	
	public boolean findButtonIsDisplayed() {
		return findButton.isDisplayed();
	}
	public void clickOnFindBtn() {
		findButton.click();	
	}
	
	public boolean errorMessageExists () {
		if (carRegError.isDisplayed())
			return true; 
		else 
			return false;
		}
	
	//Enter a registration number
	public void enterVehicleReg (String regNum) {
	
		inputVehicleReg.sendKeys(regNum);
	}
	
	public String getResultForText() {
		return resultForText.getText();
		
	}
	
	public String getStartDate() {
	
		return coverStartDate.getText();
	}
	
	public String getEndDate() {
		return coverEndDate.getText();
	}
	
	// Get the error message for invalid car registration number
	public String getErrorMessage() {
		
		try {
			if (recNotFound !=null) return recNotFound.getText();
		}catch (NoSuchElementException e) {
			try {
				if (carRegError != null) return carRegError.getText();

			}catch (NoSuchElementException ex) {
				return "Unexpected message";
			}
		}
		return "Unexpected message";
	}

}


