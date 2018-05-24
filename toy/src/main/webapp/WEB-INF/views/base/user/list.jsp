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
				<div>
					<div style="float:left;">
						<div style="float:left; margin-top:5px;">
							<label>사용자 ID</label>
						</div>
						<div class="col-md-11 xdisplay_inputx form-group has-feedback" style="width:200px;">
							<input type="text" class="form-control has-feedback-left" v-model="paramUserId" placeholder="사용자ID" aria-describedby="inputSuccess2Status1" style="width:200px;">
							<span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span> <span id="inputSuccess2Status1" class="sr-only">(success)</span>
						</div>
					</div>
					<div style="float:left; margin-left:50px;">
						<div style="float: left; margin-top:5px;">
							<label>사용자 이름</label>
						</div>
						<div class="col-md-11 xdisplay_inputx form-group has-feedback" style="width:200px;">
							<input type="text" class="form-control has-feedback-left" v-model="paramUserName" v-model="paramUserId"placeholder="사용자이름" aria-describedby="inputSuccess2Status1" style="width:200px;">
							<span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span> <span id="inputSuccess2Status1" class="sr-only">(success)</span>
						</div>
					</div>
					<div style="float:left; margin-left:50px;">
						<div style="float:left; margin-left:25px;">
  							<input type=" button" class="btn btn-success" value="검색" v-on:click="fnOnClickSearch()">
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
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
								<td>
									<div class="btn-group  btn-group-xs">
			                        	<button class="btn btn-default" v-bind:class="{'btn-info':item.user_rest=='Y'}" type="button" v-on:click="fnOnClickRestYn(item,'Y')">&nbsp; 휴면계정&nbsp;</button>
			                        	<button class="btn btn-default" v-bind:class="{'btn-danger':item.user_rest=='N'}" type="button" v-on:click="fnOnClickRestYn(item,'N')">활동계정</button>
									</div>
								</td>
								<td>
									<div class="btn-group  btn-group-xs">
			                        	<button class="btn btn-default" v-bind:class="{'btn-info':item.user_yn=='Y'}" type="button" v-on:click="fnOnClickUseYn(item,'Y')">&nbsp; 사용&nbsp;</button>
			                        	<button class="btn btn-default" v-bind:class="{'btn-danger':item.user_yn=='N'}" type="button" v-on:click="fnOnClickUseYn(item,'N')">미사용</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="btn-group">
					<a class="btn btn-default" v-on:click="fnOnClickPager(pagerObj.startPageNum)" >&lt;</a>
				<!-- 						ngRepeat: item in pager.pagerNums -->
					<a class="btn btn-default" v-for="item in pagerObj.pagerNums" v-bind:class="{'btn-info': item == pagerObj.pageNum}" v-on:click="fnOnClickPager(item)">{{item}}</a>
				<!-- 						end ngRepeat: item in pager.pagerNums -->
					<a class="btn btn-default"  v-on:click="fnOnClickPager(pagerObj.endPageNum)">&gt;</a>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/controller/user-controller.js"></script>
</body>
</html>