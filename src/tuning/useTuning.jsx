import { createContext, useContext, useEffect, useState } from "react";
import {
  buildCssVariables,
  coerceControlValue,
  defaultTuning,
  deepMerge,
  cloneTuning,
  controlMap,
  getTabDefaults,
  normalizeTuning,
  setValueAtPath,
  tuningProfileName,
  tuningStorageKey,
} from "./tuningStore";

const TuningContext = createContext(null);

function readStoredTuning() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(tuningStorageKey);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getInitialTuning() {
  const storedTuning = readStoredTuning();
  const normalizedStoredTuning = normalizeTuning(storedTuning);

  if (!normalizedStoredTuning) {
    return cloneTuning(defaultTuning);
  }

  return deepMerge(defaultTuning, normalizedStoredTuning);
}

function saveTuning(tuning) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(tuningStorageKey, JSON.stringify(tuning));
  } catch {
    // Ignore storage failures in dev-only tuning mode.
  }
}

function applyTuningToDocument(tuning) {
  const root = document.documentElement;
  const cssVariables = buildCssVariables(tuning);

  for (const [name, value] of Object.entries(cssVariables)) {
    root.style.setProperty(name, value);
  }

  root.dataset.headerSticky = tuning.header.sticky ? "true" : "false";
  root.dataset.motionReduced = tuning.motion.reducedMotion ? "true" : "false";
  root.dataset.debugBounds = tuning.debug.showBounds ? "true" : "false";
  root.dataset.debugMaxWidth = tuning.debug.showMaxWidthGuide ? "true" : "false";
}

export function TuningProvider({ children }) {
  const [tuning, setTuning] = useState(getInitialTuning);

  useEffect(() => {
    applyTuningToDocument(tuning);

    if (import.meta.env.DEV) {
      saveTuning(tuning);
    }
  }, [tuning]);

  const setControlValue = (path, rawValue) => {
    setTuning((current) => {
      const control = controlMap.get(path);
      const nextValue = control ? coerceControlValue(control, rawValue) : rawValue;

      return setValueAtPath(current, path, nextValue);
    });
  };

  const resetTab = (tabId) => {
    const defaults = getTabDefaults(tabId);

    setTuning((current) => ({
      ...current,
      [tabId]: cloneTuning(defaults),
    }));
  };

  const resetAll = () => {
    setTuning(cloneTuning(defaultTuning));
  };

  const importTuning = (nextTuning) => {
    setTuning(deepMerge(defaultTuning, normalizeTuning(nextTuning)));
  };

  const exportTuning = () => JSON.stringify(tuning, null, 2);

  const value = {
    tuning,
    setControlValue,
    resetTab,
    resetAll,
    importTuning,
    exportTuning,
    profileName: tuningProfileName,
  };

  return <TuningContext.Provider value={value}>{children}</TuningContext.Provider>;
}

export function useTuning() {
  const context = useContext(TuningContext);

  if (!context) {
    throw new Error("useTuning must be used inside a TuningProvider.");
  }

  return context;
}
