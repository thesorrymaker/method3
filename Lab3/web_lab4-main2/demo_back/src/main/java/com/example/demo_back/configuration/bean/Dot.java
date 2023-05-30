package com.example.demo_back.configuration.bean;

import lombok.Data;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
public class Dot implements Serializable {
    private Double x;
    private Double y;
    private Integer r;
    private Boolean hit;
    private String date;
    public Dot(Double X,Double Y, Integer R){
        this.x = X;
        this.y = Y;
        this.r = R;
        checkHit();
        toDateString();
    }

    public void checkHit(){
        if(x*x+y*y<=0.25*r*r && x>=0 && y>=0){
            this.hit = true;
        }else if(x>=0&&y<=0 && x<=0.5*r && y>=-r){
            this.hit = true;
        }else if ((x<=0&&y<=0) && x>=-r && y>=-0.5*x-0.5*r){
            this.hit = true;
        }else{
            this.hit=false;
        }
    }
    private void toDateString(){
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.date = ft.format(new Date());
    }
}