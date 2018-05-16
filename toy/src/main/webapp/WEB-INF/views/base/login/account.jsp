<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<div class="container">
      <form class="form-signin" name="accountFrm" action="${pageContext.request.contextPath}/action/account" method="post">
         <h2 class="form-signin-heading">회원가입</h2>
        <label for="user_id" class="sr-only">아이디</label>
        <input type="text" class="form-control" required="" name="user_id" id="user_id">
        <label for="user_pw" class="sr-only">비밀번호</label>
        <input type="password" class="form-control"  name="user_pw" id="user_pw" required="">
        <label for="user_email" class="sr-only">이메일</label>
        <input type="email" class="form-control"  name="user_email" id="user_email" required="" autofocus="">
        <label for="user_name" class="sr-only">이름</label>
        <input type="text" class="form-control"  name="user_name" id="user_name" required="" autofocus="">
        <label for="user_phone" class="sr-only">번호</label>
        <input type="text" class="form-control"  name="user_phone" id="user_phone" required="" autofocus="">
        <label for="user_addr" class="sr-only">주소</label>
        <input type="text" class="form-control"  name="user_addr" id="user_addr" required="" autofocus="">
        <label for="user_addr" class="sr-only">사용자 구분</label>
        <select>
        </select>
        <button class="btn btn-lg btn-primary btn-block" onclick="javascript:location.href='${pageContext.request.contextPath}/login/account'">회원가입</button>
      </form>
    </div>
</body>
</html>