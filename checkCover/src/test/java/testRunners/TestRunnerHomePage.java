package testRunners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",
					glue="stepDefinitions",
					monochrome=true,
					plugin= {"pretty", "html:reports/AcceptanceTestReport.html"},
					dryRun=false)

public class TestRunnerHomePage {
	
	

}
