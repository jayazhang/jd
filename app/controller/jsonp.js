'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async getKey() {
        this.ctx.body = {
            text: 'ce shi ',
            status: 'ok',
            token: 9.4884279824274,
            closeqq: 'no',
            iscn: 'yes'
        };
    }
}

module.exports = HomeController;
