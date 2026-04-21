import { useEffect, useId, useRef, useState } from "react";
import { tuningTabs } from "../tuning/tuningSchema";
import { useTuning } from "../tuning/useTuning.jsx";
import "./editor.css";

function formatControlValue(control, value) {
  if (control.type === "toggle") {
    return value ? "On" : "Off";
  }

  if (control.type === "range") {
    return `${value}${control.unit || ""}`;
  }

  return value;
}

function ControlField({ control, value, onChange }) {
  const inputId = useId();

  if (control.type === "toggle") {
    return (
      <label className="editor-control editor-control--toggle" htmlFor={inputId}>
        <span className="editor-control__label">{control.label}</span>
        <span className="editor-control__toggle-wrap">
          <input
            checked={Boolean(value)}
            id={inputId}
            onChange={(event) => onChange(event.target.checked)}
            type="checkbox"
          />
          <span className="editor-control__toggle-track" />
        </span>
      </label>
    );
  }

  if (control.type === "select") {
    return (
      <label className="editor-control" htmlFor={inputId}>
        <span className="editor-control__label">{control.label}</span>
        <select
          id={inputId}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          {control.options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {control.help ? <span className="editor-control__help">{control.help}</span> : null}
      </label>
    );
  }

  if (control.type === "range") {
    return (
      <label className="editor-control editor-control--range" htmlFor={inputId}>
        <div className="editor-control__label-row">
          <span className="editor-control__label">{control.label}</span>
          <span className="editor-control__value">{formatControlValue(control, value)}</span>
        </div>
        <input
          id={inputId}
          max={control.max}
          min={control.min}
          onChange={(event) => onChange(event.target.value)}
          step={control.step}
          type="range"
          value={value}
        />
        <div className="editor-control__number-row">
          <input
            max={control.max}
            min={control.min}
            onChange={(event) => onChange(event.target.value)}
            step={control.step}
            type="number"
            value={value}
          />
          {control.unit ? <span className="editor-control__unit">{control.unit}</span> : null}
        </div>
        {control.help ? <span className="editor-control__help">{control.help}</span> : null}
      </label>
    );
  }

  const isColorField = control.type === "color";

  return (
    <label className="editor-control" htmlFor={inputId}>
      <span className="editor-control__label">{control.label}</span>
      <div className="editor-control__text-row">
        {isColorField ? (
          <span className="editor-control__swatch" style={{ background: value }} />
        ) : null}
        <input
          id={inputId}
          onChange={(event) => onChange(event.target.value)}
          type="text"
          value={value}
        />
      </div>
      {control.help ? <span className="editor-control__help">{control.help}</span> : null}
    </label>
  );
}

function EditorSection({ title, controls, tuning, onChange }) {
  return (
    <section className="editor-section">
      <div className="editor-section__header">
        <h3>{title}</h3>
      </div>

      <div className="editor-section__grid">
        {controls.map((control) => {
          const value = control.path.split(".").reduce((current, key) => current?.[key], tuning);

          return (
            <ControlField
              control={control}
              key={control.path}
              onChange={(nextValue) => onChange(control.path, nextValue)}
              value={value}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function EditorApp() {
  const { tuning, setControlValue, resetTab, resetAll, importTuning, exportTuning, profileName } =
    useTuning();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(tuningTabs[0].id);
  const fileInputRef = useRef(null);

  const activeTab = tuningTabs.find((tab) => tab.id === activeTabId) ?? tuningTabs[0];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!import.meta.env.DEV) {
    return null;
  }

  const handleExport = () => {
    const blob = new Blob([exportTuning()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "practitioner-active-tuning.json";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImportFile = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      importTuning(parsed);
    } catch {
      window.alert("That file could not be parsed as tuning JSON.");
    }

    event.target.value = "";
  };

  return (
    <div className={`tuning-editor ${isOpen ? "is-open" : ""}`}>
      <button
        className="tuning-editor__toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? "Close editor" : "Edit"}
      </button>

      <aside className="tuning-editor__panel" aria-label="Visual tuning editor">
        <header className="tuning-editor__header">
          <div>
            <p className="tuning-editor__eyebrow">Dev tuning</p>
            <h2>Practitioner workbench</h2>
            <p className="tuning-editor__summary">
              Live tuning for brand, layout, media, and debug guides.
            </p>
          </div>

          <div className="tuning-editor__actions">
            <button className="editor-link" onClick={() => setIsOpen(false)} type="button">
              Close
            </button>
            <button className="editor-link" onClick={handleImportClick} type="button">
              Import JSON
            </button>
            <button className="editor-link" onClick={handleExport} type="button">
              Export JSON
            </button>
            <button className="editor-link" onClick={resetAll} type="button">
              Reset all
            </button>
            <span className="tuning-editor__profile">{profileName}</span>
            <input
              accept="application/json"
              onChange={handleImportFile}
              ref={fileInputRef}
              type="file"
            />
          </div>
        </header>

        <nav className="tuning-editor__tabs" aria-label="Tuning tabs">
          {tuningTabs.map((tab) => (
            <button
              aria-pressed={tab.id === activeTabId}
              className={`tuning-editor__tab ${tab.id === activeTabId ? "is-active" : ""}`}
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              type="button"
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="tuning-editor__body">
          <div className="tuning-editor__tab-header">
            <div>
              <p className="tuning-editor__tab-eyebrow">{activeTab.label}</p>
              <p className="tuning-editor__tab-description">{activeTab.description}</p>
            </div>
            <button className="editor-link" onClick={() => resetTab(activeTab.id)} type="button">
              Reset tab
            </button>
          </div>

          <div className="tuning-editor__sections">
            {activeTab.sections.map((section) => (
            <EditorSection
              controls={section.controls}
              key={section.title}
              onChange={setControlValue}
              title={section.title}
              tuning={tuning}
            />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
