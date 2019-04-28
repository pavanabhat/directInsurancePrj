package common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseTest {
	
	public static WebDriver driver;
	
	//Properties file
	public static Properties prop;
	
	
	//Initialise the browser
	public static void browserInit () {
		
		//Load the properties file
		prop = new Properties();
		String projDir = System.getProperty("user.dir");
		
		try {
				
			FileInputStream fis = new FileInputStream(projDir + "\\src\\test\\java\\configs\\config.properties");
			prop.load(fis);
		}catch (Exception e) {
			e.printStackTrace();
		}

		String browser = prop.getProperty("browser");
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", projDir + "\\src\\test\\resources\\chromedriver.exe");
			driver = new ChromeDriver();
		} else System.out.println("Invalid browser");
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		
	}

	
	
}
