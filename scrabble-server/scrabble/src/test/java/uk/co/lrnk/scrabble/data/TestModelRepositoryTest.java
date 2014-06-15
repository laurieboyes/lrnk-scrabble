package uk.co.lrnk.scrabble.data;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import uk.co.lrnk.scrabble.data.config.TestDatabaseConfig;
import uk.co.lrnk.scrabble.model.TestModel;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(loader=AnnotationConfigContextLoader.class, classes = TestDatabaseConfig.class)
public class TestModelRepositoryTest {

    @Autowired
    TestModelRepository testModelRepository;

    @Test
    public void testGetTestModelById() throws Exception {

        TestModel testModel = new TestModel();
        testModel.setId(0);
        testModel.setValue("test it up");

        testModelRepository.save(testModel);

    }
}
