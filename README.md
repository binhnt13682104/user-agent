# @codebrew/capacitor-user-agent

User Agent get/set/reset plugin for Capacitor

## Install

```bash
npm install @codebrew/capacitor-user-agent
npx cap sync
```

## API

<docgen-index>

* [`set(...)`](#set)
* [`get()`](#get)
* [`reset()`](#reset)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### set(...)

```typescript
set(options: { userAgent: string; reloadOnChange?: boolean; }) => Promise<void>
```

Update the Webview user agent (Android and iOS only). Set reloadOnChange
to true to reload the page when the user agent changes (default is false).
Starting from KITKAT Android version, changing the user-agent while loading
a web page causes WebView to initiate loading once again.

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code>{ userAgent: string; reloadOnChange?: boolean; }</code> |

--------------------


### get()

```typescript
get() => Promise<{ userAgent: string; }>
```

**Returns:** <code>Promise&lt;{ userAgent: string; }&gt;</code>

--------------------


### reset()

```typescript
reset() => Promise<void>
```

--------------------

</docgen-api>
