# Remove the completed Two States dead scroll zone

## Changes
- Preserve the existing 250dvh sticky scroll track for the first Gujarat-to-Uttar Pradesh animation.
- When the animation first reaches completion, capture the scroll container and section positions, switch the section to one viewport of normal content, and compensate the scroll position by the removed height.
- Make the completed layout non-sticky while keeping the final images, connectors, and heart visible.
- Keep the collapsed state for the remainder of the mounted invitation so revisiting the section scrolls normally.

## Verification
- Complete the animation once, then scroll above and below the section to confirm there is no inactive pinned distance.
- Confirm the collapse does not visibly jump at the completion boundary.
- Confirm the initial visit still uses the full scroll-driven animation and final artwork remains intact.
