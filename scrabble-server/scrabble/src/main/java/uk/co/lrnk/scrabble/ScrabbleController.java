package uk.co.lrnk.scrabble;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScrabbleController {


    @RequestMapping("/hello")
    public String hello() {
        return "What up";
    }

}
