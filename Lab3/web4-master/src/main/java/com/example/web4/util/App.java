package com.example.web4.util;

import com.example.web4.controller.*;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/app")
public class App extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> set = new HashSet<>();
        set.add(ShotController.class);
        set.add(UserController.class);
        set.add(RegistrationController.class);
        set.add(LoginController.class);
        return set;
    }
}

