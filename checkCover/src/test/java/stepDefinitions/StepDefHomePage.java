package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.*;
import org.junit.Assert;

import pageObjects.HomePage;
import common.BaseTest;

public class StepDefHomePage extends BaseTest {

	HomePage home;
	
	@Before
	public void setupTest() {
		System.out.println("\n--------Inside setup Test-------\n");
		BaseTest.browserInit();
	}
	
	
	@Given("^user is on main page$")
	public void user_is_on_main_page() {
		String url = prop.getProperty("ApplicationURL");
		driver.get(url);
		home = new HomePage();
	}

	@Then("^title of the page should be \"([^\"]*)\"$")
	public void title_of_the_page_should_be(String arg1)  {
	    
	    Assert.assertEquals(arg1, home.getTitle());

	}
	
	// ***End of Scenario
	
	// *** Begin Scenario
	@Given("^user clicks on volkswagen link$")
	public void user_clicks_on_volkswagen_link() {
		home.clickOnVolkswagonLink();
	}

	@Then("^user is taken to volkswagen page \"([^\"]*)\"$")
	public void user_is_taken_to_volkswagen_page(String expectedURL) {
	    Assert.assertEquals("Volkswagen urls dont match", expectedURL,driver.getCurrentUrl());
	    
	}

	// *** Begin Scenario
	@Then("^the title of the page is \"([^\"]*)\"$")
	public void the_title_of_the_page_is(String expectedTitle) {
			Assert.assertEquals("Titles dont match", expectedTitle, driver.getTitle());
	}
	
	@Then("^user is presented with a dealer title text \"([^\"]*)\"$")
	public void user_is_presented_with_a_dealer_title_text(String expectedTitle) {
		Assert.assertEquals("Dealer title texts do not match", expectedTitle, home.getDealerSearchTitle());
	}
	
	@Then("^user is presented with a text box$")
	public void user_is_presented_with_a_text_box() throws Exception {
		Assert.assertTrue(home.textboxIsDisplayed());
	}

	@Then("^user is presented with find vehicle button$")
	public void user_is_presented_with_find_vehicle_button() throws Exception {
		Assert.assertTrue(home.findButtonIsDisplayed());
	}

	
	// *** End of Scenario
	
	// *** Begin Scenario

	@Then("^user is shown error message$")
	public void user_is_shown_error_message() {
	    Assert.assertEquals("Error message is not shown", true, home.errorMessageExists());
	}
	//***End Scenario
	
	// ***Start Scenario
	@Given("^user enters valid \"([^\"]*)\" registration$")
	public void user_enters_valid_registration(String validReg) {
		home.enterVehicleReg(validReg);
	}

	@Given("^user clicks on find vehicle$")
	public void user_clicks_on_find_vehicle() {
		home.clickOnFindBtn();
	}

	@Then("^user is shown result for \"([^\"]*)\"$")
	public void user_is_shown_result_for(String expectedResultsFor) {
	    String actualResultFor = home.getResultForText();
	    Assert.assertEquals("Results for do not match", expectedResultsFor, actualResultFor);
	    
	}

	@Then("^user is shown start date \"([^\"]*)\"$")
	public void user_is_shown_start_date(String expectedStartDate) throws Exception {
		String actualStartDate = home.getStartDate();
	    Assert.assertEquals("Start dates do not match", expectedStartDate, actualStartDate);
	}

	@Then("^user is shown end date \"([^\"]*)\"$")
	public void user_is_shown_end_date(String expectedEndDate) throws Exception {
		String actualEndDate = home.getEndDate();
	    Assert.assertEquals("End dates do not match", expectedEndDate, actualEndDate);

	   
	}
	//*** End Scenario***

	// ***Start scenario
	
	@Given("^user enters invalid \"([^\"]*)\" registration$")
	public void user_enters_invalid_registration(String arg1) throws Exception {
		home.enterVehicleReg(arg1);
	}

	@Then("^user is shown \"([^\"]*)\" message$")
	public void user_is_shown_message(String arg1) throws Exception {
		String actualErrorMessage = home.getErrorMessage();		
	    Assert.assertEquals("Error message does not match", arg1, actualErrorMessage);
		
	}

// *** End Scenario
	@After public void tearDown() {
		System.out.println("----------In tear down------");
		driver.close();
	}	
	
}