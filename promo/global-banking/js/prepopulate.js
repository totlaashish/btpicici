function on_load_check() {
	//Refsite
	var _Refsite = getUrlVars()["refsite"];
	if(_Refsite != "" && typeof(_Refsite) != "undefined") {
		_Refsite = Url.decode(_Refsite);
		$("#refsite").val(_Refsite);
	}
	//Adunit
	var _Adunit = getUrlVars()["adunit"];
	if(_Adunit != "" && typeof(_Adunit) != "undefined") {
		_Adunit = Url.decode(_Adunit);
		$("#adunit").val(_Adunit);
	}
	//Channel
	var _Channel = getUrlVars()["channel"];
	if(_Channel != "" && typeof(_Channel) != "undefined") {
		_Channel = Url.decode(_Channel);
		$("#channel").val(_Channel);
	}
	
	//Campaign
	var _Campaign = getUrlVars()["campaign"];
	if(_Campaign != "" && typeof(_Campaign) != "undefined") {
		_Campaign = Url.decode(_Campaign);
		$("#campaign").val(_Campaign);
	}
	
	//utm_source
	var _utm_source = getUrlVars()["utm_source"];
	if(_utm_source != "" && typeof(_utm_source) != "undefined") {
		_utm_source = Url.decode(_utm_source);
		$("#utm_source").val(_utm_source);
	}
	//utm_campaign
	var _utm_campaign = getUrlVars()["utm_campaign"];
	if(_utm_campaign != "" && typeof(_utm_campaign) != "undefined") {
		_utm_campaign = Url.decode(_utm_campaign);
		$("#utm_campaign").val(_utm_campaign);
	}
	
	//utm_content
	var _utm_content = getUrlVars()["utm_content"];
	if(_utm_content != "" && typeof(_utm_content) != "undefined") {
		_utm_content = Url.decode(_utm_content);
		$("#utm_content").val(_utm_content);
	}
	//utm_medium
	var _utm_medium = getUrlVars()["utm_medium"];
	if(_utm_medium != "" && typeof(_utm_medium) != "undefined") {
		_utm_medium = Url.decode(_utm_medium);
		$("#utm_medium").val(_utm_medium);
	}
	//utm_channel
	var _utm_channel = getUrlVars()["utm_channel"];
	if(_utm_channel != "" && typeof(_utm_channel) != "undefined") {
		_utm_channel = Url.decode(_utm_channel);
		$("#utm_channel").val(_utm_channel);
	}
	
	
	
	//Email
	var _Email = getUrlVars()["email"];
	if(_Email != "" && typeof(_Email) != "undefined") {
		_Email = Url.decode(_Email);
		$("#email").val(_Email);
	}
	// Manager Email Id
	var _ManagerEmail = getUrlVars()["managerEmail"];
	//alert(_ManagerEmail);
	if(_ManagerEmail != "" && typeof(_ManagerEmail) != "undefined") {
		_ManagerEmail = Url.decode(_ManagerEmail);
		$("#managerEmail").val(_ManagerEmail);
	}
	
}

var Url = {
 
	// public method for url encoding
	encode : function (string) {
		return escape(this._utf8_encode(string));
	},
 
	// public method for url decoding
	decode : function (string) {
		return this._utf8_decode(unescape(string));
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.parent.location.href.slice(window.parent.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}