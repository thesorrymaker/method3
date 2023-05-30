package com.example.demo_back.controller;

import com.example.demo_back.dto.ResponseDot;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class MainController {

    private List<ResponseDot> dotList = new ArrayList<>();

    @GetMapping(value = "/history")
    public ResponseEntity<List<ResponseDot>> history(HttpSession session){
        String username = (String)session.getAttribute("username");
        if (username == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok().body(dotList);
    }

    // other methods...

}