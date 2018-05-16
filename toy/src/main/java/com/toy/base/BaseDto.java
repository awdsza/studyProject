package com.toy.base;

import java.util.Date;

import lombok.Data;

@Data
public class BaseDto {
	private String create_user_id;
	private Date create_date;
	private String update_user_id;
	private Date update_date;
}
