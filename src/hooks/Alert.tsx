import React, { createContext, useContext, useReducer, useState } from 'react';
import Button from '../components/Button';

import { InfoBox, Overlay } from '../styles/hooks/Alert';

interface AlertContextData {
  sendInfoAlert: (title: string, body: string) => void;
}

interface Alert {
  id: string;
  title: string;
  body: string;
  state: 'opening' | 'closing';
}

interface UseAlertProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: Alert[], action: { type: 'new' | 'change_state' | 'remove'; alert: any }): Alert[];
}

const alertContext = createContext<AlertContextData>(null);

const useAlerts: UseAlertProps = (state, { type, alert }) => {
  switch (type) {
    case 'new': {
      return [...state, { id: Date.now().toString(), ...alert, state: 'opening' }];
    }
    case 'change_state': {
      return state.map((value) =>
        value.id === alert.id ? { ...value, state: alert.state } : value
      );
    }
    case 'remove': {
      return state.filter((value) => value.id !== alert.id);
    }
    default: {
      throw new Error(`Unhandled type: ${type}`);
    }
  }
};

const AlertProvider: React.FC = ({ children }) => {
  const [alerts, dispatch] = useReducer(useAlerts, []);
  const [overlayState, setOverlaySate] = useState<'show' | 'closing' | 'hidden'>('hidden');

  const sendInfoAlert = (title: string, body: string): void => {
    dispatch({ type: 'new', alert: { title, body } });
    setOverlaySate('show');
  };

  const changeAlertState = (id: string, state: 'opening' | 'closing'): void => {
    dispatch({ type: 'change_state', alert: { id, state } });
  };

  const removeAlert = (id: string): void => {
    dispatch({ type: 'remove', alert: { id } });
    if (alerts.length === 1) setOverlaySate('hidden');
  };

  return (
    <alertContext.Provider value={{ sendInfoAlert }}>
      <Overlay
        animate={overlayState}
        transition={{ duration: 0.15 }}
        variants={{
          show: { opacity: 1, display: 'flex' },
          closing: { opacity: 0, display: 'flex' },
          hidden: { opacity: 0, display: 'none' },
        }}
      >
        {alerts.map((alert) => (
          <InfoBox
            key={alert.id}
            animate={alert.state}
            transition={{ duration: 0.15 }}
            initial={{ opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0.8 }}
            variants={{
              opening: { opacity: 1, translateX: '-50%', translateY: '-50%', scale: 1 },
              closing: { opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0.8 },
            }}
          >
            <strong>{alert.title}</strong>
            <span>{alert.body}</span>
            <Button
              primary
              onClick={() => {
                changeAlertState(alert.id, 'closing');
                if (alerts.length === 1) setOverlaySate('closing');
                setTimeout(() => removeAlert(alert.id), 150);
              }}
            >
              Fechar
            </Button>
          </InfoBox>
        ))}
      </Overlay>
      {children}
    </alertContext.Provider>
  );
};

export const useAlert = (): AlertContextData => useContext(alertContext);

export default AlertProvider;
