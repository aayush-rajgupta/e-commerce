/**
 * Converts a product title into a URL-safe slug.
 *
 * Examples:
 *   "Cute Floral Hairband!"        → "cute-floral-hairband"
 *   "Hand-Woven Bag (Natural)"     → "hand-woven-bag-natural"
 *   "Artisan Ceramic Vase — 2024"  → "artisan-ceramic-vase-2024"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    // Replace em-dashes, en-dashes, and underscores with hyphens
    .replace(/[—–_]/g, "-")
    // Strip anything that is NOT a letter, digit, space, or hyphen
    .replace(/[^a-z0-9\s-]/g, "")
    // Collapse multiple whitespace / hyphens into a single hyphen
    .replace(/[\s-]+/g, "-")
    // Trim leading/trailing hyphens
    .replace(/^-+|-+$/g, "");
}
