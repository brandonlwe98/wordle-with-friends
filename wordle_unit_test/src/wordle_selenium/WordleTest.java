package wordle_selenium;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class WordleTest {
	
	static WebDriver driver;
	
//	static String pathWordleApp="http://localhost:8080"; //local URL
	static String pathWordleApp="http://coms-319-g11.class.las.iastate.edu:8443"; //remote server URL
	static String pathChromeDriver="./chromedriver.exe";
	
	@BeforeClass
	public static void openBrowser()
	{
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver= new ChromeDriver() ;
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	
	@AfterClass
	public static void closeBrowser() {
		driver.quit();
	}

	@Test
	public void invalidWordTest() throws InterruptedException { //Tests to see if React Application detects an invalid word
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnSingle']")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//button[@id='Q']")).click();
		driver.findElement(By.xpath("//button[@id='W']")).click();
		driver.findElement(By.xpath("//button[@id='E']")).click();
		driver.findElement(By.xpath("//button[@id='R']")).click();
		driver.findElement(By.xpath("//button[@id='T']")).click();
		driver.findElement(By.xpath("//button[@id='Enter']")).click();
		Thread.sleep(1000);
		String toastMessage = driver.findElement(By.className("toast-message")).getText();

		assertEquals("Failed Invalid Word Test Case", toastMessage, "not a valid word!");
	}
	
	@Test
	public void keyboardTest() throws InterruptedException { //Tests to see if keyboard works
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnSingle']")).click();
		Thread.sleep(1000);
		
		Actions action = new Actions(driver);
		
		//click on game window to set focus
		action.moveToElement(driver.findElement(By.xpath("//div[@id='gameWindow']"))).click();
		action.sendKeys("ABCDE");
		action.sendKeys(Keys.ENTER);
		action.build().perform();

		Thread.sleep(1000);
		String toastMessage = driver.findElement(By.className("toast-message")).getText();

		assertEquals("Failed Keyboard Test Case", toastMessage, "not a valid word!");
	}
	
	@Test
	public void invalidWordTest2() throws InterruptedException { //Tests to see if React Application properly prompts error for 4-letter input
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnSingle']")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//button[@id='Q']")).click();
		driver.findElement(By.xpath("//button[@id='W']")).click();
		driver.findElement(By.xpath("//button[@id='E']")).click();
		driver.findElement(By.xpath("//button[@id='R']")).click();
		driver.findElement(By.xpath("//button[@id='Enter']")).click();
		Thread.sleep(1000);
		String toastMessage = driver.findElement(By.className("toast-message")).getText();

		assertEquals("Failed Invalid Word Test Case 2", toastMessage, "Not enough letters!");
	}
	
	@Test
	public void signInTest() throws InterruptedException { //Tests to see if sign in error works
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnCreate']")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("UNKNOWN");
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("UNKNOWNPASSWORD");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

		Thread.sleep(1000);
		String alertText = driver.switchTo().alert().getText(); //gets the alert message
		driver.switchTo().alert().accept(); //clicks the OK button on alert popup message

		assertEquals("Failed Sign In Test Case", alertText, "Invalid username or password");
	}
	
	@Test
	public void signUpTest() throws InterruptedException { //Tests to see if sign up error works
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnJoin']")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("test1");
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("asdf");
		driver.findElement(By.xpath("//input[@id='confirm-password']")).sendKeys("asdf");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

		Thread.sleep(1000);
		String alertText = driver.switchTo().alert().getText(); //gets the alert message
		driver.switchTo().alert().accept(); //clicks the OK button on alert popup message

		assertEquals("Failed Sign Up Test Case", alertText, "Username already exists!");
	}
	
	@Test
	public void signInTest2() throws InterruptedException { //Tests to see if successful sign in works
		driver.get(pathWordleApp);
		driver.manage().window().maximize();
		
		driver.findElement(By.xpath("//button[@id='btnCreate']")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("test1");
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("asdf");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

		Thread.sleep(1000);
		String btnText = driver.findElement(By.xpath("//button[@id='btnSignOut']")).getText();
		driver.findElement(By.xpath("//button[@id='btnSignOut']")).click();

		assertEquals("Failed Sign In Test Case 2", btnText, "Sign Out");
	}
	
	
}
