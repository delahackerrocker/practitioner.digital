# Add Header-to-Content Gap Control to practitioner.digital Editor

## Objective
Add **one new control** to the existing `practitioner.digital` editor.

The editor system is already implemented. This task is **not** to build or refactor the editor. It is only to expose a control for the vertical spacing between the top navigation bar and the content below it.

## Requested Control
Add a control in the existing **Header / Nav** tab for:

- **header-to-content gap**
- or equivalent clean label such as:
  - **Gap Below Header**
  - **Header Bottom Spacing**
  - **Nav-to-Content Gap**

Use the naming that best matches the current editor’s style, but the meaning must be clear.

## What It Should Control
This control should adjust the vertical distance between:

1. the top nav/header bar
2. the first content block beneath it

In the current layout, this is the visible space between the rounded top bar and the large content area below it.

## Implementation Rules
1. **Do not rebuild the editor**
   - The editor already exists.
   - Only add this one missing control and wire it correctly.

2. **Use the existing tuning architecture**
   - Follow the current project’s established schema/store/profile/control patterns.
   - Do not introduce a parallel system.

3. **Single source of truth**
   - The spacing value should come from the tuning/editor system, not from a second hardcoded local value.

4. **The control must be real**
   - If the slider/input appears in the editor, changing it must visibly move the content gap it claims to control.

5. **Preserve current visual default**
   - The initial/default value should match the site’s current appearance as closely as possible.

## Suggested Wiring
Use the existing layout structure and identify the cleanest place where this spacing is currently defined.

This will likely be one of:
- the top-level page shell spacing below the header
- the hero/overview section top margin or padding
- the main content wrapper gap beneath the header container

Choose the cleanest implementation based on the current codebase.

## Deliverable
Add the control to the existing editor and wire it so that adjusting it changes the vertical spacing below the top bar.

## Acceptance Criteria
This task is successful when:

1. The existing editor includes a new control in **Header / Nav** for the space below the top bar.
2. Adjusting the control visibly changes the vertical gap between the header and the content below it.
3. The value is routed through the existing tuning system.
4. The current default site appearance is preserved when the editor first loads.
5. No unrelated editor or layout refactors are introduced.
