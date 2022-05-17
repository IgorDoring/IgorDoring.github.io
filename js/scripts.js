$(document).ready(function(){

	$(".qualificacoes .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});

	$(".qualificacoes .expandable").click(function () {
		$(".qualificacoes .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});
	});
	
	$(".idioma .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});

	$(".idioma .expandable").click(function () {
		$(".idioma .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});
	});
	
	$(".experiencia .info-text *:not(h5, h5 > *, br)").each(function () {
			$(this).toggleClass("d-none");
		});

	$(".experiencia .expandable").click(function () {
		$(".experiencia .info-text *:not(h5, h5 > *, br)").each(function () {
			$(this).toggleClass("d-none");
		});
	});
	
	$(".formacao .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});

	$(".formacao .expandable").click(function () {
		$(".formacao .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});
	});
	
	$(".portfolio .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});

	$(".portfolio .expandable").click(function () {
		$(".portfolio .info-text *:not(h5, h5 > *)").each(function () {
			$(this).toggleClass("d-none");
		});
	});
});