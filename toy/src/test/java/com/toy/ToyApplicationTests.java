package com.toy;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@WebAppConfiguration
public class ToyApplicationTests {

	@Autowired
	private DataSource ds; // 작성
	@Autowired
	private SqlSessionFactory sqlSession; // 작성

	@Test
	public void contextLoads() {
	}

	@Test
	public void testSqlSession() throws Exception {// 작성

		System.out.println("sqlSession : " + sqlSession);

	}
}
