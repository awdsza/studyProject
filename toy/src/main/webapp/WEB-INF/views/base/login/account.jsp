<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<div class="container" id="userController">
      <form class="form-signin" name="accountFrm" action="${pageContext.request.contextPath}/action/user/insert" method="post">
         <h2 class="form-signin-heading">회원가입</h2>
         <div class="col-md-9 col-sm-9 col-xs-7 form-group has-feedback">
	        <label for="user_id" class="sr-only">아이디</label>
	        <input type="text" class="form-control" required="" name="detail.user_id" id="user_id" placeholder="ID" v-model="detail.user_id">
         </div>
         <div class="col-md-3 col-sm-3 col-xs-3">
			<button type="button" class="btn btn-default btn-sm" v-on:click="fnOnClickCheckID()">아이디 중복확인</button>
		</div>
         <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
	        <label for="user_pw" class="sr-only">비밀번호</label>
	        <input type="password" class="form-control"  name="detail.user_pw" id="user_pw" required="" placeholder="비밀번호" v-model="detail.user_pw">
         </div>
         <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
	        <label for="user_pw_confirm" class="sr-only">비밀번호</label>
	        <input type="password" class="form-control"  required="" placeholder="비밀번호확인" v-model="detail.user_pw_confirm">
         </div>
         <div class="col-md-12 col-sm-12 col-xs-12 form-group has-feedback">
	        <label for="user_email" class="sr-only">이메일</label>
	        <input type="email" class="form-control"  name="detail.user_email" id="user_email" required="" autofocus="" placeholder="이메일" v-model="detail.user_email">
         </div>
         <div class="col-md-12 col-sm-12 col-xs-12 form-group has-feedback">
	        <label for="user_name" class="sr-only">이름</label>
	        <input type="text" class="form-control"  name="detail.user_name" id="user_name" required="" autofocus="" placeholder="이름" v-model="detail.user_name">
         </div>
         <div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
	        <label for="user_phone" class="sr-only">번호</label>
	        <input type="text" class="form-control"  name="detail.user_phone1" id="user_phone" required="" autofocus="" placeholder="번호" v-model="detail.user_phone1">
         </div>
         <div class="col-md-1 col-sm-1 col-xs-1 form-group has-feedback">- </div>
         <div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
	        <input type="text" class="form-control"  name="detail.user_phone2" required="" autofocus="" placeholder="번호" v-model="detail.user_phone2">
         </div>
         <div class="col-md-1 col-sm-1 col-xs-1 form-group has-feedback">- </div>
         <div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
	         <input type="text" class="form-control"  name="detail.user_phone3" required="" autofocus="" placeholder="번호" v-model="detail.user_phone3">
         </div>
         <div class="col-md-12 col-sm-12 col-xs-12 form-group has-feedback">
	        <label for="user_addr" class="sr-only">주소</label>
	        <input type="text" class="form-control"  name="detail.user_addr" id="user_addr" required="" autofocus="" placeholder="주소" v-model="detail.user_addr">
         </div>
         <div class="col-md-9 col-sm-9 col-xs-12 form-group has-feedback">
	        <label for="user_addr" class="sr-only">사용자 구분</label>
	        <select name="detail.user_type" class="form-control">
	        	<c:forEach var="usr_type" items="${usr_type}">
	        		<option value="${usr_type.child_code}">${usr_type.code_title}</option>
	        	</c:forEach>
	        </select>
         </div>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="fnOnClickCreateUser()">회원가입</button>
      </form>
    </div>
    <%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/controller/user-controller.js"></script>
</body>
</html>