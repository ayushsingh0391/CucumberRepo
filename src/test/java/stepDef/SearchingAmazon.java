package stepDef;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import io.cucumber.java.en.But;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class SearchingAmazon {
	
	WebDriver driver=setUP.driver;
	ExtentReports extent;
	ExtentTest logger;
	
	@Given("^The user is already on the amazon Page$")
    public void the_user_is_already_on_the_amazon_page() throws Throwable {
		  driver.get("https://www.amazon.com/");
	       
    }

//    @When("^User click on search bar and type laptop$")
//    public void user_click_on_search_bar_and_type_laptop() throws Throwable {
//    	System.out.println("when");
//    }
//
//    @Then("^User must be shown available latops in inventory$")
//    public void user_must_be_shown_available_latops_in_inventory() throws Throwable {
//    	System.out.println("then");
//    }
//  

    @When("^User click on search bar and type \"([^\"]*)\"$")
    public void user_click_on_search_bar_and_type_something(String productname) throws Throwable {
    	 
    	        
    	        WebElement Search = driver.findElement(By.id("twotabsearchtextbox"));
    	        Search.sendKeys(productname);
    	        
    	        WebElement Submit = driver.findElement(By.xpath("//*[@value='Go']"));
    	        Submit.click();
    	        
    	        extent=new ExtentReports(System.getProperty("user.dir")+"/extent.html",false);
    	        logger=extent.startTest(productname);
    	        logger.log(LogStatus.PASS,"Search in Amazon Search bar"+ productname);

    }

    @Then("^User must be shown available \"([^\"]*)\" in inventory$")
    public void user_must_be_shown_available_something_in_inventory(String productname) throws Throwable {
        System.out.println("then");
        extent.endTest(logger);
        extent.flush();
        extent.close();
        
        
    }

    @But("^User must not see \"([^\"]*)\"laptops$")
    public void user_must_not_see_somethinglaptops(String excludedproduct) throws Throwable {
    	System.out.println("but");
    }

}
