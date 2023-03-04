package Lab_2;

import javax.servlet.*;
import java.io.IOException;

//应用程序内的所有请求都应传输到此servlet
public class AreaCheckFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException {
        response.setContentType("text/html; charset=UTF-8");
        try {
            Double.parseDouble(request.getParameter("x_h").trim());
            Double.parseDouble(request.getParameter("y_h").trim());
            Double.parseDouble(request.getParameter("r_h").trim());

            filterChain.doFilter(request, response);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void destroy() {

    }
}
