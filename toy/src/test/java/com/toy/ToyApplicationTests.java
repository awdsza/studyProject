package com.toy;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.toy.code.dto.CodeDto;
import com.toy.code.mapper.CodeMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@WebAppConfiguration
public class ToyApplicationTests {

	 @Autowired
	    private DataSource ds; //�ۼ�
	 @Autowired
	    private SqlSessionFactory sqlSession; //�ۼ�
	 	@Autowired
	 	private CodeMapper codeMapeer;
	    @Test
	    public void contextLoads() {
	    }
	    
	    @Test
	    public void testSqlSession() throws Exception{//�ۼ�
	        
	        System.out.println("sqlSession : "+sqlSession);
	        
	    }
	    @Test
	    public void testMapper() throws Exception{//�ۼ�
	        
	        CodeDto vo = new CodeDto();
	        
	        vo.setParent_code("BOR_TYPE");
	        vo.setCode_title("�Խ���Ÿ��");
	        System.out.println(codeMapeer.listParentCode());
	        
	    }
}
