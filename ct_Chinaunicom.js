/*
中国联通 
功能：签到，签到任务，奖励：有话费红包吧
变量 ltphone 值：手机号
变量 ltpwd 值：密码
多账号用 @ 分隔

ql raw https://gitee.com/xiecoll/radish-script/raw/master/Chinaunicom.js

cron 5 9,11,18 * * *
*/

const $ = new Env('中国联通');//Chinaunicom
let status;
status = (status = ($.getval("ddgystatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let phoneArr = [], pwdArr = []
let ltphone = $.isNode() ? (process.env.ltphone ? process.env.ltphone : "") : ($.getdata('ltphone') ? $.getdata('ltphone') : "")
let ltpwd = $.isNode() ? (process.env.ltpwd ? process.env.ltpwd : "") : ($.getdata('ltpwd') ? $.getdata('ltpwd') : "")
let phones = '', pwds = ''
let xbiz, prod_key, ecs_token = ''
const os = require('os');
var timestamp = Math.round(new Date().getTime() / 1000).toString();

function _0x811a(_0x2657f2,_0x28ea54){const _0x3b9ab4=_0x3b9a();return _0x811a=function(_0x353fb4,_0x1b8397){_0x353fb4=_0x353fb4-0x1db;let _0x3e94fc=_0x3b9ab4[_0x353fb4];if(_0x811a['lLhFlv']===undefined){var _0x4e61f9=function(_0x2dee80){const _0xc45a23='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2fea6d='',_0x472d6b='';for(let _0x12e3f9=0x0,_0x14d03b,_0x34d739,_0x841ef7=0x0;_0x34d739=_0x2dee80['charAt'](_0x841ef7++);~_0x34d739&&(_0x14d03b=_0x12e3f9%0x4?_0x14d03b*0x40+_0x34d739:_0x34d739,_0x12e3f9++%0x4)?_0x2fea6d+=String['fromCharCode'](0xff&_0x14d03b>>(-0x2*_0x12e3f9&0x6)):0x0){_0x34d739=_0xc45a23['indexOf'](_0x34d739);}for(let _0x553290=0x0,_0x33e88e=_0x2fea6d['length'];_0x553290<_0x33e88e;_0x553290++){_0x472d6b+='%'+('00'+_0x2fea6d['charCodeAt'](_0x553290)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x472d6b);};const _0x811a6=function(_0x27a4f9,_0x43078a){let _0x449325=[],_0x2acade=0x0,_0x3467b1,_0x1b1c44='';_0x27a4f9=_0x4e61f9(_0x27a4f9);let _0x3c5d34;for(_0x3c5d34=0x0;_0x3c5d34<0x100;_0x3c5d34++){_0x449325[_0x3c5d34]=_0x3c5d34;}for(_0x3c5d34=0x0;_0x3c5d34<0x100;_0x3c5d34++){_0x2acade=(_0x2acade+_0x449325[_0x3c5d34]+_0x43078a['charCodeAt'](_0x3c5d34%_0x43078a['length']))%0x100,_0x3467b1=_0x449325[_0x3c5d34],_0x449325[_0x3c5d34]=_0x449325[_0x2acade],_0x449325[_0x2acade]=_0x3467b1;}_0x3c5d34=0x0,_0x2acade=0x0;for(let _0x361900=0x0;_0x361900<_0x27a4f9['length'];_0x361900++){_0x3c5d34=(_0x3c5d34+0x1)%0x100,_0x2acade=(_0x2acade+_0x449325[_0x3c5d34])%0x100,_0x3467b1=_0x449325[_0x3c5d34],_0x449325[_0x3c5d34]=_0x449325[_0x2acade],_0x449325[_0x2acade]=_0x3467b1,_0x1b1c44+=String['fromCharCode'](_0x27a4f9['charCodeAt'](_0x361900)^_0x449325[(_0x449325[_0x3c5d34]+_0x449325[_0x2acade])%0x100]);}return _0x1b1c44;};_0x811a['Zzjdla']=_0x811a6,_0x2657f2=arguments,_0x811a['lLhFlv']=!![];}const _0x331fd5=_0x3b9ab4[0x0],_0x222333=_0x353fb4+_0x331fd5,_0x1e942f=_0x2657f2[_0x222333];return!_0x1e942f?(_0x811a['RTNeZk']===undefined&&(_0x811a['RTNeZk']=!![]),_0x3e94fc=_0x811a['Zzjdla'](_0x3e94fc,_0x1b8397),_0x2657f2[_0x222333]=_0x3e94fc):_0x3e94fc=_0x1e942f,_0x3e94fc;},_0x811a(_0x2657f2,_0x28ea54);}const _0x268153=_0x811a,_0x4645e1=_0x353f;(function(_0x51eaac,_0x50b37f){const _0x2af5b6=_0x353f,_0x25daeb=_0x811a,_0x15a4f3=_0x51eaac();while(!![]){try{const _0x2ea18a=-parseInt(_0x25daeb(0x240,'Z0A^'))/0x1*(-parseInt(_0x25daeb(0x21d,'bdI['))/0x2)+parseInt(_0x2af5b6(0x262))/0x3*(parseInt(_0x2af5b6(0x278))/0x4)+parseInt(_0x2af5b6(0x21c))/0x5+parseInt(_0x25daeb(0x28a,'!8zD'))/0x6+parseInt(_0x25daeb(0x207,'!X4s'))/0x7*(-parseInt(_0x25daeb(0x225,'Z2Xv'))/0x8)+parseInt(_0x25daeb(0x200,'4dTI'))/0x9*(parseInt(_0x25daeb(0x1ea,'Tc(m'))/0xa)+-parseInt(_0x2af5b6(0x244))/0xb;if(_0x2ea18a===_0x50b37f)break;else _0x15a4f3['push'](_0x15a4f3['shift']());}catch(_0x1f4543){_0x15a4f3['push'](_0x15a4f3['shift']());}}}(_0x3b9a,0x82d6e),!(async()=>{const _0x1032bd=_0x353f,_0x1d846b=_0x811a;if(typeof $request!==_0x1d846b(0x220,'cC2F'))await ddgyck();else{if($['isNode']()){process[_0x1032bd(0x206)][_0x1d846b(0x203,'SpAE')]&&process[_0x1d846b(0x1f4,'Z0A^')][_0x1032bd(0x204)][_0x1032bd(0x28b)]('@')>-0x1?(phoneArr=process[_0x1d846b(0x251,'lUky')][_0x1032bd(0x204)][_0x1032bd(0x1f1)]('@'),console[_0x1032bd(0x24c)]('您选择的是用\x22@\x22隔开\x0a')):phones=[process['env'][_0x1d846b(0x1e1,'MwMO')]];;Object[_0x1d846b(0x1f2,'MwMO')](phones)[_0x1d846b(0x27a,'ZF!t')](_0x34d739=>{const _0x25dff6=_0x1d846b;phones[_0x34d739]&&phoneArr[_0x25dff6(0x26e,'Nj)^')](phones[_0x34d739]);});process[_0x1d846b(0x263,'4VvV')][_0x1d846b(0x284,'5F9J')]&&process[_0x1d846b(0x25c,'U7c$')][_0x1d846b(0x24b,'!X4s')][_0x1d846b(0x208,'SpAE')]('@')>-0x1?pwdArr=process[_0x1d846b(0x239,'%Gxs')]['ltpwd'][_0x1032bd(0x1f1)]('@'):pwds=[process[_0x1032bd(0x206)][_0x1032bd(0x268)]];;Object['keys'](pwds)[_0x1d846b(0x256,'XinL')](_0x841ef7=>{pwds[_0x841ef7]&&pwdArr['push'](pwds[_0x841ef7]);}),await qswcdl();}}})()['catch'](_0x553290=>$['logErr'](_0x553290))[_0x4645e1(0x288)](()=>$[_0x268153(0x237,'4dTI')]()));function qswcdl(_0x33e88e=0x0){return new Promise(_0x27a4f9=>{const _0x403970=_0x811a;let _0x43078a={'url':_0x403970(0x26d,'U7c$'),'headers':''};$['get'](_0x43078a,async(_0x449325,_0x2acade,_0x3467b1)=>{const _0x274f98=_0x353f,_0x3e8aa4=_0x403970;try{_0x3467b1=JSON[_0x3e8aa4(0x252,'pPeS')](_0x3467b1);if(_0x3467b1['ltcode']==0x1){console[_0x3e8aa4(0x274,'$K*1')](_0x3e8aa4(0x22a,'lUky')+_0x3467b1[_0x274f98(0x24e)]),console[_0x3e8aa4(0x25b,')O%A')]('-------------共'+phoneArr[_0x274f98(0x276)]+_0x3e8aa4(0x1ec,'cC2F'));for(let _0x1b1c44=0x0;_0x1b1c44<phoneArr['length'];_0x1b1c44++){let _0x3c5d34=rand(0xa,0x63)+''+rand(0xa,0x63)+''+rand(0xa,0x63),_0x361900=await pubEncrypt(phoneArr[_0x1b1c44]+_0x3c5d34),_0x27d194=await pubEncrypt(pwdArr[_0x1b1c44]+_0x3c5d34),_0x33c533=new Date(),_0x395960=dateFormat(_0x274f98(0x234),_0x33c533);console[_0x3e8aa4(0x28c,'i(Sh')](_0x395960),await login(_0x361900,_0x27d194,getIPAdress(),_0x395960),await $[_0x274f98(0x23d)](0x3e8),await ltqd(),await $['wait'](0x3e8),await getTask(),await getdoTask();}}else console[_0x3e8aa4(0x216,'vLOQ')]('脚本状态'+_0x3467b1['ltmsg']);}catch(_0xd9342d){$['logErr'](_0xd9342d,_0x2acade);}finally{_0x27a4f9();}},0x0);});}function getTask(){return new Promise(_0x342ff5=>{const _0x8afd4e=_0x811a;let _0x346c4b={'url':_0x8afd4e(0x1dd,'MwMO'),'headers':{'Cookie':'ecs_token='+ecs_token},'body':_0x8afd4e(0x222,'QOtT')};$[_0x8afd4e(0x28d,'9q^B')](_0x346c4b,async(_0x59fe49,_0x5b5af3,_0x1197b1)=>{const _0x361ca5=_0x8afd4e,_0x252c93=_0x353f;try{const _0x29fdce=JSON[_0x252c93(0x22c)](_0x1197b1);if(_0x29fdce['status']==0x0){console[_0x361ca5(0x229,'8UvI')](_0x252c93(0x270));for(let _0x2830b3=0x0;_0x2830b3<_0x29fdce[_0x361ca5(0x226,'cC2F')][_0x252c93(0x276)];_0x2830b3++){_0x29fdce[_0x361ca5(0x20b,'A25R')][_0x2830b3][_0x252c93(0x20c)]!=_0x29fdce['data'][_0x2830b3][_0x252c93(0x218)]&&(console['log'](_0x252c93(0x1e9)+_0x29fdce[_0x252c93(0x249)][_0x2830b3]['title']),await accomplishDotask(_0x29fdce[_0x361ca5(0x201,')O%A')][_0x2830b3]['taskId'],_0x29fdce[_0x252c93(0x249)][_0x2830b3]['title']),await $[_0x361ca5(0x1fb,'lUky')](0x5dc));}}else console[_0x252c93(0x24c)](''+_0x29fdce[_0x252c93(0x209)]);}catch(_0x1dbfe3){}finally{_0x342ff5();}},0x0);});}function getdoTask(){return new Promise(_0x2b754b=>{const _0x14f6b5=_0x353f,_0x508ba1=_0x811a;let _0x4845a9={'url':_0x508ba1(0x217,'A25R'),'headers':{'Cookie':_0x14f6b5(0x290)+ecs_token},'body':_0x14f6b5(0x260)};$['post'](_0x4845a9,async(_0x5b4c0a,_0x4d2551,_0x36778c)=>{const _0x342df1=_0x508ba1,_0x1d54ee=_0x14f6b5;try{const _0x561f43=JSON['parse'](_0x36778c);if(_0x561f43[_0x1d54ee(0x232)]==0x0)for(let _0x420029=0x0;_0x420029<_0x561f43['data'][_0x342df1(0x238,'Tunx')];_0x420029++){_0x561f43[_0x342df1(0x250,'E*)Q')][_0x420029][_0x1d54ee(0x20c)]==_0x561f43[_0x1d54ee(0x249)][_0x420029][_0x1d54ee(0x218)]&&_0x561f43[_0x342df1(0x27c,'VyN6')][_0x420029][_0x342df1(0x287,'A25R')]!=0x3&&(console['log'](_0x1d54ee(0x22e)+_0x561f43['data'][_0x420029]['title']+_0x561f43[_0x1d54ee(0x249)][_0x420029][_0x342df1(0x228,'U7c$')]),await doTaskS(_0x561f43[_0x342df1(0x226,'cC2F')][_0x420029][_0x342df1(0x289,')O%A')]),await $[_0x1d54ee(0x23d)](0x1388));}else console[_0x342df1(0x24a,'9J6Z')](''+_0x561f43['statusMsg']);}catch(_0x431440){}finally{_0x2b754b();}},0x0);});}function doTaskS(_0x11b969){return new Promise(_0x5b2fca=>{const _0x453806=_0x353f,_0x1edf44=_0x811a;let _0x2adcf3={'url':_0x1edf44(0x272,'SpAE'),'headers':{'Cookie':_0x453806(0x290)+ecs_token},'body':_0x453806(0x23c)+_0x11b969+_0x453806(0x22b)};$['post'](_0x2adcf3,async(_0x20dfb8,_0x21ec88,_0x2e0016)=>{const _0x519780=_0x1edf44,_0x5ca80c=_0x453806;try{console[_0x5ca80c(0x24c)](_0x2e0016);const _0x378456=JSON[_0x519780(0x1e0,'CUBA')](_0x2e0016);}catch(_0x2c06e3){}finally{_0x5b2fca();}},0x0);});}function _0x353f(_0x2657f2,_0x28ea54){const _0x3b9ab4=_0x3b9a();return _0x353f=function(_0x353fb4,_0x1b8397){_0x353fb4=_0x353fb4-0x1db;let _0x3e94fc=_0x3b9ab4[_0x353fb4];if(_0x353f['yWeAoQ']===undefined){var _0x4e61f9=function(_0x811a6){const _0x2dee80='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xc45a23='',_0x2fea6d='';for(let _0x472d6b=0x0,_0x12e3f9,_0x14d03b,_0x34d739=0x0;_0x14d03b=_0x811a6['charAt'](_0x34d739++);~_0x14d03b&&(_0x12e3f9=_0x472d6b%0x4?_0x12e3f9*0x40+_0x14d03b:_0x14d03b,_0x472d6b++%0x4)?_0xc45a23+=String['fromCharCode'](0xff&_0x12e3f9>>(-0x2*_0x472d6b&0x6)):0x0){_0x14d03b=_0x2dee80['indexOf'](_0x14d03b);}for(let _0x841ef7=0x0,_0x553290=_0xc45a23['length'];_0x841ef7<_0x553290;_0x841ef7++){_0x2fea6d+='%'+('00'+_0xc45a23['charCodeAt'](_0x841ef7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2fea6d);};_0x353f['JWbIHw']=_0x4e61f9,_0x2657f2=arguments,_0x353f['yWeAoQ']=!![];}const _0x331fd5=_0x3b9ab4[0x0],_0x222333=_0x353fb4+_0x331fd5,_0x1e942f=_0x2657f2[_0x222333];return!_0x1e942f?(_0x3e94fc=_0x353f['JWbIHw'](_0x3e94fc),_0x2657f2[_0x222333]=_0x3e94fc):_0x3e94fc=_0x1e942f,_0x3e94fc;},_0x353f(_0x2657f2,_0x28ea54);}function _0x3b9a(){const _0x503fb1=['jMv0ExbLpxjZyti','ya8Ne8k+kWW','WPHoWPxdJ2NdKWdcOITexNfsmCk+W5O','W5xcSZ8K','WQLoDKldKYG','EMGTy24','BJXzWP/cPSoFumoAESkqCSodWQRcJCk1mmoimKSLW6RcIq','ew0Op3DckJXHWPSxWOhcOSoeW6Dy','W4D3WPi','44cq5AsP5AsP6Akg546W6yEr5OMt5y2H44crcG','562+5yIW77YA','x3ldRhBdOW','FmolW4O','WOFdG8oNW49Af27cR2a','W47cNmoammoYW6TKhW8','zMLUywXSEq','o8o5AmkMWQfb','th/dUSoKBCouW4CFW7FcOdjclq','Aw5KzxHpzG','W5NcSuG','W5JcS8oldG','WQxcOcRcOW9BCh7cM8olWRRcKW/cNW','ou0UzW','zwnZx3rVA2vUpq','WP9FW7dcOmkAgNKvW6i','BSkJW5rDDHGGWRhdTYpcMxmFkSkGWP4AWPJcLCoEW7akjmoezSomBKJcRmoNWQBcQWe3W6KnW7fCEmkcWOBdR1WclCoqWODFqmk8W70/nSk/thPKFtG/WO7cP8kHFSoppZNcUmoFWPSjW7SMWQ7dKqNcJSosW4xdIIVdLmkLW6bk','pmk6WQyVWQz+W695pg7dSmozW5K/WOf9W49Uns7dVKeUkJzfrCkQCa9vlCoVBMldSbHEC1hcKuNdHSkYkc/cKCkgW4dcT8k4W4RdRCk6W4a','44cq5AsP5AsP6Akg546W6yEr5OMt5y2H44crcIdLPzBLIRe6','i8kWW5rFkbaJWRBcVhu','ymofW580WO8','omk6WQi3WROQWQu','WRvIWRm','z2v0rgf0zq','EMGTq04SEMG7Ct0WlJK','n8o7W4VdQSoTWPjorgvsCWbxWQi','zxbHEs4XmdaXmc5JB20','rwWIW4dcMgzOW7fx','nvjHySoOELZdVSkfW4BdSCojWPC','5lU75yQHoG','xSkdWRFcM8kUW5zUufriAYW','vhZdTxhcQYNdRCkcsbFdSYlcIW','5lIW6lEu5y+UxrDsu3dcQr/dUvpcRr4MeCoL','WOZdJmkADCo0W6PEjapcKa','jMfJDgL2Axr5swq9vfrmweOYmdiXmdmZmcz3yxbFC2vZC2LVBKLeptrInta4nty2mdbIotq0zMq5nduXyZzHztmWzgzLowfKjNvUAw9Uu2vZC2LVBKLKpszHy3rPDML0EuLKpvrutfHkmJaYmtaZmZaMDMvYC2LVBJ0ZlJaUmczIAxPgCM9TptiYnq','k+w/RUApGEEmSSkg','WOlcVfhcRtddPmkThflcN8k5WR7dGSoAl8kvW4avvuC5WOyHbCk8WObkomknW6ddO8kuWR4kWQRdVSkZW7i2W57dKCoyn8kxWP0zWQ7cHmo+WPOxyfGKwWb1eWRdTmk0Dmo8i8kFuNxcHaldKmoIuCkrW4KXW5hcS8kwWQZcVYhdJaOZW7TFeJNcMmk0xSkmWP8ZWPzvFmkAWQ5sWP9VbSoeW64jW5jqjqq','C3bSAxq','p8kRWQSS','WQJcTL/cItxdPSk5rWldGG','W4hdJJa','bSoqymkduG/cMM9rW6e','BxnN','hw4/','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvKoYbJAgfYC2v0pvvurI04','Ahr0Chm6lY93D3CUyMvQC29UlMnVBs9czwPZB24VqxbPl1jZys9WDwjfBMnYExb0','C2fTzs1VCMLNAw4','WPPBW63cOq','WP1VuKDQW7LAhmoEW4hcNa4wyvOsW6VcKmoAWPr6WRhdNLFcTCkWW5zkW47cShJcHCoRtHtdN8k9vSkpWOOAW63cKsP2WQjTWPfSdmoWW58qeaZdNIvTWRNcPIJdJaCBWOuNWRddPherWOvfhxldG0WEjSomW7e7k1BdLXmcb8kuW6VcTCkwpxFdSaDmWQ3cIYbgh8oIdmoHWQtdNCkrvmo0nSkNWPacWRrxWRHcWOeYxSk6WR03WQGXAKJdGsPyFCouw8kaWRixyNaIdXNcQmobWPZcMSoxCGvKcbHMctJcOKBcTSkyWPJdO8kRzCkqW5fNvCo4fJhdN0XZh8oGW4DPWPlcNxRdQHxcOaddHCkPgWzQWRCDWPRdNYdcSSkcew8MWOFdJSk0W5xdSCoPrmksdIernrNcSdxcQ1RdRSkKWQVdUmk9kmkTyJ/cVYtdNSo9W4tcRXRcMCo9D1rujSkntWBdPGLYW6BcNSkcWR9iW58OW7hdQXJdGNy3W6XTvNhcO8kEWRFcPX0gotLneb3dVCkhzCkiumoFWOSbW4LbFmkqrwrfbLLEWQK8W7hdN8kdo8oDWQNcJ0FdIKZcJCkUW6RdJLfisZlcVq','cUwKQEwKQEMIHUEoSoMhKEAjK+wnOtOG57sV56EV5Aww5yQXoG','g3rbW6VcQCkyWPddHvtdMmkvW6XgeG','kmoICSk9W4qfg8o+WOiEu8oLbSkUW6VcO1u','fCkqhhflt8o0','k8o5B8kS','gSk3W7PQWQFcVSkvWRldKtm','cYBdS0hdVmodWQa','BhrWAg9Uzq','eCkmW4ZcMConkmoJbHlcQ8kAnq','zw52','ESoKWOGynHuLWPBcMNldRG','dJZdP0ZdQ8oIWQm','C3rHDhvZtxnN','z2v0rNvSBfLLyxi','W5NcLCoBjG','ywnOAwv2zq','jMfJDgL2Axr5swq9vfrmweOYmdiXmdmZmcz3yxbFC2vZC2LVBKLepq','W6JcGw4nW4TXir/cPLK','Bg9NAw5jzd0','DCouW4W+W4qjW4tcMZGpbCkIkYu','zW7cLIDjWOC','W5BdHtD0W7RdLWVdSW','x2NdUW','BM8Ty2fJAgu','dCowz8kRsrlcMKnrWQHIaazMCazl','uCoNxG','W5xcGmoBn8osWQuYxaVcGSkmeNLgWQddHcqCEb3dMNZdVCk1WQFdQwpcGSkZW5ddHmorW6ldVcNdKSkfWRVdJr/dHK/cMIFdPCkUnKK/gmk7W7pdQdJcNq','ywXSB2nHDgLVBG','CMvWBgfJzq','A2vLCc1HBgL2zq','E8obW4G3W4DzWPJdGN9A','mJm2nZiZmhDyDLnzAG','W4xdTSolqKH7iCkIWQBdP8odmW','W5NcSuJdVSo1WODRoG','Cg9ZDa','B8kCFrvCfHa4W6a','W5dcTSksgJOIm8kiWPZcU8kByatcPvjPW6hdUXxcNCoNxmkGl8k7WRVdG8klWPdcS8kKWQObWQpdTf5xWPBcNWHGCXW','WP9sWORdJhldVqdcPcKwqYTij8kJW7hcQJ7cSW','55M76zMg5OIq5yQF','CMv0DxjUq29Kzq','fSkiW4RdK8kWFSozaIi','FSktBre','yMfS','WQxcTwJcQYNdPSk4','BqdcNa','W6FOHkdMNQJNIApMG6NVVA4','jNrHC2TuExbLpte','CgfYC2u','W7NdPmoRlLNcNmo/yW','6Akg5lU75yQH5Aww5yQXoG','W4P1WPRcM8o4W7i','W4/cPSorcMFcVbrsg8owpxpcNSk+v2mQ','W41aW7mUs1pcLmkVW54ugCoJ','C3rHDhvZ','WPLvW5FcOCkAhvOb','wvLzws1TBs1KzcbisdPnttPtuW','WPP7qhrWW79IcSooWPpdN0PF','zhjHD1rVDefTDa','smkojLu','W4G5AGBcPHW','xSowW5S','we1mshr0CfjLCxvLC3q','W4xcT8kChWa3ca','DgfZA0LKpq','D2fPDa','WQTSWRRcSmkgWPu','WQamtKhcS8kz','WPFdKIfOW6RdGca','zxHLyW','WQGCl8kaW6W','nCk+WQiZWRWNWQeIngldQSoyWPaIW4y7WOHTmc7dOqnqnInhsCkQuHbbz8o4','mta4mJq4ndDUEuT0Egq','xmkaoKn/','y29YCW','Ahr0Chm6lY9LCgf5lJeWmdeWlMnVBs9Wyxj0EvnLCNzLCI9SB2DPBI9SB2DPBK5LDY5KBW','W5VdN8kZWO0dxdddTx/dRH7cLgxcSSkuWOSykG','zgf0yq','W6xdQSoO','jmkHW4fyyq','Bg9N','nJe2C0PMAKjK','BhrTC2DP','ywrKCMvZCW','b8osz8k9','WOHuW7i','vh56W6u5','Ahr0Chm6lY9LCgf5lJeWmdeWlMnVBs9Wyxj0EvnLCNzLCI90DgX4AI91BMLMEurYyxCUzg8','W4pdHtjiW7ZdJXZcVq','yxbWBgLJyxrPB24VANnVBG','W5dcNSkIWQqlwJy','z3PPCcWGzgvMBgf0zsWGyNi','jMrLDMLJzu9tpte0lJiMzgv2AwnLqNjHBMq9AxbOB25LjMrLDMLJzu1VzgvSpwLqAg9UzszYzw1HCMS0pszRzxLwzxjZAw9UpszKzxzPy2vdB2rLpuzerJy0odaWlty4n0qTndy3ns05rJm0ltndntq1rKyZrJa4mW','Bg9NrxjY','W57cHCkKWPeza3hcRIBcQfNcIJBdP8oqWPSykCkNWPdcGmoX','i8o3Fa','WQRcVv0','Dg9tDhjPBMC','WRLvC1m','W4RcGv3dV2q','zMXVB3jnyxjRpxn1CgvYrwfZEq','WO5ZlG','mtuZm2fhBwneCq','WOH0rG','ftFdT1ZdOCodWOy1oxy','WOiSzrlcOqnGWOpdKMa','Aw50zxjUywW','bg/cUSkXkCknWRyzWO/dM2i','BhrWD2q','zwnZx3rVA2vU','W7qAz8kxW5v8gaHWc8oEW5hcTc3cPCkgWQ8Djmo1WRFdKH98W7ZdJXVcQ8oSWRbTdftcGgWLW5VcM8odW5hcINVcIqGtWQBdVWZcOrtcTKdcQConwmoKWObKWRZcIM3cIh18yIZdVCkbWP/dICoZWONdOHzpWPJcTSoxWR7dJMxcHmkuwdFcUXvrW7RcPenIWPmKW5SgWOiCW7y+d2RcRtHbbCkWWO9KEWddTmo9WORcMabTCmohWR9QrIVdUdzfCgdcR8oImmkwWQ4swmkTrmkhW4i','W57cHCkKWPeza3hcRJdcVfRcIMxcSSkkW5LhACoQWPZcGSkZrW46W5NcR1ZdL8kLWQK1kCoba8oDWROMfCkRWQmNW5WjWO3cKmkUqJ4jW4StW7BdLCoMECo6W5n5W5ye','oxfuqvflrq','WQFcP1/cTc/cSSoJhaVdHmoMW7ZcHCoIlCovW4CvrL13WQ9Bs8oOW4rlEmkzWQpdM8k/WOWsW7tcPmo8W51PW4RcKSorfCkDWP09WQJcM8o+W4Hni1LLdfDYnspdK8knxCkIlmkqvhRcHaZdVCo0xCku','r3WLW50','WPvrWOi','44cq5P+L6k+I5PYQ5A6m5OIq5lU75yQH5yIx6kgO44crcG','Ahr0Chm6lY9LCgf5lJeWmdeWlMnVBs9Wyxj0EvnLCNzLCI90DgX4AI91C2vYqMfSyw5Jzs5KBW','dYBdT1NdOmkxW6P1phdcGmoCWOvDWRNcPSo9o8o8W5JcH8kSahVdKxtcRLNdRJqeCCkSWQRcSCoocdtdLd7dNmoXq8oMsCoup2pdUrZdVG4','tCkAWQxdKCoGWPvkC21GAqfbW7rKWR7cV8kJb0L0WR7cV8kkbNeEW4NcN8ksmLpcHCoiuCk3WRnmfh/cICkDW6KssJel','eSoPCa','WRVcVhJcSc7dOCkIva','BgvUz3rO','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','mtG1mLv1q1DPCq'];_0x3b9a=function(){return _0x503fb1;};return _0x3b9a();}function accomplishDotask(_0xa7cc4f,_0x359e5c){return new Promise(_0x594142=>{const _0xb67db6=_0x353f,_0x4c6404=_0x811a;let _0x756015={'url':_0x4c6404(0x26b,'XinL'),'headers':{'Host':'act.10010.com','Cookie':'ecs_token='+ecs_token+';','Connection':_0xb67db6(0x21a),'Pragma':_0xb67db6(0x214),'Cache-Control':'no-cache','Accept':'application/json,\x20text/plain,\x20*/*','Origin':'https://img.client.10010.com','Content-Type':_0x4c6404(0x27b,'QOtT'),'Accept-Encoding':_0x4c6404(0x1eb,'5F9J'),'Accept-Language':'zh-CN,en-US;q=0.8'},'body':_0x4c6404(0x267,'!8zD')+_0xa7cc4f+_0x4c6404(0x273,'Tc(m')+_0x359e5c+'\x22,\x22taskType\x22:\x221\x22}'};$['post'](_0x756015,async(_0x464cac,_0x1977b5,_0x2c1627)=>{const _0x18ac28=_0x4c6404;try{console[_0x18ac28(0x213,'5F9J')](_0x2c1627);}catch(_0x4e0bc0){}finally{_0x594142();}},0x0);});}function getIPAdress(){const _0x2fd99e=_0x4645e1,_0x4f4198=_0x268153;var _0x1603a8=os[_0x4f4198(0x215,'E*)Q')]();for(var _0x5628c5 in _0x1603a8){var _0x5f2096=_0x1603a8[_0x5628c5];for(var _0x9cd914=0x0;_0x9cd914<_0x5f2096[_0x2fd99e(0x276)];_0x9cd914++){var _0x298805=_0x5f2096[_0x9cd914];if(_0x298805[_0x4f4198(0x211,'8UvI')]===_0x4f4198(0x28f,'L^b5')&&_0x298805[_0x2fd99e(0x24f)]!==_0x4f4198(0x286,'XinL')&&!_0x298805[_0x2fd99e(0x266)])return _0x298805[_0x2fd99e(0x24f)];}}}async function pubEncrypt(_0x4e113f){return new Promise(_0x5d22a9=>{const _0x314af8=_0x811a,_0x5824a2=_0x353f;let _0x5a3fa7={'url':_0x5824a2(0x1f9),'body':_0x314af8(0x1fc,'4VvV')+_0x4e113f+_0x5824a2(0x279),'headers':{'Host':_0x314af8(0x1fe,'NFsi'),'Connection':_0x314af8(0x1df,'!X4s'),'Pragma':'no-cache','Cache-Control':'no-cache','Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','X-Requested-With':_0x314af8(0x28e,'iDL)'),'User-Agent':_0x314af8(0x1f0,'U7c$'),'Content-Type':_0x5824a2(0x1f8),'Origin':_0x314af8(0x25a,'XinL'),'Sec-Fetch-Site':_0x5824a2(0x1fa),'Sec-Fetch-Mode':_0x5824a2(0x246),'Sec-Fetch-Dest':'empty','Referer':'https://www.bejson.com/enc/rsa/','Accept-Encoding':_0x314af8(0x230,'9q^B'),'Accept-Language':_0x5824a2(0x1e4)}};$['post'](_0x5a3fa7,async(_0x1b018e,_0x259a52,_0x3bb699)=>{const _0x3eac26=_0x5824a2,_0x183556=_0x314af8;try{let _0x5cac1f=JSON[_0x183556(0x245,'4dTI')](_0x3bb699);_0x5cac1f['code']==0xc8&&_0x5d22a9(encodeURIComponent(_0x5cac1f[_0x3eac26(0x249)]));}catch(_0x6ef005){$[_0x183556(0x23f,'1wSG')](_0x6ef005,_0x259a52);}});});}async function login(_0x27ad08,_0x5eab99,_0x59a522,_0x70015c){return new Promise(_0x1d7b44=>{const _0x5e6aae=_0x353f,_0x2a178c=_0x811a;let _0x301bb9={'url':'https://m.client.10010.com/mobileService/login.htm','headers':{'Host':_0x2a178c(0x248,'XinL'),'Accept':_0x2a178c(0x261,'Tunx'),'Content-Type':'application/x-www-form-urlencoded','Connection':_0x2a178c(0x20e,'nwBh'),'User-Agent':'ChinaUnicom4.x/12.0\x20CFNetwork/1206\x20Darwin/20.1.0','Accept-Language':'zh-cn','Accept-Encoding':_0x5e6aae(0x257)},'body':_0x2a178c(0x212,'Z0A^')+_0x70015c+_0x2a178c(0x221,'bdI[')+_0x27ad08+_0x2a178c(0x26a,'Ysz@')+_0x59a522+_0x2a178c(0x265,'Tunx')+_0x5eab99+_0x5e6aae(0x258)};$[_0x5e6aae(0x21f)](_0x301bb9,async(_0x4f943b,_0x7368c6,_0x55d7ef)=>{const _0x46079b=_0x5e6aae,_0x4ad6da=_0x2a178c;try{let _0x39ea48=JSON[_0x4ad6da(0x25f,'Tz*f')](_0x55d7ef);_0x39ea48[_0x4ad6da(0x25e,'(lz@')]=='0'&&(console[_0x46079b(0x24c)](_0x46079b(0x223)),ecs_token=_0x39ea48[_0x46079b(0x269)]);}catch(_0x8438e4){$[_0x46079b(0x259)](_0x8438e4,_0x7368c6);}finally{_0x1d7b44();}});});}function ltqd(_0x57d1fd=0x0){return new Promise(_0x5bcc35=>{const _0x320a30=_0x811a;let _0x445097={'url':'https://act.10010.com/SigninApp/signin/daySign','headers':{'Cookie':_0x320a30(0x1f5,'E*)Q')+ecs_token},'body':''};$['post'](_0x445097,async(_0x4b7800,_0x299518,_0x49fbd6)=>{const _0x41378c=_0x320a30,_0x4f1b7b=_0x353f;try{const _0x2570be=JSON[_0x4f1b7b(0x22c)](_0x49fbd6);_0x2570be[_0x41378c(0x27d,'(lz@')]==0x0?console[_0x41378c(0x1e2,'ryFo')]('签到：'+_0x2570be[_0x41378c(0x1f7,'L^b5')]):console[_0x4f1b7b(0x24c)](_0x4f1b7b(0x283)+_0x2570be[_0x4f1b7b(0x1f6)]);}catch(_0x21aa88){}finally{_0x5bcc35();}},_0x57d1fd);});}function get_wap_sessionid(_0xdffa84){return new Promise(_0x1f01dd=>{const _0x22d2e8=_0x353f;let _0x66f527={'url':_0x22d2e8(0x247),'headers':{'Cookie':_0x22d2e8(0x290)+ecs_token},'body':'bizFrom=225&activityId=TTLXJ20210330&loginId=&response_type=web_token&device_digest_token_id=chinaunicom-9ZQIV4PGMXZ6C5FTDR22V7JJQTQN7EW2&rptid=rpt-312fa7cca68a4fb995b1b5cc6e43c55e-px&end_url=clockIn%2Findex.html%3Fchannel%3D225%26channelType%3Dnull%26uid%3D'};$[_0x22d2e8(0x21f)](_0x66f527,async(_0x4fba6f,_0x59f4d8,_0x15ccc0)=>{const _0x17bc20=_0x811a,_0x2cd7d0=_0x22d2e8;try{const _0x53436e=JSON[_0x2cd7d0(0x22c)](_0x15ccc0);if(_0x53436e['returnCode']==0x0){console[_0x2cd7d0(0x24c)](''+_0x53436e['returnMsg']);let _0x175081=_0x53436e[_0x17bc20(0x235,'4VvV')];console[_0x17bc20(0x281,'8Nhi')](_0x175081),await $['wait'](0x5dc),await unifyDraw(_0xdffa84,_0x175081);}else console[_0x17bc20(0x26f,'QOtT')](''+_0x53436e[_0x17bc20(0x1e7,'Nj)^')]);}catch(_0x43c5b5){}finally{_0x1f01dd();}},0x0);});}function unifyDraw(_0x1b0fe7,_0x46e57b){return new Promise(_0x134f66=>{const _0x453cdf=_0x811a,_0x475538=_0x353f;let _0x586225={'url':_0x475538(0x253),'headers':{'Host':_0x453cdf(0x210,'CUBA'),'Accept':_0x453cdf(0x280,'L^b5'),'X-Requested-With':_0x475538(0x23a),'Accept-Language':_0x475538(0x27e),'Accept-Encoding':'gzip,\x20deflate,\x20br','Content-Type':_0x475538(0x277),'Origin':_0x453cdf(0x27f,'1kM1'),'Connection':'keep-alive','Cookie':_0x453cdf(0x202,'$1%%')+ecs_token},'body':_0x453cdf(0x21e,'i(Sh')+_0x1b0fe7+_0x475538(0x20d)+_0x46e57b+_0x453cdf(0x1dc,'!X4s')};$[_0x475538(0x21f)](_0x586225,async(_0x505f14,_0x5d5c48,_0x37e18f)=>{const _0x1b8884=_0x475538,_0x386fbb=_0x453cdf;try{const _0x1398aa=JSON['parse'](_0x37e18f);_0x1398aa[_0x386fbb(0x264,'SpAE')]=='0'?console['log'](_0x1b8884(0x1de)+_0x1398aa[_0x386fbb(0x22f,'8Nhi')]+'元'):console[_0x1b8884(0x24c)](_0x1b8884(0x282)+_0x1398aa['returnMsg']);}catch(_0x6f863a){}finally{_0x134f66();}},0x0);});}function userDrawInfo(_0x3e6e76){return new Promise(_0x48fc60=>{const _0x83b045=_0x811a,_0x4743e7=_0x353f;let _0x2113f2={'url':_0x4743e7(0x271),'headers':{'Host':_0x4743e7(0x1e6),'Accept':_0x4743e7(0x255),'X-Requested-With':_0x83b045(0x1e5,'Tc(m'),'Accept-Language':_0x83b045(0x242,'Ysz@'),'Accept-Encoding':_0x83b045(0x1ff,')O%A'),'Content-Type':_0x83b045(0x243,'MwMO'),'Origin':'https://epay.10010.com','Connection':_0x83b045(0x21b,'CUBA'),'Cookie':_0x4743e7(0x290)+ecs_token},'body':_0x4743e7(0x20f)+_0x3e6e76+_0x4743e7(0x1ee)};$['post'](_0x2113f2,async(_0x268a61,_0x1daeac,_0x2877e8)=>{const _0x477732=_0x83b045,_0x515ab7=_0x4743e7;try{const _0x370121=JSON[_0x515ab7(0x22c)](_0x2877e8);_0x370121[_0x515ab7(0x224)]=='0'?(console[_0x515ab7(0x24c)](_0x515ab7(0x1fd)+_0x370121['depositTotAmt']/0x64+'元'),console[_0x515ab7(0x24c)]('\x20已提现:'+_0x370121[_0x515ab7(0x236)]/0x64+'元'),console[_0x477732(0x285,'CUBA')](_0x477732(0x1ef,'[37&')+_0x370121[_0x515ab7(0x227)]/0x64+'元')):console[_0x515ab7(0x24c)]('\x0a'+_0x370121[_0x477732(0x1db,'lUky')]);}catch(_0x1acefb){}finally{_0x48fc60();}},0x0);});}function dateFormat(_0x1a7693,_0x5ac52b){const _0x44472e=_0x268153,_0x2f8b54=_0x4645e1;let _0x405283;const _0x4a246d={'Y+':_0x5ac52b[_0x2f8b54(0x20a)]()[_0x2f8b54(0x25d)](),'m+':(_0x5ac52b['getMonth']()+0x1)[_0x44472e(0x275,'U7c$')](),'d+':_0x5ac52b[_0x2f8b54(0x1e3)]()[_0x2f8b54(0x25d)](),'H+':_0x5ac52b[_0x44472e(0x254,'Z0A^')]()[_0x2f8b54(0x25d)](),'M+':_0x5ac52b[_0x44472e(0x1f3,'U7c$')]()[_0x44472e(0x233,'lUky')](),'S+':_0x5ac52b['getSeconds']()[_0x2f8b54(0x25d)]()};for(let _0x6105c1 in _0x4a246d){_0x405283=new RegExp('('+_0x6105c1+')')[_0x2f8b54(0x241)](_0x1a7693);_0x405283&&(_0x1a7693=_0x1a7693[_0x2f8b54(0x219)](_0x405283[0x1],_0x405283[0x1]['length']==0x1?_0x4a246d[_0x6105c1]:_0x4a246d[_0x6105c1][_0x44472e(0x22d,'9J6Z')](_0x405283[0x1]['length'],'0')));;};return _0x1a7693;}function rand(_0x5b3f3e,_0xfb350){const _0x3fc0a0=_0x268153;return parseInt(Math[_0x3fc0a0(0x23e,'ryFo')]()*(_0xfb350-_0x5b3f3e+0x1)+_0x5b3f3e,0xa);}


function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }