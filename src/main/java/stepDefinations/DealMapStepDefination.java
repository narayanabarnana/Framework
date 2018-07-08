package stepDefinations;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import edu.emory.mathcs.backport.java.util.concurrent.TimeUnit;
import junit.framework.Assert;

public class DealMapStepDefination {
	
	
WebDriver driver;
	
	@Given("^User is on Login Page$")
	public void user_is_on_Login_Page() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "E:\\Latest Selenium Drivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().timeouts().implicitlyWait(30, java.util.concurrent.TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@When("^Title of the page is freeCRM$")
	public void title_of_the_page_is_freeCRM() throws Throwable {
		
		String title=driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	    
	}
	
	@Then("^User enter username and password$")
	public void user_enter_username_and_password(DataTable UserCredentials) throws Throwable {
	  	
		//List<Map<String, String>> CredData=UserCredentials.asMaps(String.class, String.class);
		
		for(Map<String,String> CredData : UserCredentials.asMaps(String.class, String.class))
		{
			
			driver.findElement(By.name("username")).sendKeys(CredData.get("Username"));
			driver.findElement(By.name("password")).sendKeys(CredData.get("Password"));
			
		}
		
		
		
	}
	
	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
		
		WebElement login=driver.findElement(By.xpath("//input[@value='Login']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", login);
		
	
	}
	
	@Then("^User is on Home page$")
	public void User_is_on_Home_page() throws Throwable {
		
		String Hometitle=driver.getTitle();
		System.out.println("Home title is "+ Hometitle);
		Assert.assertEquals("CRMPRO", Hometitle);
		
	
	}
	
	@Then("^User move to New Deal Page$")
	public void user_move_to_New_Deal_Page() throws Throwable {
		
		driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	    
	}

	@Then("^User enters deals details$")
	public void user_enters_deals_details(DataTable DealData) throws Throwable {
		
		//List<List<String>> DealData=dd.raw();
		
		//DealData.get(0).get(0)
		
		driver.switchTo().defaultContent();
/*    	Thread.sleep(5000);
*/    	
		
		
		driver.switchTo().frame("mainpanel");
    	//driver.findElement(By.id("title")).sendKeys(DealData.get(0).get(0));
    	
    	for(Map<String,String> DDData : DealData.asMaps(String.class, String.class))
		{
    		
    		driver.switchTo().defaultContent();
    		driver.switchTo().frame("mainpanel");
    		Thread.sleep(2000);
    		WebDriverWait wait=new WebDriverWait(driver,60);
        	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("title")));
    		
    		driver.findElement(By.id("title")).sendKeys(DDData.get("title"));
    		driver.findElement(By.id("amount")).sendKeys(DDData.get("Amount"));
        	driver.findElement(By.id("probability")).sendKeys(DDData.get("Probability"));
        	driver.findElement(By.id("commission")).sendKeys(DDData.get("Commission"));
        	
        	driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
        	
        	Thread.sleep(10000);
        	driver.switchTo().defaultContent();
    		driver.switchTo().frame("mainpanel");
        	
        	wait=new WebDriverWait(driver,30);
        	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[text()='Deals']")));
        	//driver.switchTo().frame("mainpanel");
        	
        	//driver.findElement(By.xpath("//a[text()='Deals']")).click();
        	/*WebElement deals=driver.findElement(By.xpath("//a[text()='Deals']"));
    		JavascriptExecutor js = (JavascriptExecutor)driver;
    		js.executeScript("arguments[0].click();", deals);
        	*/
        	
//        	
    		Actions action=new Actions(driver);
    		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
    		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    		
    //		Thread.sleep(5000);
//    		
    		
			
		}
    	
    	
    	
    	
    	//driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	 
	}
	
	@Then("^Close the browser$")
    public void close_the_browser() throws Throwable {
        driver.quit();
    }


	

}
