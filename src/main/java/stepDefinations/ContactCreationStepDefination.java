package stepDefinations;



import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import utilities.BaseClass;
import utilities.CucumberBaseClass;
import utilities.LoggerHelper;
import utilities.TestBase;

public class ContactCreationStepDefination extends CucumberBaseClass{
	
	private CucumberBaseClass base;
	public ContactCreationStepDefination(CucumberBaseClass base)
	{
		this.base=base;
		
	}

	
	//Logger log=Logger.getLogger(ContactCreationStepDefination.class);
	Logger log=LoggerHelper.getLogger(ContactCreationStepDefination.class);
	
	@Before()
	public void driverSetUp(Scenario scenario)
	{
		this.scenario=scenario;
		System.out.println("********* Test Environment Setup *************");
		//Reporter.addStepLog("*************** Test Environment Setup ***********");
		System.out.println("Executing the scenario " + scenario.getName());
		
		System.out.println("Chrome Browser Test Environment created");
		
		System.setProperty("webdriver.chrome.driver", "E:\\Latest Selenium Drivers\\chromedriver_win32\\chromedriver.exe");
		base.driver=new ChromeDriver();
		
		log.info("Application launching");
		base.driver.get("https://www.freecrm.com");
		base.driver.manage().timeouts().implicitlyWait(30, java.util.concurrent.TimeUnit.SECONDS);
		base.driver.manage().window().maximize();
		
		base.driver.findElement(By.name("username")).sendKeys("naveenk");
		base.driver.findElement(By.name("password")).sendKeys("test@123");
		
		WebElement login=base.driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor)base.driver;
		js.executeScript("arguments[0].click();", login);
		
	}
	
	@After()
	public void tearDown(Scenario scenario)throws NullPointerException
	{
		scenario.write("Finished scenario");
		if (scenario.isFailed())
				{
					scenario.embed(((TakesScreenshot)base.driver).getScreenshotAs(OutputType.BYTES),"image/png");
				}
		System.out.println("Test Environment Destroyed ");
		System.out.println("----------------------------------------------------------------------");
		base.driver.close();
		base.driver.quit();
	}
	
	@Given("^User is on CRMHomePage$")
	public void user_is_on_CRMHomePage() throws Throwable {
	    
		String Hometitle=base.driver.getTitle();
		System.out.println("Home title is "+ Hometitle);
		//Assert.assertEquals("CRMPRO", Hometitle);
		

	}
//	
//	
//	
	@When("^User Navigates to New Contacts Page$")
	public void user_Navigates_to_New_Contacts_Page() throws Throwable {
		
		
		base.driver.switchTo().frame("mainpanel");
		Actions action=new Actions(base.driver);
		action.moveToElement(base.driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		base.driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		
	 
	}
//
	@Then("^User enters FirstName and LastName and Position details$")
	public void user_enters_FirstName_and_LastName_and_Position_details(DataTable ContactData) throws Throwable 
	{
	    
		base.driver.switchTo().defaultContent();
    	Thread.sleep(5000);
    	base.driver.switchTo().frame("mainpanel");
    	
    	for(Map<String,String> CData : ContactData.asMaps(String.class, String.class))
    	{
    		
    		
    		base.driver.findElement(By.id("first_name")).sendKeys(CData.get("FirstName"));
        	
    		base.driver.findElement(By.id("surname")).sendKeys(CData.get("LastName"));
    		base.driver.findElement(By.id("company_position")).sendKeys(CData.get("Position"));
    		base.driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
    		
    	}
		
	}
//
	@Then("^Contact Created$")
	public void contact_Created() throws Throwable {
		
		System.out.println("Contact created");
	   
	}


}
