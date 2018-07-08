package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	
	@RunWith(Cucumber.class)
	@CucumberOptions(
			
			features="F:\\CucumberFramework\\Framework\\src\\main\\java\\features\\DealsMap.feature",
			glue={"stepDefinations"},
			dryRun=false,
			monochrome=true,
			strict=true,
			format={"pretty","html:test-output","json:json-output/cucumber.json","junit:junitxml-output/cucumber.xml"}
			
			
			
			
			
			//if dryRun = true -checks the mapping between feature file and step defination file . used check for every step in feature file there should be stepDefination method in StepDefination file
			//checks the mapping between feature file and step defination file . used check for every step in feature file there should be stepDefination method in StepDefination file.
			//First make the dryRun = true and check everything is fine then make it false
			
			//Features : Path of the Feature file.
			//Glue: Path of the step defination file. i.e. where exactly the stepdefination file located
			
			//monochrome=true - display the console ouput in a readable format
			//format={"pretty","html:test-output"}-Generates HTML report
			
			//format={"pretty","html:test-output","json:json-output/cucumber.json"}-Generates HTML report and JSON report
			//strict=true: it will fail the execution if they are missing step definations
			
			/*
			 * Data Driven Testing Using Cucumber
			 * 
			 * 1)Simple Data Driven : without examples keyword-pass the values in ""
			 * 2)With Examples Keyword
			 * 3)Scenario outline
			 * 4)Using tables
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 */
			
			
			)
	
	
	public class TestRunner {
	
}
