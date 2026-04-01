# Migration and Fallbacks

## Contents
- Migrating from `WKWebView` wrappers
- When `SFSafariViewController` is still the right choice
- When `ASWebAuthenticationSession` is required
- When `WKWebView` remains justified

## Migrating from `WKWebView` wrappers

For SwiftUI apps targeting iOS 26+, start from `WebView` and `WebPage` instead of a `UIViewRepresentable` wrapper around `WKWebView`.

Typical mapping:

| Older pattern | Modern default |
|---|---|
| `UIViewRepresentable` wrapper for `WKWebView` | `WebView(url:)` or `WebView(page)` |
| `WKNavigationDelegate` policy handling | `WebPage.NavigationDeciding` |
| KVO for `title`, `url`, or loading state | observable `WebPage` properties |
| `evaluateJavaScript` | `callJavaScript` |
| custom `WKWebViewConfiguration` usage | `WebPage.Configuration` |

Migrate first when the app is already SwiftUI-native and only kept `WKWebView` because there was no native view before.

## When `SFSafariViewController` is still the right choice

Use `SFSafariViewController` when the app just needs to show an external site with Safari behavior and does not need page-level control.

Good fits:
- help center article from a public website
- a legal page or blog post
- a temporary browse-out flow that should keep Safari chrome and reader behavior

Do not use `SFSafariViewController` when the app needs to observe page state, run JavaScript, or intercept page navigation.

## When `ASWebAuthenticationSession` is required

Use `ASWebAuthenticationSession` for OAuth and third-party sign-in.

This remains true even if the rest of the app uses `WebView` for embedded content.

Do not replace auth sessions with embedded web views. The authentication skill owns that flow.

## When `WKWebView` remains justified

A fallback `WKWebView` path can still make sense when:
- the app must back-deploy below iOS 26
- the codebase is still UIKit-first and not ready to move the surface into native SwiftUI WebKit APIs
- a required legacy-only WebKit capability is not yet available through the new SwiftUI-facing API surface

When you keep `WKWebView`, treat it as a deliberate fallback, not the default architecture for a modern iOS 26+ SwiftUI feature.
