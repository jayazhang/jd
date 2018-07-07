'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async getKey() {
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
            text: 'ce shi ',
            status: 'ok',
            token: base + random(),
            closeqq: 'no',
            iscn: 'yes'
        };
    }
}

module.exports = HomeController;
