<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<%@ include file="../include/top.jsp" %>
	<div class="container-fluid" id="userController" v-cloak>
		<div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
				<ul class="nav nav-sidebar">
					<li><a href="${pageContext.request.contextPath}/code/parent/list">Code관리</a></li>
					<li class="active"><a href="/${pageContext.request.contextPath}/user/list">사용자관리</a></li>
					<li><a href="#">Analytics</a></li>
					<li><a href="#">Export</a></li>
				</ul>
			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">사용자관리</h1>
				<!-- <div>
					<div>
						<label>아이디</label>
					</div>
					<div class="col-md-6 xdisplay_inputx form-group has-feedback" style="width:200px; margin-left:10px;">
						<input type="text" class="form-control has-feedback-left" id="single_cal2" placeholder="아이디" aria-describedby="inputSuccess2Status2"  v-model="paramUserId">
						<span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span> 
						<span id="inputSuccess2Status2" class="sr-only">(success)</span>
					</div>
					<div style="float:left; margin-left:25px;">
							<input type="button" class="btn btn-success">검색
					</div>
				</div> -->
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>사용자 ID</th>
								<th>사용자 명</th>
								<th>이메일</th>
								<th>사용자 타입</th>
								<th>휴면여부</th>
								<th>사용여부</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in listUser">
								<td>{{item.user_id}}</td>
								<td>{{item.user_name}}</td>
								<td>{{item.user_email}}</td>
								<td>{{item.user_type_title}}</td>
								<td>{{item.user_rest}}</td>
								<td>{{item.user_yn}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<div class="btn-group">
						<a class="btn btn-default" v-on:click="fnOnClickPager(pager.startPageNum)" >&lt;</a>
<!-- 						ngRepeat: item in pager.pagerNums -->
						<a class="btn btn-default" v-for="item in pager.pagerNums" v-bind:class="{'btn-info': item == pager.pageNum}" v-on:click="fnOnClickPager(item)">{{item}}</a>
<!-- 						end ngRepeat: item in pager.pagerNums -->
						<a class="btn btn-default"  v-on:click="fnOnClickPager(pager.endPageNum)">&gt;</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/controller/user-controller.js"></script>
</body>
</html>