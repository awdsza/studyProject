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
					<li><a href="${pageContext.request.contextPath}/code/parent/list">Code����</a></li>
					<li class="active"><a href="/${pageContext.request.contextPath}/user/list">����ڰ���</a></li>
					<li><a href="#">�Խ���</a></li>
					<li><a href="#">Export</a></li>
				</ul>
			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">����ڰ���</h1>
				<div class="row" v-show="isShowUpdatePage">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="x_panel">
							<div class="x_title">
								<div class="col-md-9 col-sm-9 col-xs-10 "><h5>����� �߰�/����({{detail.user_id}})  <small>�ý��� ����ڸ� �߰��ϰų� �����մϴ�.</small></h5></div>
								<div class="col-md-3 col-sm-3 col-xs-2 ">
									<ul class="nav pull-right panel_toolbox ">				
										<li><a class="close-link"><i class="fa fa-close"></i></a></li>
									</ul>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								<br>
								<form class="form-horizontal form-label-left input_mask ng-pristine">
									<div class="col-md-9 col-sm-9 col-xs-7 form-group has-feedback" v-show="!isUpdate">
										<input type="text" class="form-control has-feedback-left" id="inputSuccess1" placeholder="���̵�">
										<span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-3"  v-show="!isUpdate">
										<button type="button" class="btn btn-default btn-sm">���̵� �ߺ�Ȯ��</button>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
										<input type="password" class="form-control has-feedback-left" id="inputSuccess2" placeholder="��й�ȣ">
										<span class="fa fa-key form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
										<input type="password" class="form-control has-feedback-left" id="inputSuccess3" placeholder="��й�ȣ Ȯ��">
										<span class="fa fa-key form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-12 col-sm-12 col-xs-12 form-group has-feedback">
										<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="�̸�" v-model="detail.user_name">
										<span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-12 col-sm-12 col-xs-12 form-group has-feedback">
										<input type="text" class="form-control has-feedback-left" id="inputSuccess5" placeholder="Email" v-model="detail.user_email">
										<span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">
										<input type="number" class="form-control has-feedback-left " id="inputSuccess6"  placeholder="Phone1" v-model="detail.user_phone1"> 
										<span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
									</div>
									<div class="col-md-1 col-sm-1 col-xs-1 form-group has-feedback" style="text-align: center;">-</div>
									<div class="col-md-3 col-sm-3 col-xs-11 form-group has-feedback">
										<input type="number" class="form-control" id="inputSuccess7" placeholder="Phone2" v-model="detail.user_phone2">						
									</div>
									<div class="col-md-1 col-sm-1 col-xs-1 form-group has-feedback" style="text-align: center;">-</div>
									<div class="col-md-4 col-sm-4 col-xs-11 form-group has-feedback">
										<input type="number" class="form-control" id="inputSuccess8" placeholder="Phone3" v-model="detail.user_phone3">
									</div>
									<div class="form-group">
										<label class="control-label col-md-3 col-sm-3 col-xs-12">����� ����</label>
										<div class="col-md-9 col-sm-9 col-xs-12">
											<select class="form-control ng-pristine" v-model="detail.user_type">
												<option v-for="item in listUserType" :value="item.child_code">{{item.code_title}}</option>
					                          	<!-- ngRepeat: code in listUserTypeCodes -->
											</select>
										</div>
									</div>				
									<div class="ln_solid"></div>
									<div class="form-group">
										<div class="col-md-12 col-sm-12 col-xs-12">
											<button type="button" class="btn btn-primary pull-right" v-on:click="fnOnClickCancel()">Cancel</button>
											<button type="button" class="btn btn-success pull-right" v-on:click="fnOnClickUpdate()" v-show="!isUpdate">Create</button>
											<button type="button" class="btn btn-success pull-right" v-show="isUpdate">Update</button>						
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div>
				</div>
				<div>
					<div style="float:left;">
						<div style="float:left; margin-top:5px;">
							<label>����� ID</label>
						</div>
						<div class="col-md-11 xdisplay_inputx form-group has-feedback" style="width:200px;">
							<input type="text" class="form-control has-feedback-left" v-model="paramUserId" placeholder="�����ID" aria-describedby="inputSuccess2Status1" style="width:200px;">
							<span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span> <span id="inputSuccess2Status1" class="sr-only">(success)</span>
						</div>
					</div>
					<div style="float:left; margin-left:50px;">
						<div style="float: left; margin-top:5px;">
							<label>����� �̸�</label>
						</div>
						<div class="col-md-11 xdisplay_inputx form-group has-feedback" style="width:200px;">
							<input type="text" class="form-control has-feedback-left" v-model="paramUserName" v-model="paramUserId"placeholder="������̸�" aria-describedby="inputSuccess2Status1" style="width:200px;">
							<span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span> <span id="inputSuccess2Status1" class="sr-only">(success)</span>
						</div>
					</div>
					<div style="float:left; margin-left:50px;">
						<div style="float:left; margin-left:25px;">
  							<input type=" button" class="btn btn-success" value="�˻�" v-on:click="fnOnClickSearch()">
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>����� ID</th>
								<th>����� ��</th>
								<th>�̸���</th>
								<th>����� Ÿ��</th>
								<th>�޸鿩��</th>
								<th>��뿩��</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in listUser">
								<td><a v-on:click="fnOnClickDetailUser(item)">{{item.user_id}}</a></td>
								<td>{{item.user_name}}</td>
								<td>{{item.user_email}}</td>
								<td>{{item.user_type_title}}</td>
								<td>
									<div class="btn-group  btn-group-xs">
			                        	<button class="btn btn-default" v-bind:class="{'btn-info':item.user_rest=='Y'}" type="button" v-on:click="fnOnClickRestYn(item,'Y')">&nbsp; �޸����&nbsp;</button>
			                        	<button class="btn btn-default" v-bind:class="{'btn-danger':item.user_rest=='N'}" type="button" v-on:click="fnOnClickRestYn(item,'N')">Ȱ������</button>
									</div>
								</td>
								<td>
									<div class="btn-group  btn-group-xs">
			                        	<button class="btn btn-default" v-bind:class="{'btn-info':item.user_yn=='Y'}" type="button" v-on:click="fnOnClickUseYn(item,'Y')">&nbsp; ���&nbsp;</button>
			                        	<button class="btn btn-default" v-bind:class="{'btn-danger':item.user_yn=='N'}" type="button" v-on:click="fnOnClickUseYn(item,'N')">�̻��</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<pager v-bind:pass="pagerObj"></pager>
			</div>
		</div>
	</div>
	<%@ include file="../include/script.jsp" %>
	<script src="${pageContext.request.contextPath}/resources/base/js/distribute/user-build.js"></script>
</body>
</html>