$.ajax({
	type:"get",
	url:"new_file.json",
	async:true,
	dataType:"json",
	success:function(data){
		$(".nav-1 p").text(data.nav)
		$.each(data.img,function(i,n){
			$(".swiper-slide img").eq(i).attr("src",n)
		});
		$.each(data.nei, function(i,n) {
			$(".neirong img").eq(i).attr("src",n)
		});
		$.each(data.neirong, function(i,n) {
			$(".neirong p").eq(i).text(n)
		});
		$.each(data.ce, function(i,n) {
			$(".ceping p").eq(i).text(n)
		});
		$.each(data.img1, function(i,n) {
			$(".jie-1 img").eq(i).attr("src",n)
		});
		$.each(data.p, function(i,n) {
			$(".juzhong .p").eq(i).text(n)
		});
		$(".jiewei .p1").text(data.p1)
		$(".right").text(data.p2)
	}
});