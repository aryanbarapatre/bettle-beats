import { useEffect } from "react";

type CallbackFunction = () => void;

export const useOnKeyPress = (callback: CallbackFunction, targetKey: string) => {
  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callback();
      }
    };

    window.addEventListener('keydown', keyPressHandler);

    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [callback, targetKey]);
};
