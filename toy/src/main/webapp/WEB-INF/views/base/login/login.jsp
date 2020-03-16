<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<div class="container" id="loginController">
      <form class="form-signin"  name="loginFrm" action="${pageContext.request.contextPath}/action/login" method="post">
        <h2 class="form-signin-heading">로그인</h2>
        <label for="paramUserId" class="sr-only">아이디</label>
        <input type="text" class="form-control" placeholder="ID" required="" name="paramUserId" id="paramUserId" v-model="paramUserId">
        <label for="paramUserPw" class="sr-only">비밀번호</label>
        <input type="password" class="form-control" placeholder="Password" required="" name="paramUserPw" id="paramUserPw" v-model="paramUserPw">
        <c:if test="${user_cnt == 0}">
	        <label for="user_email" class="sr-only">이메일</label>
	        <input type="email" class="form-control"  name="user_email" id="user_email" required="" autofocus="">
        </c:if>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="fnOnClickLogin()">로그인</button>
        <button class="btn btn-lg btn-primary btn-block" onclick="javascript:location.href='${pageContext.request.contextPath}/login/account'">회원가입</button>
      </form>
    </div>
    <%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/controller/login-controller.js"></script>
</body>
</html>