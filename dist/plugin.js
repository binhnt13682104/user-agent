var capacitorUserAgent = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
