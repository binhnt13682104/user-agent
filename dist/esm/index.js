import { registerPlugin } from '@capacitor/core';
const UserAgent = registerPlugin('UserAgent', {
    web: () => import('./web').then(m => new m.UserAgentPluginWeb()),
});
export * from './definitions';
export { UserAgent };
//# sourceMappingURL=index.js.map