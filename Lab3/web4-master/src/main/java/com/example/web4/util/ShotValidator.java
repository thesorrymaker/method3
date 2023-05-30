package com.example.web4.util;

public class ShotValidator {
    public static boolean isHit(double x, double y, double r){
        return isCircleZone(x, y, r) || isTriangleZone(x, y, r) || isRectangleZone(x, y, r);
    }

    public static boolean isCircleZone(double x, double y, double r) {
        if (r > 0) {
            return x >= 0 && y <= 0 && (x * x + y * y <= r * r);
        }
        if (r < 0){
            return x <=0 && y >= 0  && (x * x + y * y <= r * r);
        }
        return false;
    }

    public static boolean isTriangleZone(double x, double y, double r) {
        if (r > 0) {
            return x <= 0 && y >= 0 && (y <= 2 * x + r);
        }
        if (r < 0){
            return  x >= 0 && y <= 0 && (y >= 2 * x + r);
        }
        return false;
    }

    public static boolean isRectangleZone(double x, double y, double r){
        if (r > 0){
            return x >= 0 && y >= 0 && x <= r/2 && y <= r;
        }
        if (r < 0){
            return x <= 0 && y <= 0 && x >= r/2 && y >= r;
        }
        return false;
    }


}
