package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class setUP {
	
	
	static WebDriver driver;
	
	@Before
	public void settingUp()
	{
		
		System.out.println("Inside before");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		
		
	}
	
	@After("@Search")
	public void exiting()
	{
		System.out.println("In after");
		driver.close();
	}
}
