// Garden Gnome Software - Skin
// Pano2VR 6.1.1/17856
// Filename: myskin.ggsk
// Generated 2019-12-05T10:41:30

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot1=document.createElement('div');
		el.ggId="Hotspot1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 77px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot1.onclick=function (e) {
			player.openNext("{node5}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 112px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot1.appendChild(me._image_1);
		me.__div = me._hotspot1;
	};
	function SkinHotspotClass_hotspot2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot2=document.createElement('div');
		el.ggId="Hotspot2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot2.onclick=function (e) {
			player.openNext("{node6}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot2.appendChild(me._image_23);
		me.__div = me._hotspot2;
	};
	function SkinHotspotClass_hotspot3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot3=document.createElement('div');
		el.ggId="Hotspot3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 311px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot3.onclick=function (e) {
			player.openNext("{node3}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_32=document.createElement('div');
		els=me._image_32__img=document.createElement('img');
		els.className='ggskin ggskin_image_32';
		hs='data:image/png;base64,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'+
			'zGhAjWrqbn1jWDJVhl1WH/sH46QdKIyGNCBGtX1C7pUmW36AeL2JeFQySdFnlMiGBhcMjjspC7hTkgWBgMYp9hSdInJR2Uw7i7NIKFwSCPYJWUPSmAiAgWBoM8giURrOh4+BmDQfccVqeytWcbq+87e3nf2+c3Vl+nP59HRDz8DMAGl4QAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbB'+
			'AmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmDjvzGCBINfBnJYAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -68px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_32.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot3.appendChild(me._image_32);
		me.__div = me._hotspot3;
	};
	function SkinHotspotClass_hotspot4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot4=document.createElement('div');
		el.ggId="Hotspot4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 447px;';
		hs+='position : absolute;';
		hs+='top : 68px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot4.onclick=function (e) {
			player.openNext("{node1}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot4.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot4.appendChild(me._image_22);
		me.__div = me._hotspot4;
	};
	function SkinHotspotClass_hotspot6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot6=document.createElement('div');
		el.ggId="Hotspot6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot6.onclick=function (e) {
			player.openNext("{node2}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot6.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot6.appendChild(me._image_21);
		me.__div = me._hotspot6;
	};
	function SkinHotspotClass_hotspot7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot7=document.createElement('div');
		el.ggId="Hotspot7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot7.onclick=function (e) {
			player.openNext("{node2}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot7.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot7.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : -48px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot7.appendChild(me._image_20);
		me.__div = me._hotspot7;
	};
	function SkinHotspotClass_hotspot8(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot8=document.createElement('div');
		el.ggId="Hotspot8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 310px;';
		hs+='position : absolute;';
		hs+='top : 181px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot8.onclick=function (e) {
			player.openNext("{node2}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot8.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot8.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot8.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot8.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_31=document.createElement('div');
		els=me._image_31__img=document.createElement('img');
		els.className='ggskin ggskin_image_31';
		hs='data:image/png;base64,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'+
			'zGhAjWrqbn1jWDJVhl1WH/sH46QdKIyGNCBGtX1C7pUmW36AeL2JeFQySdFnlMiGBhcMjjspC7hTkgWBgMYp9hSdInJR2Uw7i7NIKFwSCPYJWUPSmAiAgWBoM8giURrOh4+BmDQfccVqeytWcbq+87e3nf2+c3Vl+nP59HRDz8DMAGl4QAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbB'+
			'AmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmDjvzGCBINfBnJYAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : -67px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_31.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot8.appendChild(me._image_31);
		me.__div = me._hotspot8;
	};
	function SkinHotspotClass_hotspot9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot9=document.createElement('div');
		el.ggId="Hotspot9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 428px;';
		hs+='position : absolute;';
		hs+='top : 191px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot9.onclick=function (e) {
			player.openNext("{node4}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot9.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot9.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_30=document.createElement('div');
		els=me._image_30__img=document.createElement('img');
		els.className='ggskin ggskin_image_30';
		hs='data:image/png;base64,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'+
			'zGhAjWrqbn1jWDJVhl1WH/sH46QdKIyGNCBGtX1C7pUmW36AeL2JeFQySdFnlMiGBhcMjjspC7hTkgWBgMYp9hSdInJR2Uw7i7NIKFwSCPYJWUPSmAiAgWBoM8giURrOh4+BmDQfccVqeytWcbq+87e3nf2+c3Vl+nP59HRDz8DMAGl4QAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbB'+
			'AmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmDjvzGCBINfBnJYAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -68px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_30.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot9.appendChild(me._image_30);
		me.__div = me._hotspot9;
	};
	function SkinHotspotClass_hotspot10(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot10=document.createElement('div');
		el.ggId="Hotspot10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 77px;';
		hs+='position : absolute;';
		hs+='top : 302px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot10.onclick=function (e) {
			player.openNext("{node1}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot10.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot10.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot10.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAUdElEQVR4nO3df3xddX3H8fe5IblNStL8bBPoD2iVlrRp2tAf+GsDhQnDgb8mMkE2naKCZeJPlLnHNiYqCrOCis7NCoq4+ZiKHToQ3FRmS5s2TZPSQgtJaRPSJE2TNsltes/ZH9+kTUPSJDfnnvSTvp7/UNLbc07S5NVzzv1+z9cLgkAAYEFssg8AAMaKYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2'+
			'ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMOOsyT4ATDlvlHSBpF2SnpzkY8EUQ7AQhrikP5b0UUlXyH1fHZP0S0lfl/Q/khKT'+
			'dnSYMrwgCCb7GGBXpqS3SfqgpDed4nW/lvRtSf8pqS+C48IURbCQihJJb5X0IUlV4/hz1ZK+Jemnkg6k4bgwxREsjEeppL+UdKOkRRPYzrOS1kn6nqTmCR8VzhgEC2OxUNL1kt4vqSzE7TZJ+q6khyTtDHG7mKIIFk6lStJNkt4hqSiN+2mT9BNJD8hdNgLDIlgYzqWSPiAXqqwI93tULlzfkfRUhPuFEQQLA3IkvVnSh+WCNe4hL4lE4lAikTjkeV4sCAI/Ho/PiMfjM1I4lmNywfqmpF9J6k5hG5iCCBZyJL1L7ozqtalsIJFIdLz44oub6uvr6hO9iT557uPxeDyzvHxx+XnnnbciHo/np3h8T8udcf1YhOuMR7DOXGWSrpULVXkqG0gmkz379+/btm1bbXVXV2e3J0/Hv588yZOnQIHycvNyKpZWVJ1zzrlLMz'+
			'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'+
			'l/RZSVdoEgYc/u63vz1025pbG2q2bu0NedOtcjeYH08Eflq+WeJezJMbtHmrpOIwt125bNm0e9Z+bd7r3/CGSBaDHSKQ9EtJX5D0u0nY/5RDsEKS6jiscTpf7smefyI30DSdEpJ+KGmd3D2aKGTLfX5/IffU1HRKyk3FWacQntowGs6wwkGwQpLmYJXL/SD/kaK5zPyN3EPv9kWwr+GcK/cwwksi2Jcv6X/lwpXyUxtGQ7DCQbBCkqZgVck98yrdD7cb8ILc89CrI9rfaKrknkt/fkT72yj3rKzQP3+CFQ6CFZIQg+VJep3cIhJRPF5FcuOJHpBbfSbsm/UTlSH3NIWbFN34tVq5RSx+r5CWDiNY4SBYIQkhWDFJb5K79ItqTmFSLlLfkTSmEduTKF9uKtPblP77dwOek7tU/LXcpWPKCFY4CFZIJhCsTElXSnqvpD'+
			'mhHdDoquXmxe2OcJ9hWCA3/7Iqwn3ulfR9ubUVxzVQdgDBCgfBCkkKwZom9wTR6yXNDP2ARtYs6V65G+uWXSI31Sn0idWn0CI3MPRncs+GHzOCFQ6CFZJxBCtX0jslXSupIG0H9Eo9cpc3P1QEC4xGJC43BOJGRTvt6aCkRyT9h9wTKUZFsMJBsEIyhmAVyC0e8U5J09N+QCcEkh6XdJ+klyPcb5RmSbpFbvBplIN2j8hF62G5iI2IYIWDYIXkFMEqlbvsu1rpHww51E655axqI97vZKmQm+Yz1pWow5KQ9HO5y8XmYV9AsEJBsEIyTLDmyd1Iv0JpXpJrGO1yjz1Zrwm+u2VQTG5C9UeU3lWwh3NMbirO9yU1DP4NghUOghWSQcFaKHdP5VJFv8hHn6Qfyw1+HNO9lSksV27Q7bsU8dMy5P6ReErunuFOiWCFhWCF'+
			'JO7FKuUGe75Gk7Payv/JvfvXMNoLzzDz5N5NfM0k7DuQ+3v5XiLwayZh/1MOwQJgBusSAjCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMI'+
			'NgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATCDYAEwg2ABMINgATDj/wHxefm6o48oUAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 127px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot10.appendChild(me._image_2);
		me.__div = me._hotspot10;
	};
	function SkinHotspotClass_hotspot11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot11=document.createElement('div');
		el.ggId="Hotspot11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 206px;';
		hs+='position : absolute;';
		hs+='top : 307px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._hotspot11.onclick=function (e) {
			player.openNext("{node2}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot11.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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'+
			'zGhAjWrqbn1jWDJVhl1WH/sH46QdKIyGNCBGtX1C7pUmW36AeL2JeFQySdFnlMiGBhcMjjspC7hTkgWBgMYp9hSdInJR2Uw7i7NIKFwSCPYJWUPSmAiAgWBoM8giURrOh4+BmDQfccVqeytWcbq+87e3nf2+c3Vl+nP59HRDz8DMAGl4QAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbB'+
			'AmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmCDYAGwQbAA2CBYAGwQLAA2CBYAGwQLgA2CBcAGwQJgg2ABsEGwANggWABsECwANggWABsEC4ANggXABsECYINgAbBBsADYIFgAbBAsADYIFgAbBAuADYIFwAbBAmDjvzGCBINfBnJYAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 137px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -68px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot11.appendChild(me._image_3);
		me.__div = me._hotspot11;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot1') {
			hotspot.skinid = 'Hotspot1';
			hsinst = new SkinHotspotClass_hotspot1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot2') {
			hotspot.skinid = 'Hotspot2';
			hsinst = new SkinHotspotClass_hotspot2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot3') {
			hotspot.skinid = 'Hotspot3';
			hsinst = new SkinHotspotClass_hotspot3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot4') {
			hotspot.skinid = 'Hotspot4';
			hsinst = new SkinHotspotClass_hotspot4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot6') {
			hotspot.skinid = 'Hotspot6';
			hsinst = new SkinHotspotClass_hotspot6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot7') {
			hotspot.skinid = 'Hotspot7';
			hsinst = new SkinHotspotClass_hotspot7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot8') {
			hotspot.skinid = 'Hotspot8';
			hsinst = new SkinHotspotClass_hotspot8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot9') {
			hotspot.skinid = 'Hotspot9';
			hsinst = new SkinHotspotClass_hotspot9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot10') {
			hotspot.skinid = 'Hotspot10';
			hsinst = new SkinHotspotClass_hotspot10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'Hotspot11';
			hsinst = new SkinHotspotClass_hotspot11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot1'].length; i++) {
				hotspotTemplates['Hotspot1'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot2']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot2'].length; i++) {
				hotspotTemplates['Hotspot2'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot3']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot3'].length; i++) {
				hotspotTemplates['Hotspot3'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot4']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot4'].length; i++) {
				hotspotTemplates['Hotspot4'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot6']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot6'].length; i++) {
				hotspotTemplates['Hotspot6'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot7']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot7'].length; i++) {
				hotspotTemplates['Hotspot7'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot8']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot8'].length; i++) {
				hotspotTemplates['Hotspot8'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot9']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot9'].length; i++) {
				hotspotTemplates['Hotspot9'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot10']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot10'].length; i++) {
				hotspotTemplates['Hotspot10'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot11']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot11'].length; i++) {
				hotspotTemplates['Hotspot11'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};