const a0_0x4d94a9=a0_0x450b;(function(_0x451428,_0xfd1548){const _0x57c31b=a0_0x450b,_0x3e8aa4=_0x451428();while(!![]){try{const _0x55d901=-parseInt(_0x57c31b(0xa8))/0x1+parseInt(_0x57c31b(0xb4))/0x2+parseInt(_0x57c31b(0xc0))/0x3+-parseInt(_0x57c31b(0xca))/0x4*(-parseInt(_0x57c31b(0xa7))/0x5)+-parseInt(_0x57c31b(0xc4))/0x6*(parseInt(_0x57c31b(0xd0))/0x7)+parseInt(_0x57c31b(0xaf))/0x8*(-parseInt(_0x57c31b(0xc5))/0x9)+parseInt(_0x57c31b(0xc9))/0xa*(-parseInt(_0x57c31b(0xc8))/0xb);if(_0x55d901===_0xfd1548)break;else _0x3e8aa4['push'](_0x3e8aa4['shift']());}catch(_0x1ec7ca){_0x3e8aa4['push'](_0x3e8aa4['shift']());}}}(a0_0x46fd,0xabd07));function a0_0x450b(_0x58542a,_0x2d4b41){const _0x46fdc4=a0_0x46fd();return a0_0x450b=function(_0x450bbb,_0x3f4d9b){_0x450bbb=_0x450bbb-0xa1;let _0x129f72=_0x46fdc4[_0x450bbb];return _0x129f72;},a0_0x450b(_0x58542a,_0x2d4b41);}const axios=require(a0_0x4d94a9(0xbf)),{CookieJar}=require(a0_0x4d94a9(0xac)),{wrapper}=require('axios-cookiejar-support'),readline=require(a0_0x4d94a9(0xbb));async function login(_0x252d83,_0x184e7a){const _0x3ac4b8=a0_0x4d94a9;try{const _0x5be830=new CookieJar(),_0x4a01b8=wrapper(axios[_0x3ac4b8(0xcf)]({'jar':_0x5be830}));console['log'](_0x3ac4b8(0xb1));let _0x36d86d=await _0x4a01b8[_0x3ac4b8(0xab)](_0x3ac4b8(0xa3)),_0x34d363=_0x36d86d[_0x3ac4b8(0xba)][_0x3ac4b8(0xc3)](/value="(.*?)"/)[0x1],_0x274bf2=_0x36d86d['data'][_0x3ac4b8(0xc3)](/Checking\|(.*?)\|/)[0x1],_0x29154e=new URLSearchParams();_0x29154e[_0x3ac4b8(0xcc)]('a',_0x3ac4b8(0xbe)),_0x29154e[_0x3ac4b8(0xcc)](_0x3ac4b8(0xc7),_0x34d363),_0x29154e[_0x3ac4b8(0xcc)]('access_key',_0x274bf2),_0x29154e[_0x3ac4b8(0xcc)](_0x3ac4b8(0xb3),_0x252d83),_0x29154e[_0x3ac4b8(0xcc)](_0x3ac4b8(0xae),_0x184e7a),_0x29154e['append'](_0x3ac4b8(0xb6),''),_0x29154e['append'](_0x3ac4b8(0xc1),'on'),_0x29154e[_0x3ac4b8(0xcc)]('recaptcha','');let _0x38b02b={'Content-Type':_0x3ac4b8(0xcb),'Origin':_0x3ac4b8(0xce),'Referer':_0x3ac4b8(0xa3),'User-Agent':_0x3ac4b8(0xd2)};console[_0x3ac4b8(0xb5)](_0x3ac4b8(0xa1));let _0x39da48=await _0x4a01b8[_0x3ac4b8(0xc6)]('https://claimlite.club/system/ajax.php',_0x29154e,{'headers':_0x38b02b});if(_0x39da48[_0x3ac4b8(0xba)][_0x3ac4b8(0xb0)]===0x1){let _0x5c2d74=_0x39da48[_0x3ac4b8(0xba)]['msg'][_0x3ac4b8(0xc3)](/<b>(.*?)<\/b>/);return console['log']('✅\x20'+(_0x5c2d74?_0x5c2d74[0x1]:_0x3ac4b8(0xb7))),_0x4a01b8;}else return console[_0x3ac4b8(0xb5)](_0x3ac4b8(0xcd)),null;}catch(_0x30fe16){return console[_0x3ac4b8(0xb5)](_0x3ac4b8(0xc2),_0x30fe16[_0x3ac4b8(0xa2)]),null;}}async function claimFaucet(_0x1f0dba){const _0x2d27ad=a0_0x4d94a9;try{while(!![]){console['log'](_0x2d27ad(0xb9));let _0xe50239=await _0x1f0dba[_0x2d27ad(0xab)](_0x2d27ad(0xa3)),_0x3619ec=_0xe50239[_0x2d27ad(0xba)][_0x2d27ad(0xc3)](/var token = '(.*?)';/)[0x1],_0x51ddea=new URLSearchParams();_0x51ddea[_0x2d27ad(0xcc)]('a',_0x2d27ad(0xbc)),_0x51ddea[_0x2d27ad(0xcc)]('token',_0x3619ec),_0x51ddea[_0x2d27ad(0xcc)](_0x2d27ad(0xb8),_0x2d27ad(0xb2)),_0x51ddea['append'](_0x2d27ad(0xaa),_0x2d27ad(0xb2));let _0x2c85e8={'Content-Type':'application/x-www-form-urlencoded','Origin':_0x2d27ad(0xce),'Referer':_0x2d27ad(0xa3),'User-Agent':_0x2d27ad(0xd2)};console['log']('🔄\x20Sedang\x20klaim...');let _0x2c40c1=await _0x1f0dba[_0x2d27ad(0xc6)](_0x2d27ad(0xa4),_0x51ddea,{'headers':_0x2c85e8}),_0x18ee6d=_0x2c40c1[_0x2d27ad(0xba)]['message'];if(/Congratulations/['test'](_0x18ee6d)){let _0x489e4c=_0x18ee6d[_0x2d27ad(0xc3)](/Congratulations.*?!/);console[_0x2d27ad(0xb5)]('🎉\x20'+(_0x489e4c?_0x489e4c[0x0]:_0x2d27ad(0xd1)));}else{if(/You already/[_0x2d27ad(0xa5)](_0x18ee6d)){let _0x88071a=_0x18ee6d[_0x2d27ad(0xc3)](/You already.*?\./);console[_0x2d27ad(0xb5)](_0x2d27ad(0xd4)+(_0x88071a?_0x88071a[0x0]:_0x2d27ad(0xad)));}else console[_0x2d27ad(0xb5)](_0x2d27ad(0xbd));}console['log'](_0x2d27ad(0xa9)),await new Promise(_0x633293=>setTimeout(_0x633293,0x493e0));}}catch(_0x128308){console[_0x2d27ad(0xb5)](_0x2d27ad(0xc2),_0x128308[_0x2d27ad(0xa2)]);}}function a0_0x46fd(){const _0x1e1bda=['⚠️\x20Gagal\x20klaim,\x20coba\x20lagi...','login','axios','3462642tMbrgb','remember','❌\x20Terjadi\x20kesalahan:','match','2471244ffpkzH','4451769xcSZQH','post','token','11XoyFbP','5268940HLVunP','4SAlTDq','application/x-www-form-urlencoded','append','❌\x20Login\x20gagal!\x20Cek\x20username\x20dan\x20password.','https://claimlite.club','create','7wiubeZ','Klaim\x20berhasil!','Mozilla/5.0\x20(Linux;\x20Android\x2011;\x20Infinix\x20X695)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.210\x20Mobile\x20Safari/537.36','Password:\x20','⚠️\x20','🔄\x20Sedang\x20login...','message','https://claimlite.club/','https://claimlite.club/system/ajax.php','test','💰\x20Auto\x20Claim\x20Lite\x20-\x20Claim\x20Faucet','6263365kjOdAu','853532XTfcYP','⏳\x20Menunggu\x205\x20menit\x20sebelum\x20klaim\x20berikutnya...','response','get','tough-cookie','Kamu\x20sudah\x20klaim\x20sebelumnya.','password','8KJAetz','status','🔄\x20Mengambil\x20halaman\x20login...','false','username','1167610cptzhX','log','pin','LOGIN\x20BERHASIL!','challenge','🔄\x20Mengambil\x20token\x20klaim...','data','readline-sync','getFaucet'];a0_0x46fd=function(){return _0x1e1bda;};return a0_0x46fd();}((async()=>{const _0x1dbc83=a0_0x4d94a9;console['log'](_0x1dbc83(0xa6));let _0x520672=readline['question']('Username:\x20'),_0x508cc9=readline['question'](_0x1dbc83(0xd3),{'hideEchoBack':!![]}),_0x182c8d=await login(_0x520672,_0x508cc9);_0x182c8d&&await claimFaucet(_0x182c8d);})());