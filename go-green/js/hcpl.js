$(document).ready(function (){
	
	
	if ($(".bodyclass").length > 0){
	    $("body").addClass($(".bodyclass").text()); 
	}
	
	$(".nav-header .menu").click(function(){
	window.location.replace("/en/index.page");
	});
	$(".LeftPanel").click(function(){
	window.location.replace("https://m.icicibank.co.in/BANKAWAY?Action.RetUser.WAPInit.001=Y&amp;AppSignonBankId=ICI&amp;AppType=corporate&amp;abrdPrf=N");
	});
	
	
	if ($(".wm .Logo").length > 0 && $(".wm .nav-header").length > 0){
		$("head link[rel='stylesheet']").last().after("<style type=\"text/css\">@media only screen and (max-width: 980px){.wm .nav-header {"+ $(".wm .Logo").attr("style") +"}}</style>");
	}
if($("#Other").length >0 ){	 
	 }
	$( ".nav-header .menu li" ).each(function() {
		if (!$(this).hasClass("selected")){
		var name = $(this).find("a").html();
		var normaliseName = normaliseString(name);
			$("ul.mobile-segments").append("<li id=nav-"+normaliseName+">"+$(this).html()+"</li>");
		}
	});
	

	if ($(".Other-Bank-Website").length > 0){
		var eq = 1;
		for(eq = 1; eq < $(".Other-Bank-Website option").length; eq ++){
			$("ul.mobile-other-websites").append("<li><a href=\""+$(".Other-Bank-Website option").eq(eq).val()+"\">"+$(".Other-Bank-Website option").eq(eq).html()+"</a></li>");
		}
	}
	
	if ($(".Country-Specific-Bank-Website").length > 0){
		var eq = 1;
		for(eq = 1; eq < $(".Country-Specific-Bank-Website option").length; eq ++){
			$("ul.mobile-country-websites").append("<li><a href=\""+$(".Country-Specific-Bank-Website option").eq(eq).val()+"\">"+$(".Country-Specific-Bank-Website option").eq(eq).html()+"</a></li>");
		}
	}
	
	if ($("div.leftColumnContainer ul:first-child").length > 0){
		var $leftColumnUL = $("div.leftColumnContainer ul");
		$leftColumnUL.parent().attr("data-content",$leftColumnUL.attr("data-content"));
	}
	
	/** Pratish : Please Put All Code After This Comment **/
	
	if ($("a.appbutton").length > 0){
		var link = $("a.btn.inline-btn:first").attr("href");
		var text = $("a.btn.inline-btn:first").text();
		$(".leftColumnContainer ul:last").append("<li class=\"cta\"><a class=\"btn\" href=\""+link+"\">"+text+"</a></li>");
	}
	
	if ($("#geoipcityAjaxurl").length > 0){
		var geoAjaxUrl = $("#geoipcityAjaxurl").attr("href");	
		$.ajax({
			url:geoAjaxUrl,
			success: function(data){		
				var phoneNumber = $(data).find("#customercare").val();	
				if (phoneNumber != 'undefined')	{            		
					$("#contactNo").html(phoneNumber.replace("</p>",'').replace("<p>",''));		 
				}
			}	
		});
	}
	
	if ($("footer div .copyrightclass").length > 0) {
		var currentYear = new Date().getFullYear();
		$("footer div .copyrightclass").append("ICICI Bank © "+currentYear+"  |  ");
	}
  
  
	
	if ($("*").hasClass("breadCrumbsContainer-megaNav")) {
		var nodeLabel = $(".breadCrumbsContainer .last").html();
		var html = $(".flyoutInnerContent").html();
		$(".breadCrumbsContainer .last").remove();
		$(".breadCrumbsContainer").append("<div class=\"flyoutLastNode\"><a class=\"last\" href=\"#\">"+nodeLabel+"</a>"+html+"</div>");
		$(".leftColumnContainer li").first().addClass("megaNav").append(html);
    }
	
	if ($("*").hasClass("reviewCount")) {
		var count = $(".reviewCount").val();
		$(".getCount").append(count);
    }
	
	if ($(".blog-top-name").length > 0) {
		var heading = $(".blog-top-name").html();
		$(".blog-heading").append(heading);
    }
	
	
	
	$("footer select.Other").change(function (e) {
    var optionSelected = $("option:selected", this);
    var url = this.value;
		window.open(url,"_blank");
	});
	
	/*currency dropdown*/
	if ($(".selectSearch #dropDown").length > 0) {
		if(!$(".selectSearch #dropDown").hasClass("selectbox_modal")){
			$(".selectSearch select#dropDown").change(function (e) {
			var optionSelected = $("option:selected", this);
			var url = this.value;
			window.open(url,"_blank");
		});
		}
	}
	$(".accordian h2").click(function(){
		var $this = $(this);
		$this.parent().toggleClass("close");
	}); 
	
	if ($(".accordian").length > 0){
		$(".accordian").each(function (index,element){
			if (index > 0){
				$(element).addClass("close");
			}
		});
	}
		
	if ($(".review-container").length > 0){
		$("#reviewstar").raty({
			scoreName: "score",
			starOff: $("input[name='staroff']").val(),
			starOn : $("input[name='staron']").val()
		});
	}
	
	if ($(".review-list").length > 0){
	    var staron = $("input[name='readonlystaron']").val();
		var staroff = $("input[name='readonlystaroff']").val();
		$(".review-rating").each(function (index,element){
			$(element).raty({
			    readOnly : true,
				starOff : staroff,
				starOn  : staron,
				score: function() {
					return $(element).attr("data-source");
				}
			});
		});
	}

	if ($(".reviewContainer").length > 0){
		facebookPanelData();
	}
	
	if ($(".reviewComparisonContainer").length > 0){
		facebookPanelData();
	}
	
	$("a.review-moderation").click( function(){
		var parent = $(this).parent(".review-moderation");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
				parent.html(data);
			}
		})
		return false;
	});
	
	$( ".rows:last" ).css({  border: "none" });
	
	/** modal : start */
	$(".selectbox_modal").change(function (){
		var target = $(this).val();
		var url_prefix = window.location.protocol+"//"+window.location.host;
		if (target !== "null" && target !== ""){
			$("#modal-content .modalContent").load(url_prefix+target, function (){
				$("#modal-background").fadeIn("400");
				$("#modal-content").fadeIn("600");
				$("#modal-content,#modal-background").toggleClass("active");
			});
		}
		return false;
	});
	
	
	$("a.modal-launcher").click(function (){
		var target = $(this).attr("href");
		if (target !== "null" && target !== ""){
			$("#modal-content .modalContent").load(target, function (){
				$("#modal-background").fadeIn("400");
				$("#modal-content").fadeIn("600");
				$("#modal-content,#modal-background").toggleClass("active");
			});
		}
		return false;
	});
	
	
	$("a.static-modal-launcher").click(function (){
		var target = $(this).attr("href");
		if (target !== "null" && target !== "") {
			$("#modal-content .modalContent").html($(target).html());
			$("#modal-background").fadeIn("400");
			$("#modal-content").fadeIn("600");
			$("#modal-content,#modal-background").toggleClass("active");
		}
		return false;
	});
	
	$("#modal-close").click(function (){
		$("#modal-background").fadeOut("600");
		$("#modal-content").fadeOut("400");
		$("#modal-content,#modal-background").toggleClass("active");
	});
	
	if($("#moreInsightsCarousel").length > 0){
		$("#moreInsightsCarousel").cycle().cycle('pause');
	};
	
	$(".drop-down-show-hide").hide();
	$("#dropDownTable").change(function(){
		$(this).find("option").each(function(){
			$("#" + this.value).hide();
		});
		$("#" + this.value).show();
	});
	
	/** msr partner **/
	if($("a#msr-partners-more-btn").length >0){ 
        var size_li = $("#msr-partners-box li").size();
        var x = 5;
		$("#msr-partners-box li:lt(" + x + ")").show();
		$("#msr-partners-more-box").on("click","a#msr-partners-more-btn",function() {
		    x = (x + 5 < size_li) ? x + 5 : size_li; 
            $("#msr-partners-box li:lt(" + x + ")").show();
            $("#showLess").show();
            if (x == size_li) {
			    $("#msr-partners-more-box").hide();
                $("a#msr-partners-more-btn").hide();
            }
        });
    }
			
			
			
			
	/** accordian with radio : start **/
	$('.radioHide').hide();
	$("input[name$='radioBullet']").click(function() {
		var test = $(this).val();
		$("div.desc").hide();
		$("#radioBullet" + test).show();
	});
		
	$("input:radio[name='co']").change(function() {
		var target = $('#'+this.value);
		$('select').attr('disabled','disabled');
		if($(this).is(":checked")) {
			target.removeAttr('disabled');
		}     
	});
		 
	$(".children").change(function(){
		$("#subscriptionsSubmit").attr("href",$(this).val());
	})
	/** accordian with radio : end **/
		
	/** poll : start **/
	$(".poll-view").on("click", "a.vote-link" , function(){
		$(".poll-result").html("");
		$(".poll-form").show();
		$(".view-result").show();
		$(".vote-link").hide();
	});
	
	$(".poll-view").on("click", "a" , function(){
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
				$(".poll-result").html(data);
				$(".vote-link").show();
				$(".view-result").hide();
				$(".poll-form").hide();
			}
		});
		return false;
	});
	
	$(".close-modal").click(function(){
		$("#modalOverlay").fadeOut(500);
		$("#modal").fadeOut(400);
	});
  	/** poll : end **/
	
	
	/** review : start **/
	$(".review-vote").on("click", "a.votes-increment", function(){
		var parent = $(this).parent(".review-vote");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
			$('.votes-increment').bind('click', false);
			alert("thank you for voting");
			}
		})
		return false;
	});
	
	$(".review-vote").on("click", "a.votes-decrement", function(){
		var parent = $(this).parent(".review-vote");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
			$('.votes-decrement').bind('click', false);
			alert("thank you for voting");
			}
		})
		return false;
	});
	
	$(".close-btn").click(function(){
		$(".comment-article").slideUp();
	});
	
	$("a.discuss-write-review").click(function(){
		$(".comment-article").slideDown();
	});
	
	$("#review-submit").click(function(){
		$(".comment-article").hide();
	});
	
	$("#allreview").click(function(){
		$("#allReviewTab").show();
		$("#mostHelpfulTab").hide();
		$("#helpfulbutton").hide();
		$("#allreviewbutton").show();
		$("#helpfulflag").hide();
	});
	
	$("#helpful").click(function(){
		$("#allReviewTab").hide();
		$("#allreviewbutton").hide();
		$("#mostHelpfulTab").show();
		$("#helpfulbutton").show();
		$("#helpfulflag").show();
	});
	
	$("#allcomment").click(function(){
		$("#allCommentTab").show();
		$("#mostHelpfulTab").hide();
	});
	
	$("#helpfulcomment").click(function(){
		$("#allCommentTab").hide();
		$("#mostHelpfulTab").show();
	});
	
	$("#allReviewTab").on("click","a.review-load", function (){
		$(this).remove();
		$("#load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-review").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$("#mostHelpfulTab").on("click","a.helpful-load", function (){
		$(this).remove();
		$("#helpful-box ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-helpful").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$("#allCommentTab").on("click","a.comment-load", function (){
		$(this).remove();
		$("#comment-load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-review").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$("#mostHelpfulCommentTab").on("click","a.comment-helpful-load", function (){
		$(this).remove();
		$("#comment-helpful-box ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-helpful").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$(".review-dropdown, .compliment").on("click","a.city-filter ,a.channel-filter", function (){
		var name=$(this).html();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {	
				$(".compliment").html(data);			
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	}); 
	
	$("#review-submit").click(function (){
		$(".comment-article .close-btn").trigger("click");
	});
	/** review : end **/
	
	/** facebook : start **/
	$(".facebooklogin .init").click(function (){
		var parent = $(this).parent();
		$.ajax({
			url : parent.attr("ajax"),
			data : parent.attr("data"),
			success : function (data) {
				$("#FacebookContainer").html(data);
				facebookLogin($("#FacebookContainer"));
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
	});
	/** facebook : end **/
	
	/** dashboard : start **/
	$(".dashboard-login .init,.review-login .init").click(function (){
		$(".facebooklogin .init").trigger("click");
	});
	
	$("a.social-filter").click(function(){
		if (!$(this).hasClass("selected")){
			$($("a.social-filter.selected").attr("ref")).hide();
			$("a.social-filter.selected").removeClass("selected");
			$(this).addClass("selected");
			$($(this).attr("ref")).show();
		}
	});
	
	$("#allTab, #friendsTab").on("click","a.social-load-db", function (){
		var parent = $(this).parent();
		$(this).remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				parent.append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** dashboard : end **/
	
	/** compliment : start **/
	$(".compliment").on("click","a.compliment-load", function (){
		$(this).remove();
		$(".answers-see-all ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".feedback-list").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** compliment : end **/
	

	/** viewcount : start **/
	if ($(".viewCount").length > 0){
	    var identifier = $("input[name='identifier']").val();
		var contentType = $("input[name='contentType']").val();
		var url = $("input[name='url']").val();
		var ajaxUrl = $("input[name='ajaxUrl']").val();
		$.ajax({
			url : ajaxUrl,
			data : "identifier="+identifier+"&contentType="+contentType+"&url="+url,
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
	}
	
	/** blog : start **/	
	if($("#RelatedBlogTag").length >0){
		var tag = $("#RelatedBlogTag").val();
		var ajaxpage = $("#RelatedBlogAjax").val();
		$.ajax({
			url : ajaxpage,
			data : "tag="+tag,
			success : function (data){
				$(".related-posts").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
					consoleLog(errorThrown);
			}
		});
	}
		
	$(".all-blog").on("click","a.blog-load", function (){
		$(this).remove();
		$("#blog-load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$("#blog-list").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** blog : end **/
	
	/** offer : start **/
	$(".offer-filter").click(function (){
		var category = $(this).attr("category");
		if (typeof category === "string" && category !== ""){
			$(".offer-filter-rel").each(function (index,element){
				if (!$(element).hasClass("hidden")){
					if ($(element).hasClass(category)){
						$(element).show();
					} else {
						$(element).hide();
					}
				}
			});
			
			$(".offer-filter-li").each(function (index,element){
				$(element).removeClass("selected");
				if ($(element).hasClass(category)){$(element).show();} else {$(element).hide();}
			});
		} else {
			$(".offer-filter-rel").each(function (index,element){
				if (!$(element).hasClass("hidden")){$(element).show();} else {$(element).hide();}
			});
			$(".offer-filter-li").removeClass("selected");
			$(".offer-filter-li").show();
		}
	});
	
	$(".offer-filter-sub").click(function (){
		var category = $(this).attr("category");
		$(".offer-filter-rel").each(function (index,element){
			if (!$(element).hasClass("hidden")){
				if ($(element).hasClass(category)){
					$(element).show();
				} else {
					$(element).hide();
				}
			}
		});
		$(".offer-filter-li").removeClass("selected");
		$($(this).parent()).addClass("selected");
	});

	if ($(".offer-items-wrapper").length > 0) {
		var staron = $("input[name='readonlystaron']").val();
		var staroff = $("input[name='readonlystaroff']").val();
		$(".offer-rating").each(function (index,element){
			$(element).raty({
			    readOnly : true,
				starOff : staroff,
				starOn  : staron,
				size    : 32,
				score: function() {
					return $(element).attr("data-source");
				}
			});
		});
	}
	
	if($("#offer-Details").length > 0) {
		var staron = $("input[name='staron']").val();
		var staroff = $("input[name='staroff']").val();
		var score = $("input[name='score']").val();
		$(".offer-rating").raty({
			readOnly : false,
			starOff : staroff,
			starOn : staron,
			halfStar : staron,
			size : 32,
			click : rateOffer,
			score: score
		});
	}
	
	$(".offer-more").click(function (){
		var firstOffer = parseInt($("input[name='displayedoffers']").val());
		var lastOffer = firstOffer + parseInt($("input[name='incrementoffers']").val());
		var category = $("li.offer-filter-li.selected a").attr("category");
		if (typeof category !== "string"){
			category = $("a.offer-filter").attr("category");
		}
		$(".offer-filter-rel").each(function (index,element){
			if (index >= firstOffer && index < lastOffer) {
				$(element).removeClass("hidden");
				if (typeof category === "string" && category !== "" && !$(element).hasClass(category)){
					$(element).hide();
				}
			}
		});
		$("input[name='incrementoffers']").val(lastOffer);
		if (lastOffer > $(".offer-filter-rel").length){
			$(this).parent().remove();
		}
	});
	

	$(".tncs-details").click(function(e){
        e.preventDefault();
        $(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
        $(this).parents('.offer-wrapper').find('.offer-terms').hide().siblings('.offer-right').show();
    });

    $(".tncs-link").click(function(e){
        e.preventDefault();
        $(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
        $(this).parents('.offer-wrapper').find('.offer-right').hide().siblings('.offer-terms').show();
    });
	
	if ($(".offer-filter").length > 0){
		var category = getParameterByName("category");
		if (typeof category === "string" && category !== ""){
			$(".offer-filter , .offer-filter-sub").each(function(index,element){
				if ($(element).attr("category") === category){
					$(element).trigger("click");
				}
			});
		}
	}
	/** offer : end **/
	
	/** addthis : start **/
	if ($(".offer-items-wrapper .answers-content,#allReviewTab .answers-content,.feedback-list .answers-article,.blog-list .offer-social").length > 0){
		$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-527c94d91f34afc5");
	}
	/** addthis : end **/
	
	
	
	
	/** product : start **/
	$(".hcpl-mnu-tab nav a").click(function headerChange(){
		var totalTab = $(".hcpl-mnu-tab nav a").length-1;
		var count = 0;
		var relativeCount = 1;
		for(count=0;count<=totalTab;count++){
			relativeCount=count+1;
			$(".hcpl-mnu-tab nav a").removeClass("selected");
		}
		var tab = $(this).attr("rel");
		$(this).attr("class","selected");
		var tabPlace = tab-1;
		for(count=0;count<=totalTab;count++){
			relativeCount=count+1;
			$("#customTab"+relativeCount).css("display","none");
		}
		var activeTab = "customTab"+tab;
		$("#"+activeTab).css("display","block");
	});
	/** product : end **/

	/** Search Page : Start **/
	if ($("input[name='searchallstore']").length > 0 && $("a.search-all-link").length > 0 && $(".allproductcount").length > 0){
		var allcount = $(".allproductcount").text();
		$(".displayallcount").html(allcount);
		$("a.search-all-link").attr("href", $("a.search-all-link").attr("href")+$("input[name='searchallstore']").val()+"&start=1&total="+allcount);
	}
	
	if ($("input[name='searchproductstore']").length > 0 && $("a.search-product-link").length > 0 && $("input[name='searchproductcount']").length > 0){
	  var productcount = $("input[name='searchproductcount']").val();
		$(".displayproductcount").html(productcount);
		$("a.search-product-link").attr("href", $("a.search-product-link").attr("href")+$("input[name='searchproductstore']").val()+"&start=1&total="+productcount);
	}
	
	if ($("input[name='searchfaqstore']").length > 0 && $("a.search-faq-link").length > 0 && $("input[name='searchfaqcount']").length > 0){
	  var faqcount = $("input[name='searchfaqcount']").val();
		$(".displayanswerscount").html(faqcount);
		$("a.search-faq-link").attr("href", $("a.search-faq-link").attr("href")+$("input[name='searchfaqstore']").val()+"&start=1&total="+faqcount);
	}
	
	$(".search-list-container").on("click","a.search-load", function (){
		$(this).remove();
		$(".search-list #down-icon").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".search-list-container").append(data);
				searchRating();
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$(".leftColumnContainer li a.search-navigation").click(function (){
		if (!$(this).hasClass("selected")){
			$(".search-navigation.selected").removeClass("selected");
			$(this).addClass("selected");
			$(".page-heading").html($(this).text().replace("›","").replace("(","(<span>").replace(")","</span>)"));
			$(".search-list-container .search-list").detach();
			$.ajax({
				url : $(this).attr("href"),
				success : function (data){
					$(".search-list-container").append(data);
					searchRating();
				}
			});
			
		}
		return false;
	});
	
	if ($(".search-navigation").length > 0){
		var show = getParameterByName("show");
		if (show === "faq"){
			$("a.search-faq-link").trigger("click");
		}
	}
	
	$(".SearcContainer").click(function(){
		if ($(document).width() < 980){
			$(".SearcContainer form").toggleClass("mobile-show",1000,"slideDown");
		}
	});
	
	$(".SearcContainer input[type='text']").click(function(event){
		if ($(document).width() < 980){
			event.stopPropagation();
		}
	});
	
	$(".SearcContainer form").submit(function (){
		var value = $(".SearcContainer form input[type='text']").val();
		if (value === null || typeof value === "undefined" || value.trim() === ""){
			return false;
		}
	});
	
	if ($(".search-list .search-results li").length > 0){
		searchRating();		
	}
	
	if ($("#Search").length > 0){
		$("#Search").autocomplete({
			serviceUrl : $(".SearcContainer").attr("ajax") + "segment=" + $("input[name='segment']").val(),
			paramName : "token",
			width: "256px",
			minChars : 3,
			onSelect : function (item){
				$(".SearcContainer form").trigger("submit");
			}
		});
	}
	/** Search Page : End **/
	
	/** Product Landing Page : Start **/
	if ($(".product-overview-content .product-overview-links input.item-identifier").length > 0){
		productRating();
	}
	/** Product Landing Page : End **/
	
	/** FAQ Detail : Start **/
	if ($("body").hasClass("bank-answers-page")){
		var hash = window.location.hash;
		if (hash != ""){
			var $anchor = $("a[name='" + hash.substring(1) + "']");
			if ($anchor != null && $anchor.parent().hasClass("close")){
				$anchor.siblings("h2").trigger("click");
				$("html,body").animate({scrollTop: $anchor.offset().top},"slow");
			}
		}
	}
	/** FAQ Detail : End **/
	
});

function facebookLogin(placeholder){
	$(placeholder).find(".user").facebook_login({
		appId : placeholder.find("input[name='fbappid']").val(),
		permissions : placeholder.find("input[name='fbperms']").val(),
		display : "popup",
		initwait : 5,
		onInit : function(status) {
			if (status){
				placeholder.find(".user").trigger("click");
			}
		},
		onLogin : function(response) {
			var token = response.accessToken;
			var meurl = placeholder.find("input[name='fbmeurl']").val();
			var flurl = placeholder.find("input[name='fbflurl']").val().split("?");
			var usurl = placeholder.find("input[name='fbusurl']").val();
			var query = flurl[1].substr(2);
			FB.api(meurl, {access_token : token}, function(user) {
				FB.api(flurl[0] , {access_token : token, q : query}, function(friends) {
					
					var friendlist = "";
					var index = -1;
					for (index = 0; index < friends.data.length ; index++){
						friendlist = (index === 0)? friends.data[index].uid : friendlist + "," + friends.data[index].uid;
					}
					
					var location = user.location;
					if (typeof location !== "undefined"){
						location = location.name.split(",")[0].trim();
					} else {
						location= "";
					}
					consoleLog(location);

					var work = user.work;												
					var currentEmployer;
					if(typeof work !== "undefined"){
						var currentEmployer = user.work[0].employer.name;
						consoleLog("currentEmployer :"+currentEmployer);
					} else {
						currentEmployer="";
					}
					consoleLog(currentEmployer);
					
					var education = user.education;	
					var latestEduction;
					if(typeof education !="undefined"){
						latestEduction = user.education[0].school.name;
					} else {
						latestEduction ="";
					}
					consoleLog("latestEduction:"+latestEduction);
					
					var hometown = user.hometown;
					if (typeof hometown !== "undefined"){
						hometown = hometown.name.split(",")[0].trim();
					} else {
						hometown= "";
					}
					
                    var bDaydate = user.birthday;
					var bDayCount;
                    if(typeof bDaydate !=="undefined")	{
					var bDayReminderCount = birthDayReminder(bDaydate);					
					if(bDayReminderCount <=5){					 
					 if(bDayReminderCount == 5){
					 bDayCount ="Five";
					 }
					 if(bDayReminderCount == 4){
					 bDayCount ="Four";
					 }
					 if(bDayReminderCount == 3){
					 bDayCount ="Three";
					 }
					 if(bDayReminderCount == 2){
					 bDayCount ="Two";
					 }
					 if(bDayReminderCount == 1){
					 bDayCount ="One";
					 }
					 if(bDayReminderCount == 0){
					 bDayCount ="Today";
					 }
					}else{
					bDayCount ="";
					}		
                    }else{
					bDayCount ="";
					}					
					consoleLog(bDayCount);
                  
                    var userAge;					
                    if(typeof bDaydate !=="undefined")	{					
						userAge = getAge(bDaydate);	
					}else{
						userAge ="";
					}
					consoleLog(userAge);		
					
					var param = {"token"        : token, 
								 "id"           : user.id, 
								 "email"        : (typeof user.email !== "undefined")?user.email:"", 
								 "firstname"    : (typeof user.first_name !== "undefined")? user.first_name:"", 
								 "lastname"     : (typeof user.last_name !== "undefined")? user.last_name:"",
								 "username"     : (typeof user.username !== "undefined")? user.username:"",
								 "gender"       : (typeof user.gender !== "undefined")? user.gender:"", 
								 "friendlist"   : friendlist,
								 "location"     : location, 
								 "relationship" : (typeof user.relationship_status !== "undefined")?user.relationship_status:"", 
								 "hometown"     : hometown,
								 "birthday"     : (typeof user.birthday !== "undefined")?user.birthday:"", 
								 "religion"     : (typeof user.religion !== "undefined")?user.religion:"", 
								 "timezone"     : (typeof user.timezone !== "undefined")?user.timezone:"",
								 "bdayReminder" : bDayCount,
                                 "age"	        : userAge,
                                 "employer"	    : currentEmployer,
                                 "education"	: latestEduction							 
					};
					
					consoleLog(param);
					
					$.ajax({
						url : usurl,
						data : param,
						success : function (data) {
							consoleLog(data);
							window.location.reload(true);
						},
						error : function (jqXHR, statusText, errorThrown){
							consoleLog(jqXHR.status + ":" + statusText);
						}
					});
				});
            });
		},
		onError : function(data) {
			consoleLog("Login Error.");
			window.location.reload(true);
		}
	});
}

function facebookPanelData(){
	var dataUrl = $(".reviewContainerAjax").attr("ajax");
	var dataParams = $(".reviewContainerAjax").attr("data");
		
	$.ajax({
		url : dataUrl,
		data : dataParams,
		success : function (data){
		    $(".reviewContainerAjax").html(data);
			$(".panel-review-rating").raty({
				readOnly : true,
				halfShow : false,
				starOff  : $("input[name='readonlystaroff']").val(),
				starOn   : $("input[name='readonlystaron']").val(),
				width    : 160,
				score    : function() {
					return $(".panel-review-rating").attr("data-source");
				}
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(jqXHR.status + ":" + statusText);
		}
	});
}

function consoleLog(message){
	if ($("html").hasClass("no-ie")){
		console.log(message);
	}
}

function getParameterByName(name) {
    var name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function birthDayReminder(fbBDay){
	var fbBdate = fbBDay;
	var bday = new Date(fbBdate);
	var bmonth = bday.getMonth()+1;
	var bdate = bday.getDate();
	var today=new Date();
	var bDayCount1;
	BDay=new Date(today.getFullYear(), bmonth-1, bdate);
	if((today.getMonth()+1)== bmonth && today.getDate()>bdate){ 	
		BDay.setFullYear(BDay.getFullYear()+1);
		var one_day=1000*60*60*24;
		bDayCount1=Math.ceil((BDay.getTime()-today.getTime())/(one_day));	
	}
	if((today.getMonth()+1)== bmonth && today.getDate()<bdate){ 	
		BDay.setFullYear(BDay.getFullYear());
		var one_day=1000*60*60*24;
		bDayCount1=Math.ceil((BDay.getTime()-today.getTime())/(one_day));	
	}
	if((today.getMonth()+1)== bmonth && today.getDate()==bdate){ 	
		BDay.setFullYear(BDay.getFullYear());
		var one_day=1000*60*60*24;
		bDayCount1=Math.ceil((BDay.getTime()-today.getTime())/(one_day));	
	}
	return bDayCount1;
}

function getAge(fbBDate) {
    var dateString = fbBDate;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function rateOffer(){
	var score = $('.offer-rating').raty('score');
	var title = $("#offer_title").html();
	var identifier = $("#offer_identifier").html();
	var reviewtext = $("#offer_text").html();
	var homepagelink = $("#offer_link").html();
	var contentType = $("#contentType").html();
	var url = $("#ratinAjax").html();
	$.ajax({
		url:url,
		data:"title="+title+"&identifier="+identifier+"&reviewtext="+reviewtext+"&score="+score+"&homepagelink="+homepagelink+"&contentType="+contentType,
		success: function(data) {
			console.log(data);
			if(data.firstElementChild.childNodes[1].childNodes[0] != null){
				if(data.firstElementChild.childNodes[1].childNodes[0].data == "review.invalid.command"){
					alert("Login Before Rating");
				}
			}
		}
	});
}

function searchRating(){
	$.ajax({
		dataType: "json",
		url: $("input[name='searchreviewjs']").val(),
		success: function (data){
			$(".search-list:last-child .search-results li .meta-bar input.item-identifier").each(function (index,element){
				var identifier = $(element).val();
				if (identifier !== ""){
					var review = jsonPath(data,"$.reviews[?(@.identifier.indexOf('"+identifier+"') > -1)]");
					if (typeof review === "object"){
						$(this).parent().append("<span class=\"separator\"> | </span>");
						$(this).parent().append("<a class=\"reviews\" href=\"" + review[0].reviewlink + "\">" + review[0].reviews + " Reviews</a>");
						$(this).parent().append("<span class=\"separator\"> | </span>");
						$(this).parent().append("<div data-source=\""+ review[0].avgrating +"\" class=\"search-rating\"></div>");
					}
				}
			});
			
			var staron = $("input[name='readonlystaron']").val();
			var staroff = $("input[name='readonlystaroff']").val();
			
			$(".search-list:last-child .search-results li .meta-bar .search-rating").each(function (index,element){
				$(element).raty({
					readOnly : true,
					starOff : staroff,
					starOn  : staron,
					size    : 32,
					score: function() {
						return $(element).attr("data-source");
					}
				});
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(errorThrown);
		}	
	});
}

function productRating(){
	$.ajax({
		dataType: "json",
		url: $("input[name='productreviewjs']").val(),
		success: function (data){
			$(".product-overview-content .product-overview-card .product-overview-links input.item-identifier").each(function (index,element){
				var identifier = $(element).val();
				if (identifier !== ""){
					var review = jsonPath(data,"$.reviews[?(@.identifier.indexOf('"+identifier+"') > -1)]");
					if (typeof review === "object"){
						$(this).parent().append("<div data-source=\""+ review[0].avgrating +"\" class=\"product-rating\"></div>");
						$(this).parent().append(" | ");
						$(this).parent().append("<a href=\""+ review[0].reviewlink +"\">" + review[0].reviews + " Reviews</a> <i class=\"icon-angle-right\"></i>");
					}
				}
			});
			
			var staron = $("input[name='readonlystaron']").val();
			var staroff = $("input[name='readonlystaroff']").val();
			
			$(".product-overview-content .product-overview-card .product-overview-links .product-rating").each(function (index,element){
				$(element).raty({
					readOnly : true,
					starOff : staroff,
					starOn  : staron,
					size    : 16,
					score: function() {
						return $(element).attr("data-source");
					}
				});
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(errorThrown);
		}	
	});
}
/** for poll popup window end **/

function normaliseString(instring) {
	var outstring = instring.replace(/\&/g, "and");
	outstring = outstring.replace(/(\.xml)$/g, "");
	outstring = outstring.replace(/[^a-zA-Z0-9\s]/g, "");
	outstring = outstring.replace(/\s+/g, "-");
	return outstring.toLowerCase();
 }