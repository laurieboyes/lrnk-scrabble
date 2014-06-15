package uk.co.lrnk.scrabble;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scrabble-backend/**")
public class ScrabbleController {


    @RequestMapping("/")
    public String hello() {
        return "Hello from the Scrabble backend";
    }

    @RequestMapping(value = "/testModel", method = RequestMethod.POST)
    public void saveTestModel() {

    }

}
