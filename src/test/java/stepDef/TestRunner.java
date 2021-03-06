package stepDef;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
    monochrome=true,
    plugin = {"pretty", "html:target/cucumber-html"},
    features = "src/test/java/features",
    tags = {"@Sanity"},
    glue = { "stepDef" }
)
public class TestRunner {

}
