import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { THEMES } from 'constants/common';
import { storeSettings } from 'utils/settings';

const SettingsContext = createContext();

const defaultSettings = {
  theme: THEMES.ONE_DARK,
};

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

  const handleSaveSettings = (updatedSettings = {}) => {
    setCurrentSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object,
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
