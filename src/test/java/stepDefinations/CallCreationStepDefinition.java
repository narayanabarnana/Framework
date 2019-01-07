package stepDefinations;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CallPage;
import pages.CasesPage;
//import pages.CasesPage;
import utilities.CucumberBaseClass;
import utilities.LoggerHelper;

public class CallCreationStepDefinition extends CucumberBaseClass{
	
	private CucumberBaseClass base;
	public CallCreationStepDefinition(CucumberBaseClass base)
	{
		this.base=base;
		
	}
	
	public static CallPage callpage;
	
	Logger log=LoggerHelper.getLogger(CallCreationStepDefinition.class);
	
	@When("^User Navigates to New Call Page$")
	public void user_Navigates_to_New_Call_Page() throws Throwable {
		
		
		callpage=PageFactory.initElements(base.driver, CallPage.class);
		
		base.driver.switchTo().frame("mainpanel");
		Actions action=new Actions(base.driver);
		action.moveToElement(CallPage.btn_Call).build().perform();
		
		CallPage.btn_NewCall.click();
	    
	}

	@SuppressWarnings("static-access")
	@Then("^User enters the call details$")
	public void user_enters_the_call_details(DataTable CallCreationData) throws Throwable {
	    
		base.driver.switchTo().defaultContent();
    	Thread.sleep(5000);
    	base.driver.switchTo().frame("mainpanel");
    	
    	
		boolean isChecked = callpage.checkbox_callSchedule.isSelected();
    	System.out.println(isChecked);
    	
    	String caldate=callpage.txt_CalendarSchedule.getAttribute("value");
    	System.out.println("Calendar date is " + caldate);
    	
    	callpage.btn_Lookup1.click();
    	
    	//To get the size of the windows
    	Set<String> winhand=base.driver.getWindowHandles();
    	int si=winhand.size();
    	
    	System.out.println("number of window handles are " + si);
    	
    	String winHandleBefore = base.driver.getWindowHandle();
        for(String winHandle : base.driver.getWindowHandles()){
        	
        	//System.out.println("Window names are " + winHandle);
            base.driver.switchTo().window(winHandle);
        }
    	
    	String url=base.driver.getTitle();
    	System.out.println("url is " + url);
    	
    	callpage.txt_searchbutton.sendKeys("Narayana");
    	
    	callpage.btn_searchbutton.click();
    	
    	callpage.link_searchlink.click();
    	
    	base.driver.switchTo().window(winHandleBefore);
    	base.driver.switchTo().frame("mainpanel");
    	
    	WebDriverWait wait=new WebDriverWait(base.driver,20);
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//input[@type='checkbox' and @name='conf_call']")));
    	
    	callpage.checkbox_conferencecall.click();
    	
    	callpage.btn_Lookup3.click();
    	for(String winHandle1 : base.driver.getWindowHandles()){
        	
            base.driver.switchTo().window(winHandle1);
        }
    	
    	callpage.txt_searchbutton.sendKeys("Narayana");
    	callpage.btn_searchbutton.click();
    	callpage.link_searchlink.click();
    	
    	base.driver.switchTo().window(winHandleBefore);
    	base.driver.switchTo().frame("mainpanel");
    	
    	//Handling dropdown
    	Select sel=new Select(callpage.dropdown_FlagAs);
    	List<WebElement> ele=sel.getOptions();
    	System.out.println("number of elements in the drop down list are " + ele.size());
    	for(int i =0; i<ele.size() ; i++){
    		 String sValue = ele.get(i).getText();
    		 System.out.println("The dropdown value is " + sValue);
    		 }
    	sel.selectByVisibleText("Important");
    	//sel.selectByIndex(0);
    	//sel.selectByValue("");
    	
		callpage.checkbox_createNewCase.click();
		callpage.checkbox_createNewDeal.click();
		callpage.checkbox_createNewTask.click();
		
		callpage.textarea_notes.sendKeys("Hello creating a new call");
		callpage.btn_saveAndNewCall.click();
		
    	
    	
	}

	@SuppressWarnings("static-access")
	@Then("^Click on Submit button$")
	public void click_on_Submit_button() throws Throwable {
		
		//callpage.btn_saveAndNewCall.click();
	   
	}
	
	
	
	@SuppressWarnings("static-access")
	@Then("^Extract the Task id$")
	public void extract_the_Task_id() throws Throwable {
		
		callpage.btn_tabTasks.click();
	    
	}

	@Then("^Extract the Case id$")
	public void extract_the_Case_id() throws Throwable {
	   
	}

	@Then("^Extract the Deal id$")
	public void extract_the_Deal_id() throws Throwable {

	}

}
