import requests

headers = {
    'Host': 'v1.xianbao.fun',
    # 'content-length': '0',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi K20 Pro Build/PKQ1.190616.001;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.79 Mobile Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'origin': 'https://v1.xianbao.fun',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://v1.xianbao.fun/Ucenter',
    # 'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': 'timezone=8',
    'cookie': 'PHPSESSID=h0dbjefch5crj8pnkf5tht9qh7',
    'cookie': '__yjs_duid=1_0579958d0327b8d5e33e27758ca9a7361661941312208',
    'cookie': 'username_0ab40984=inoyna',
    'cookie': 'token_0ab40984=7104a28af87d83c6b56ae7420f83d42d02e599c7c349bbb099e47c8bd8acf2b21664552796',
    'cookie': 'addinfo=%7B%22chkadmin%22%3A1%2C%22chkarticle%22%3A0%2C%22levelname%22%3A%22%5Cu8bc4%5Cu8bba%5Cu8005%22%2C%22userid%22%3A%227519%22%2C%22useralias%22%3A%22inoyna%22%7D',
    'cookie': '__51vcke__undefined=530324ca-9025-58cd-bec5-d6cbd6ad002e',
    'cookie': '__51vuft__undefined=1662826697965',
    'cookie': '__51vcke__JGYEHCrHijT4u6x2=82edf76b-6c63-5dc3-980e-a9057b5e101d',
    'cookie': '__51vuft__JGYEHCrHijT4u6x2=1662826697995',
    'cookie': 'cookie_islog=1',
    'cookie': 'is_mochu_us_load=mochu_us',
    'cookie': '__vtins__undefined=%7B%22sid%22%3A%20%2264b0b624-5875-5828-8e3f-0dd1a87128e2%22%2C%20%22vd%22%3A%201%2C%20%22stt%22%3A%200%2C%20%22dr%22%3A%200%2C%20%22expires%22%3A%201663719888578%2C%20%22ct%22%3A%201663718088578%7D',
    'cookie': '__51uvsct__undefined=49',
    'cookie': '__vtins__JGYEHCrHijT4u6x2=%7B%22sid%22%3A%20%223f5a32bb-7563-5952-9a86-1801c0c15256%22%2C%20%22vd%22%3A%201%2C%20%22stt%22%3A%200%2C%20%22dr%22%3A%200%2C%20%22expires%22%3A%201663719888605%2C%20%22ct%22%3A%201663718088605%7D',
    'cookie': '__51uvsct__JGYEHCrHijT4u6x2=49',
    'cookie': 'mochu_us_notice_alert=1',
    'Content-Type': 'application/x-www-form-urlencoded',
}

params = {
    'act': 'qiandao',
}

response = requests.post('https://v1.xianbao.fun/zb_users/plugin/mochu_us/cmd.php', params=params, headers=headers)