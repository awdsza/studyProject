<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<div class="container">
      <form class="form-signin"  name="loginFrm" action="${pageContext.request.contextPath}/action/login" method="post">
        <h2 class="form-signin-heading">로그인</h2>
        <label for="user_id" class="sr-only">아이디</label>
        <input type="text" class="form-control" placeholder="ID" required="" name="user_id" id="user_id">
        <label for="user_pw" class="sr-only">비밀번호</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" name="user_pw" id="user_pw">
        <c:if test="${user_cnt == 0}">
	        <label for="user_email" class="sr-only">이메일</label>
	        <input type="email" class="form-control"  name="user_email" id="user_email" required="" autofocus="">
        </c:if>
        <button class="btn btn-lg btn-primary btn-block" onclick="javascript:document.forms['loginFrm'].submit();">로그인</button>
        <c:if test="${user_cnt == 0}">
        	<button class="btn btn-lg btn-primary btn-block" onclick="javascript:location.href='${pageContext.request.contextPath}/login/account'">회원가입</button>
        </c:if>
      </form>
    </div>
<!-- 		<input type="text" name="id"/> -->
<!-- 		<input type="password" name="password"/> -->
<!-- 		<a href="#" onclick="javascript:document.forms['loginFrm'].submit();">로그인</a> -->
<%-- 		<a href="${pageContext.request.contextPath}/login/account">회원가입</a> --%>
</body>
</html>