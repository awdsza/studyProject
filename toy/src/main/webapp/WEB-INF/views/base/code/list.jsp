<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/tag.jsp" %>
<%@ include file="../include/header.jsp" %>
<body>
	<form method="post" action="${pageContext.request.contextPath}/action/code/parent/insert" name="codeinsert">
		<table style="border: 1px solid #e5e5e5;">
			<thead>
				<th>코드</th>
				<th>코드명</th>
			</thead>
			<tbody>
				<c:forEach var="vo" items="${parent}">
					<tr>
						<td>${vo.parent_code}</td>
						<td>${vo.code_title}</td>
						<td><a href="/code/parent/delete/${vo.parent_code}">코드 삭제</a></td>
					</tr>
				</c:forEach>
				<tr>
					<td><input type="text" maxlength="10" name="parent_code"/></td>
					<td><input type="text" name="code_title"/></td>
					<td><a href="#" onclick="javascript:document.forms['codeinsert'].submit();">코드 등록</a></td>
				</tr>
			</tbody>
		</table>
	</form>
</body>
</html>