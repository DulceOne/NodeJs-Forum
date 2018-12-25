$(document).ready(function() {
	const APIurl = "http://localhost:1337";
	
	$(".signin").click( () => {
		if ($(".login").val() && $(".password").val()){
			$.ajax({
				url: `${APIurl}/signin`,
				method: "POST",
				data:{
					login: $(".login").val(),
					password: $(".password").val()
				}
			}).done( (result) => {
				if (result.token)
					localStorage.setItem("x-access-token", result.token);
				else
					alert(result.message);
			})
		}
	}) 

	$(".modal .signup .close, .wrapper .nav .signup").click( () => {
		$(".modal").toggle("show");
	})

	$(".modal .signup .signupBtn").click( () => {
		if ($("#login").val() && $("#email").val() && $("#password").val() == $("#repassword").val()) { 
			$.ajax({
				url: `${APIurl}/signup`,
				method: "POST",
				data:{
					name: $("#login").val(),
					email: $("#email").val(),
					password: $("#password").val()
				}
			})
		}
	})

	if (location.pathname.includes("/thread/")) {
		CKEDITOR.replace( "editor1" );

		$(".send").click( function() {
			if (localStorage.getItem("x-access-token")){
				$.ajax({
					url: `${APIurl}/comment/add`,
					method: "POST",
					data: {
						comment: CKEDITOR.instances.editor1.getData(),
						id: $(this).data("id"),
						toUserId: $(".replyBlock").data("id")

					},
					headers: {
						"x-access-token": localStorage.getItem("x-access-token")
					}
				})
			}
			else {
				alert("You must be logged in before posting comments.");
			}
		})
	}

	$(".reply").click( function () {
		$(".to, .replyBlock").addClass("swap");
		$(".replyBlock").text($(this).data("name")).attr("data-id",$(this).data("id"));
	})
	
	$(".replyBlock").click( function () {
		
	})

});