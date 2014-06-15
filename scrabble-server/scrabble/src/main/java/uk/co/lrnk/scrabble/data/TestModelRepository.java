package uk.co.lrnk.scrabble.data;

import org.springframework.data.jpa.repository.Query;
import uk.co.lrnk.scrabble.model.TestModel;
import org.springframework.data.repository.CrudRepository;

public interface TestModelRepository extends CrudRepository<TestModel, Long> {

    @Query
    public TestModel getTestModelById(long id);

}
