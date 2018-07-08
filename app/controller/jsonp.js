'use strict';

const Controller = require('egg').Controller;
const fs = require('fs-extra');
const path = require('path');
const publicPath = path.join(process.cwd(), 'app/public');

function domainName(url) {
    let sign = "://";
    let pos = url.indexOf(sign);
    //如果以协议名开头
    //如：http://github.com/
    if (pos >= 0) {
        pos += sign.length;
        //截取协议名以后的部分
        //github.com/
        url = url.slice(pos);
    }
    //以小数点作分割
    let array = url.split(".");
    //如果是以3W开头，返回第二部分
    //如：www.github.com
    if (array[0] === "www") {
        return array[1];
    }
    //如果不是以3W开头，则返回第一部分
    //如：github.com/
    return array[0];
}

class HomeController extends Controller {
    async getKey() {
        let {
            f,
            current_url: currentUrl
        } = this.ctx.query;


        try {
            const filePath = path.join(publicPath, f);
            currentUrl = decodeURIComponent(currentUrl);
            console.log(filePath);
            const hostname = domainName(currentUrl);
            await fs.ensureFile(filePath);
            let data;
            try {
                data = await fs.readJson(filePath);
            } catch (e) {
                data = {};
            }
            data.total = data.total || 0;
            data.total++;
            data[hostname] = data[hostname] || 0;
            data[hostname]++;
            await fs.writeJson(filePath, data, {spaces: 4});
        } catch (e) {
            console.log(e);
        }

        const base = '支付宝发红包啦！即日起还有机会额外获得余额宝消费红包！长按复制此消息，打开最新版支付宝就能领取！';
        const keys = [
            'HxzrcF53hk',
            '6w1Kam02zm',
            'fwwHoA09ra',
            'tgOxj226Fk',
            '6Ljs6e18cz',
            'bpM2z080in',
            'NxwG5M51mO',
            'lt0tDb85tp',
            '4A2Gnl01ut',
            'BoT4PE77Uc',
            '5XTS1230Da',
            'FLxzfS12Ck',
            'GvKDvd84je',
            '1F5h5a73Lj',
            'JkZvM976r9',
            'anWfjx97qo',
            'FxbOVC98Oh',
        ];

        function random() {
            let l = Math.floor(Math.random() * keys.length);
            return keys[l]
        }
        this.ctx.body = {
            text: base + random(),
            status: 'ok',
            token: 7.9234234234,
            closeqq: 'no',
            iscn: 'yes'
        };
    }
}

module.exports = HomeController;
