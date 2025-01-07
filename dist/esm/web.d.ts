import { WebPlugin } from '@capacitor/core';
import type { UserAgentPlugin } from './definitions';
export declare class UserAgentPluginWeb extends WebPlugin implements UserAgentPlugin {
    set(_options: {
        userAgent: string;
        reloadOnChange?: boolean;
    }): Promise<void>;
    get(): Promise<{
        userAgent: string;
    }>;
    reset(): Promise<void>;
}
