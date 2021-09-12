Game.registerMod("slime cookie mod",{
	init:function(){
		Game.Notify(`スライムクッキーMOD`,`僕悪いスライムじゃないよﾋﾟｷｰ!`,[6,2]);
	
		// Bigクッキーをスライムクッキーの画像に差し替える
		Game.Loader.Replace('perfectCookie.png',this.dir+'/SlimeCookie.png');
	},
	save:function(){
	},
	load:function(str){
	},
});