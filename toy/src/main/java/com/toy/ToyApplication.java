package com.toy;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;


@SpringBootApplication
@MapperScan(value = {"com.toy.*.mapper"})
public class ToyApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToyApplication.class, args);
	}
	/**
     * SqlSessionFactory ¼³Á¤
     */
	@Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource,ApplicationContext applicationContext)throws Exception{
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        
        Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath:mappers/*/*Mapper.xml");
        Resource conf = applicationContext.getResource("classpath:mybatis-config.xml");
        sessionFactory.setMapperLocations(res);
        sessionFactory.setConfigLocation(conf);
        return sessionFactory.getObject();
    }
}
