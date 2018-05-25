package com.toy;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@WebAppConfiguration
public class ToyApplicationTests {

	 	@Autowired
	    private DataSource ds; //�ۼ�
	 	@Autowired
	    private SqlSessionFactory sqlSession; //�ۼ�
	    @Test
	    public void contextLoads() {
	    }
	    
	    @Test
	    public void testSqlSession() throws Exception{//�ۼ�
	        
	        System.out.println("sqlSession : "+sqlSession);
	        
	    }
}
