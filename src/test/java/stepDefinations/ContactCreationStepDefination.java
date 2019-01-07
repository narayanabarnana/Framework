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
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import factory.BrowserFactory;
import factory.DataProviderFactory;
import junit.framework.Assert;
import pages.ContactPage;
import pages.LoginPage;
//import utilities.BaseClass;
import utilities.CucumberBaseClass;
import utilities.LoggerHelper;
import utilities.MyScreenRecorder;
import utilities.TestBase;

public class ContactCreationStepDefination extends CucumberBaseClass{
	
	private CucumberBaseClass base;
	public ContactCreationStepDefination(CucumberBaseClass base)
	{
		this.base=base;
		
	}

	public static LoginPage loginpage;
	public static ContactPage contactpage;
	ExtentReports extent;
    ExtentTest test;	
	
	//Logger log=Logger.getLogger(ContactCreationStepDefination.class);
	Logger log=LoggerHelper.getLogger(ContactCreationStepDefination.class);
	
	@SuppressWarnings("static-access")
	@Before()
	public void driverSetUp(Scenario scenario) throws Exception
	{
		MyScreenRecorder.startRecording(scenario.getName());
		extent = new ExtentReports("C:\\Users\\1024812\\Downloads\\Framework-master\\target\\cucumber-extent\\ExtentReport.html", true);
		test = extent.startTest("driverSetUp");
        test.log(LogStatus.INFO, "startTest() method will return the Extent Test object ");
        test.log(LogStatus.INFO, "I am in actual test method");
        test.log(LogStatus.INFO, "We Can Write The Actual Test Logic In This Test");
		
		this.scenario=scenario;
		System.out.println("********* Test Environment Setup *************");
		System.out.println("Executing the scenario " + scenario.getName());
		System.out.println("Chrome Browser Test Environment created");
		
		//this will automatically opens the browser, maximize the browser
		base.driver = BrowserFactory.getBrowser("Chrome");
		
		///System.setProperty("webdriver.chrome.driver", "E:\\Latest Selenium Drivers\\chromedriver_win32\\chromedriver.exe");
		//base.driver=new ChromeDriver();
		
		log.info("Launchig the Application");
		//base.driver.get("https://www.freecrm.com");
		//this will provide the URL from the config.properties file
		base.driver.get(DataProviderFactory.getConfig().getApplicationurl());
		
		log.info("Initializing the PageFactory");
		loginpage=PageFactory.initElements(base.driver, LoginPage.class);
		
		base.driver.manage().timeouts().implicitlyWait(30, java.util.concurrent.TimeUnit.SECONDS);
		
		log.info("Maximising the browser");
		base.driver.manage().window().maximize();
		
		log.info("Entering the username");
		loginpage.txtbx_UserName.sendKeys(DataProviderFactory.getConfig().getusername());
		
		log.info("Entering the password");
		loginpage.txtbx_Password.sendKeys(DataProviderFactory.getConfig().getpassword());
		//base.driver.findElement(By.name("username")).sendKeys("naveenk");
//		base.driver.findElement(By.name("password")).sendKeys("test@123");
		
		WebElement login=loginpage.btn_Login;
		JavascriptExecutor js = (JavascriptExecutor)base.driver;
		js.executeScript("arguments[0].click();", login);
		
		
	}
	
	@After()
	public void tearDown(Scenario scenario)throws Exception
	{
		
		scenario.write("Finished scenario");
		if (scenario.isFailed())
				{
					log.info(scenario.getName() + " is Failed ");
					final byte[] screenshot = ((TakesScreenshot)base.driver).getScreenshotAs(OutputType.BYTES);
					scenario.embed(screenshot, "image/png");
					//scenario.embed(((TakesScreenshot)base.driver).getScreenshotAs(OutputType.BYTES),"image/png");
				}
		System.out.println("Test Environment Destroyed ");
		System.out.println("----------------------------------------------------------------------");
		//base.driver.close();
		//base.driver.quit();
		
		extent.endTest(test);
        test.log(LogStatus.INFO, "endTest() method will stop capturing information about the test log");
        extent.flush();
        test.log(LogStatus.INFO, "flush() method of ExtentReports wil push/write everything to the document");
        test.log(LogStatus.INFO, "close() method will clear/close all resource of the ExtentReports object");
        extent.close();
        MyScreenRecorder.stopRecording();
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
	@SuppressWarnings("static-access")
	@When("^User Navigates to New Contacts Page$")
	public void user_Navigates_to_New_Contacts_Page() throws Throwable {
		
		contactpage=PageFactory.initElements(base.driver, ContactPage.class);
		base.driver.switchTo().frame("mainpanel");
		Actions action=new Actions(base.driver);
		action.moveToElement(contactpage.btn_Contacts).build().perform();
		//action.moveToElement(base.driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		contactpage.btn_NewContact.click();
		//base.driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		
	 
	}
//
	@SuppressWarnings("static-access")
	@Then("^User enters FirstName and LastName and Position details$")
	public void user_enters_FirstName_and_LastName_and_Position_details(DataTable ContactData) throws Throwable 
	{
	    
		base.driver.switchTo().defaultContent();
    	Thread.sleep(5000);
    	base.driver.switchTo().frame("mainpanel");
    	
    	for(Map<String,String> CData : ContactData.asMaps(String.class, String.class))
    	{
    		
    		contactpage.edit_FirstName.sendKeys(CData.get("FirstName"));
    		//base.driver.findElement(By.id("first_name")).sendKeys(CData.get("FirstName"));
        	
    		contactpage.edit_SurName.sendKeys(CData.get("LastName"));
    		//base.driver.findElement(By.id("surname")).sendKeys(CData.get("LastName"));
    		
        	contactpage.edit_Position.sendKeys(CData.get("Position"));
        	//base.driver.findElement(By.id("company_position")).sendKeys(CData.get("Position"));
    		
        	contactpage.btn_save.click();
        	//base.driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
    		
    	}
		
	}
//
	@Then("^Contact Created$")
	public void contact_Created() throws Throwable {
		
		System.out.println("Contact created");
	   
	}


}
