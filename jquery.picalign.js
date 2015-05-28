//#############################################
//### 			JQuery.picalign - v0.1b					###
//### 						2015-05-28								###
//### 	Copyright (c) - 2015 Paul Revival		###
//#############################################

(function() {
	var required = this.jQuery;
	if (!required) {
		throw new Error('Jquery required for jquery.picalign.js');
	}
})();

$(document).ready(function() {
	picalign.pwrap();
});
$(window).on("load resize", function() {
	picalign.palign();
})

var picalign = {
	meta : {
		version : "0.01b",
		name : "JQuery-picalign"
	},
	pwrap : function() {
		var pics = $('.pa-piccent');
		if (pics) {
			pics.each(function() {
				var cpic = $(this);
				var defcss = {
					"position":"relative",
					"overflow":"hidden"
				};
				if (!cpic.parents('.pa-picbox').length) {
					cpic.wrap('<div class="pa-picbox"></div>');
					defcss = {
						"position":"relative",
						"overflow":"hidden",
						"height":"100%",
						"width":"100%"
					};
				}
				var cpbox = cpic.parents('.pa-picbox');
				cpbox.css(defcss);
			});
		}
	},
	palign : function(pics) {
		var pics = (pics) ? pics : $('.pa-piccent');	
	
		function align(target) {
			var pic = target.pic;
			var pbox = target.pbox;
			var psize = target.psize ? target.psize : "none";
			var picprops = {picH:0,picW:0};
			var pboxprops = {pboxH:0,pboxW:0};

			var picposprop = {"top":0,"left":0};
			var picsizeprop = {
				"display":"block",
				"position":"absolute",
				"height":"auto",
				"width":"auto",
				"top":0,
				"left":0
			};
			pic.css(picsizeprop);
			picprops.picH = pic.height();
			picprops.picW = pic.width();
			pboxprops.pboxH = pbox.height();
			pboxprops.pboxW = pbox.width();

			function setcss() {
				var boxaspect, picaspect;

				if (psize === 'fill' || psize === 'none') {
					boxaspect = (pboxprops.pboxW/pboxprops.pboxH).toFixed(5);
					picaspect = (picprops.picW/picprops.picH).toFixed(5);
					if (picaspect >= boxaspect) {
						picsizeprop.height = "100%";
						pic.css(picsizeprop);
						var newprops = setprops();
						picposprop.left = (-(newprops.picW/2-pboxprops.pboxW/2));
					} else {
						picsizeprop.width = "100%";
						pic.css(picsizeprop);
						var newprops = setprops();
						picposprop.top = (-(newprops.picH/2-pboxprops.pboxH/2));
					}
				} else if (psize === 'center') {
					var newprops = setprops();
					picposprop.left = (-(newprops.picW/2-pboxprops.pboxW/2));
					picposprop.top = (-(newprops.picH/2-pboxprops.pboxH/2));
				}
				pic.css(picposprop);
			}

			function setprops() {
				var newpicprops = {
					picH: pic.height(),
					picW: pic.width()
				};
				newpicprops.picH = pic.height();
				newpicprops.picW = pic.width();
				return newpicprops;
			}

			setcss();
		}

		if (pics) {
			pics.each(function() {
				var cPic = $(this);
				var cPicSize = cPic.attr('data-pa-size');
				var cBox = cPic.parents('.pa-picbox');
				var target = {pic: cPic,pbox: cBox,psize: cPicSize};
				align(target);
			});
		}
	}
};