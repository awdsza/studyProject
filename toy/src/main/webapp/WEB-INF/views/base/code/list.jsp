<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<%@ include file="../include/top.jsp" %>
	<div class="container-fluid" id="codeController">
		<div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
				<ul class="nav nav-sidebar">
					<li class="active"><a href="#">Code관리</a></li>
					<li><a href="#">사용자관리</a></li>
					<li><a href="#">Analytics</a></li>
					<li><a href="#">Export</a></li>
				</ul>
				<!-- <ul class="nav nav-sidebar">
					<li><a href="">Nav item</a></li>
					<li><a href="">Nav item again</a></li>
					<li><a href="">One more nav</a></li>
					<li><a href="">Another nav item</a></li>
					<li><a href="">More navigation</a></li>
				</ul> -->
			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">코드관리</h1>
				<div class="table-responsive col-sm-6">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>코드</th>
								<th>코드명</th>
								<th>추가/삭제</th>
							</tr>
						</thead>
						<tbody>
								 <tr v-for="item in listParentCode">
									<td><a href="javascript:void(0);" v-on:click="fnOnClickListChildCode(item.parent_code)">{{item.parent_code}}</a></td>
									<td>{{item.code_title}}</td>
									<td><a href="javascript:void(0);" v-on:click="fnOnClickDeleteParentCode(item.parent_code)">코드 삭제</a></td>
								</tr>
							<tr>
								<td><input type="text" v-model="parent_code" maxlength="10"/></td>
								<td><input type="text" v-model="parent_code_title"/></td>
								<td><a href="#" v-on:click="fnOnClickCreateParentCode()">코드 등록</a></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="table-responsive col-sm-6">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>코드</th>
								<th>코드명</th>
								<th>추가/삭제</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in listChildCode">
								<td>{{item.child_code}}</td>
								<td>{{item.code_title}}</td>
								<td><a href="javascript:void(0);" v-on:click="fnOnClickDeleteChildCode(item.child_code)">코드 삭제</a></td>
							</tr>
							<tr>
								<td><input type="text" v-model="child_code" maxlength="10"/></td>
								<td><input type="text" v-model="child_code_title"/></td>
								<td><a href="#" v-on:click="fnOnClickCreateChildCode()">코드 등록</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/controller/code-controller.js"></script>
</body>
</html>