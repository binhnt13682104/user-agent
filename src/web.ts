import { WebPlugin } from '@capacitor/core';

import type { UserAgentPlugin } from './definitions';

export class UserAgentPluginWeb extends WebPlugin implements UserAgentPlugin {
  async set(_options: { userAgent: string; reloadOnChange?: boolean }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async get(): Promise<{ userAgent: string; }> {
    throw new Error('Method not implemented.');
  }
  async reset(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
