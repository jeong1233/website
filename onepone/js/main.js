@charset "utf-8";

/******container********/
#container{
}

/***mainBanner***/
.mainBanner{
	padding: 23% 0 75% 0;
	background: url(../images/mainBanner.png) no-repeat center center;
	background-size: cover;
	overflow: hidden;
	position: relative;
}
.mainBanner h1{
	font-family: "NanumMyeongjo", sans-serif;
	font-weight: 700;
	font-size: 30px;
	text-align: center;
	padding-top: 0;
}

.mText{
	background: url(../images/textBox.png) no-repeat 42% center;
	background-size: 50%;
	padding: 25% 0;
	margin: 10px 0;
	font-family: "NanumMyeongjo", sans-serif;
	font-weight: 400;
	font-size: 25px;
}
.mInfo{
	line-height: 40px;
	margin-left: -39px;
	position: absolute;
	width: 100%;
	top: 24%;
	left: 50%;
	margin-left: -48px;
}
/*.playBtn{
	position: absolute;
	bottom: 25%;
	left: 50%;
	margin-left: -30px;
}
.playBtn li{
	float: left;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid #fff;
	text-indent: -9999px;
	margin-right: 5px;
}
.playBtn li:first-child{
	background: #fff;
}*/

/****추천메뉴****/
.rMenu{
	padding: 60px 5%;
	text-align: center;
	position: relative;
}
.rMenu dt{
	text-align: center;
	font-family: "NanumMyeongjo", sans-serif;
	font-weight: 900;
	font-size: 30px;
	letter-spacing: 3px;
}
.rMenu dt span{
	position: absolute;
	top: 20px;
	right: 10px;
	font-family: 'NotoSans', sans-serif;
	font-weight: 500;
	font-size: 13px;
	letter-spacing: normal;
}
.rMenu span img{
	width: 10px;
}
.rMenu dd{
	display: inline-block;
	margin-top: 12%;
	margin-left: 25%;
	text-align: center;
}
.rMenu dd span{
	display: block;
	margin-top: 10px;
	font-weight: 400;
	font-size: 16px;
}
.rMenu .menu01{
    margin-left: 0;
	margin-top: 63px;
}
.menu01 img{
	width: 80px;
}
.menu02 img{
	width: 80px;
}

/***브랜드소개***/
.brandInfo{
	background: #F6F7F8; 
	height: 285px;
	padding: 35px 5%;
	font-family: 'NanumMyeongjo', sans-serif;
}
.brandInfo li{
	line-height: 30px;
	font-weight: 900;
}
.brandInfo .infoText{
	display: inline-block;
	font-size: 17px;
	float: right;
	padding-top: 7%;
}
.brandInfo .infoText p{
	padding-top: 15px;
}
.brandInfo .infoText .text01{
	padding-top: 0;
}
.brandInfo .infoTitle{
	float: left;
	font-size:25px;
}
.infoTitle p{
	color: #F46606;
	padding-top: 25px;
}

/***매장찾기***/
.store{
	background: url(../images/storeBg.png) no-repeat center center;
	background-size: cover;
	padding: 20px 5%;
	color: #fff;
}
.store dt{
	font-family: 'NanumMyeongjo', sans-serif;
	font-weight: 900;
	font-size: 30px;
	letter-spacing: 3px;
	text-align: center;
	padding-bottom: 20px;
}
.store dd{
	border: 2px solid #fff;
	height: 35px;
	line-height: 35px;
	text-indent: 13px;
	position: relative;
}
.store dd p{
	color: #fff;
	font-size: 15px;
	font-weight: 200;
}
.store dd img{
	width: 23px;
	position: absolute;
	top: 50%;
	margin-top: -10px;
	right: 15px;
}

/***가맹점문의***/
.franchise{
	background: #F6F7F8; 
	padding: 20px 0;
	position: relative;
}
.franchise h2{
	text-align: center;
	font-family: 'NanumMyeongjo', sans-serif;
	font-weight: 900;
	font-size: 30px;
	letter-spacing: 3px;
	margin-bottom: 20px;
}
.fTitle{
	margin-right: 10px;
}
.franchise span{
	position: absolute;
	top: 20px;
	right: 10px;
	font-family: 'NotoSans', sans-serif;
	font-weight: 500;
	font-size: 13px;
	letter-spacing: normal;
}
.franchise span img{
	width: 10px;
}
.franchise p{
	font-family: 'NotoSans', sans-serif;
	font-weight: 400;
	font-size: 18px;
	margin: 0 10px;
	text-align: center;
}

/***공지사항***/
.notice{
	padding: 20px 5%;
	position: relative;
}

.notice dt{
	font-family: 'NanumMyeongjo', sans-serif;
	font-size: 28px;
	font-weight: 900;
	text-align: center;
	margin-bottom: 20px;
}
.notice span{
	font-family: 'NotoSans', sans-serif;
	font-weight: 500;
	font-size: 13px;
	position: absolute;
	top: 20px;
	right: 10px;
}
.notice img{
	width: 10px;
}

.notice dd{
	font-size: 16px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px dotted #bbb;
	padding: 13px 0;
	margin: 0 10px;
}

/***sns***/
.sns{
	padding: 35px 5%;
}
.sns h2{
	text-align: center;
	font-family: 'NanumMyeongjo', sans-serif;
	font-size: 28px;
	font-weight: 900;
	margin-bottom: 20px;
}
.sns p{
	font-size: 18px;
	font-weight: 500;
	text-align: center;
}
.snsPhoto{
	text-align: center;
}
.sns span{
	display: inline-block;
	width: 87px;
	height: 87px;
	margin-right: 15px;
	margin-top: 30px;
	text-indent: -9999px;
}
.sns .sns01{
	background: url(../images/sns01.png) no-repeat center center;
	background-size: cover;
}
.sns .sns02{
	background: url(../images/sns02.png) no-repeat center center;
	background-size: cover;
}
.sns .sns03{
	background: url(../images/sns03.png) no-repeat center center;
	background-size: cover;
	margin-right: 0;
}
.sns .sns04{
	background: url(../images/sns04.png) no-repeat center center;
	background-size: cover;
}
.sns .sns05{
	background: url(../images/sns05.png) no-repeat center center;
	background-size: cover;
}
.sns .sns06{
	background: url(../images/sns06.png) no-repeat center center;
	background-size: cover;
	margin-right: 0;
}
