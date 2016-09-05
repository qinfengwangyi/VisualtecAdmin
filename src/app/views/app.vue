<template>
<div class="main">
		<!--top-->
		<div class="top-wrap clearfix">
			<div class="logo-wrap"><a href="javascript:;" class="logo"></a>Google后台管理中心</div>
			<div class="operation clearfix">
				<ul>
					<li class="operat"><a class="a-show" href="javascript:;">消息</a></li>
					<li class="operat"><a class="a-show" href="javascript:;">设置</a></li>
					<li class="operat"><a class="a-show" href="javascript:;">qinfengwangyi@163.com</a><a class="a-hidden" href="javascript:;">注销</a></li>
				</ul>
			</div>
		</div>
		<!--content-->
		<div class="content-wrap">
			<div class="content">
				<div class="left" id="app_menu">
					<div class="min-max"><a href="javascrip:;">隐藏</a></div>
					<!-- <div class="logo-wrap">Google</div> -->
					<ul>
						<li class="menu">
							<a class="menu-title" href="javascript:;">文章管理</a>
							<ul>
								<li class="menu-item"><a class="item-title" v-link="{path:'/', activeClass:'active'}">首页测试</a></li>
								<li class="menu-item"><a class="item-title" v-link="{ path: '/home', activeClass:'active'}">首页</a></li>
								<li class="menu-item"><a class="item-title" v-link="{ path: '/about', activeClass:'active'}">关于</a></li>
							</ul>
						</li>
						<li class="menu">
							<a class="menu-title" href="javascript:;">数据库管理</a>
							<ul>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
							</ul>
						</li>
						<li class="menu">
							<a class="menu-title" href="javascript:;">评论管理</a>
							<ul>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
							</ul>
						</li>
						<li class="menu">
							<a class="menu-title" href="javascript:;">留言管理</a>
							<ul>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
							</ul>
						</li>
						<li class="menu">
							<a class="menu-title" href="javascript:;">系统管理</a>
							<ul>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
								<li class="menu-item"><a class="item-title" href="javascript:;">二级菜单</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="right">
					<div class="r-wrap">
						<div class="nav-wrap">
							<a href="#">首页</a>
							<a href="#">当前模块</a>
							<a href="#">当前页1</a>
						</div>
						<div class="main-content-wrap">
							<div class="main-content">
								<router-view
									keep-alive
							        transition="fade"
							        transition-mode='out-in'></router-view>
						    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>