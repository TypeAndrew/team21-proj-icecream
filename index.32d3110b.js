function scrollToTop(){var o=this,l=$(".scroll-to-top");$(window).on("scroll",(function(){$(o).scrollTop()>=50?l.fadeIn():l.fadeOut()})),l.on("click",(function(o){o.preventDefault(),$("html").animate({scrollTop:0},100)}))}scrollToTop();
//# sourceMappingURL=index.32d3110b.js.map
