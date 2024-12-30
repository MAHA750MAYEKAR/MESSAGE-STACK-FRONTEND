import { createContext, useState } from "react";

const WorkspacePreferencesModalContext = createContext();

export const PreferencesContexProvider = ({ children }) => {
  const [openPreferences, setOpenPreferences] = useState(false);
  const [initialValue, setInitialValue] = useState("");

  return (
    <WorkspacePreferencesModalContext.Provider
      value={{
        openPreferences,
        setOpenPreferences,
        initialValue,
        setInitialValue,
      }}
    >
      {children}
    </WorkspacePreferencesModalContext.Provider>
  );
};

export default WorkspacePreferencesModalContext;