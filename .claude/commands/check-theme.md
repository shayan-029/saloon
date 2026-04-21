---
name: check-theme
description: Audit the frontend for luxury theme consistency — hard-coded colors, missing theme tokens, non-mobile-first breakpoints, and gold accent misuse.
---

Audit the `frontend/src/` directory for luxury theme violations:

1. **Hard-coded colors**: Search for any hex color literals (`#`) or rgb/rgba values outside of `src/theme/`. Flag each file and line.

2. **Gold misuse**: Find any usage of the gold color (`#C9A84C`, `#E8C97A`, or `palette.primary.main`) as a large background fill rather than an accent. Gold should not be the background of sections or large containers.

3. **Non-mobile-first breakpoints**: Find any MUI `sx` props that define styles for `lg`/`md` without a corresponding base (`xs`) style. Mobile-first means the base style (no breakpoint key) is the mobile style.

4. **Font references**: Check that no components import or reference fonts directly — fonts must come from the MUI theme's `typography` config or `next/font` in `layout.tsx`.

5. **Focus rings**: Check that interactive elements (buttons, links, inputs) have a gold focus ring style in the theme's component overrides.

For each violation, output: file path, line number, what the issue is, and the corrected code.
