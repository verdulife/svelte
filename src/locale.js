import { getLocaleFromNavigator } from "svelte-i18n";

export const locale = getLocaleFromNavigator().includes("en") ? "en" : "es";
