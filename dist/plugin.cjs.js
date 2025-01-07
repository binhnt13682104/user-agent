'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const UserAgent = core.registerPlugin('UserAgent', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.UserAgentPluginWeb()),
});

class UserAgentPluginWeb extends core.WebPlugin {
    async set(_options) {
        throw new Error('Method not implemented.');
    }
    async get() {
        throw new Error('Method not implemented.');
    }
    async reset() {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UserAgentPluginWeb: UserAgentPluginWeb
});

exports.UserAgent = UserAgent;
//# sourceMappingURL=plugin.cjs.js.map
