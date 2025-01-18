/**
 * 🌱 These routes are public.
 * 🔓 Not required for authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  "/about",
  "/contact",
  "/features",
  "/docs",
  "/terms",
  "/privacy-policy",
];

/**
 * 🌱 These routes are used for authentication.
 * 🔓 Not required for authentication.
 * @type {string[]}
 */
export const authRoutes = ["/auth"];

/**
 * 🌱 These routes are protected.
 * 🔒 Required authentication.
 * @type {string[]}
 */
export const protectedRoutes = ["/dashboard/urls", "/dashboard/settings"];

/**
 * 🌱 These routes are used for the check slug.
 * ✍️ Only type the prefix, with "/".
 * 🔓 Not required for authentication.
 * @type {string[]}
 */
export const checkRoutesPrefix = "/check";

/**
 * 🌱 These prefix for API authentication routes.
 * ✍️ Routes that start with this prefix are used for API authentication purposes.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * 🌱 The default redirect URL after logging in.
 * 🔓 Not required for authentication.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_URL = "/dashboard/urls";
