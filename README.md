# Empty Tree focus reproduction

[Open in StackBlitz](https://stackblitz.com/github/minwookshin/react-spectrum/tree/repro-tree-empty-focus-10660?file=src.jsx)

Minimal reproduction for [React Spectrum #10660](https://github.com/adobe/react-spectrum/issues/10660), using React Aria Components 1.21.1. Both collections begin empty; pressing Enter adds the same three items without moving focus.

1. Click **Reset both collections**, then press Tab to focus the empty Tree.
2. Press Enter, then ArrowDown.
3. Expected: focus moves to Item 1. Actual: focus remains on the Tree container.
4. Reset, then Tab twice to reach the empty ListBox. Enter and ArrowDown move focus to Item 1.

Run with Node 22.12+ (or 20.19+):

```sh
npm ci
npm run dev
```

The original failure was verified in Chromium. The ListBox is a control, not a proposed workaround. The corresponding fix and regression story are in [PR #10689](https://github.com/adobe/react-spectrum/pull/10689).
