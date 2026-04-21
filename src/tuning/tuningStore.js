import activeTuning from "./active-tuning.json";
import { tuningProfileName, tuningTabs } from "./tuningSchema";
import defaultProfile from "./profiles/practitioner-default.json";

export const tuningStorageKey = "drive-fast-take-chances:tuning:v1";

export const defaultTuning = normalizeTuning(deepMerge(defaultProfile, activeTuning));

export const controlMap = buildControlMap(tuningTabs);

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function cloneTuning(value) {
  if (value === null || value === undefined) {
    return value;
  }

  return JSON.parse(JSON.stringify(value));
}

export function deepMerge(base, override) {
  if (!isPlainObject(base)) {
    return cloneTuning(override ?? base);
  }

  const result = cloneTuning(base);

  if (!isPlainObject(override)) {
    return result;
  }

  for (const [key, value] of Object.entries(override)) {
    if (isPlainObject(value) && isPlainObject(result[key])) {
      result[key] = deepMerge(result[key], value);
      continue;
    }

    if (Array.isArray(value)) {
      result[key] = cloneTuning(value);
      continue;
    }

    result[key] = value;
  }

  return result;
}

export function getValueAtPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

export function setValueAtPath(source, path, value) {
  const keys = path.split(".");
  const result = cloneTuning(source);
  let cursor = result;

  keys.slice(0, -1).forEach((key) => {
    if (!isPlainObject(cursor[key])) {
      cursor[key] = {};
    }

    cursor = cursor[key];
  });

  cursor[keys[keys.length - 1]] = value;
  return result;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeTuning(tuning) {
  if (!isPlainObject(tuning)) {
    return cloneTuning(tuning);
  }

  const result = cloneTuning(tuning);
  const legacyHeaderGap = result.layout?.appMainTop;
  const hasHeaderGap = result.header?.contentGap !== undefined;

  if (legacyHeaderGap !== undefined && !hasHeaderGap) {
    if (!isPlainObject(result.header)) {
      result.header = {};
    }

    result.header.contentGap = legacyHeaderGap;
  }

  if (result.layout && Object.prototype.hasOwnProperty.call(result.layout, "appMainTop")) {
    delete result.layout.appMainTop;
  }

  return result;
}

export function coerceControlValue(control, rawValue) {
  if (control.type === "toggle") {
    return Boolean(rawValue);
  }

  if (control.type === "select" || control.type === "color") {
    return String(rawValue);
  }

  if (control.type === "range") {
    const numericValue = Number.parseFloat(rawValue);

    if (Number.isNaN(numericValue)) {
      return control.min;
    }

    return clamp(numericValue, control.min, control.max);
  }

  return rawValue;
}

export function formatCssValue(control, value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "number") {
    if (!control.unit) {
      return String(value);
    }

    return `${value}${control.unit}`;
  }

  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  return String(value);
}

export function buildControlMap(tabs) {
  const map = new Map();

  for (const tab of tabs) {
    for (const section of tab.sections) {
      for (const control of section.controls) {
        map.set(control.path, control);
      }
    }
  }

  return map;
}

export function buildCssVariables(tuning) {
  const vars = {};

  for (const [path, control] of controlMap.entries()) {
    if (!control.cssVar) {
      continue;
    }

    const value = getValueAtPath(tuning, path);
    vars[control.cssVar] = formatCssValue(control, value);
  }

  return vars;
}

export function getTabDefaults(tabId) {
  return defaultTuning[tabId];
}

export { tuningProfileName, tuningTabs };
