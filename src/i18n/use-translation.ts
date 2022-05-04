import { i18n as I18n } from "i18next";
import { useTranslation as useTranslationOrig } from "react-i18next";
import { TransKey } from "./trans-key";

type TFunc = (key: TransKey, params?: Record<string, unknown>) => string;

type UseTranslation = {
  t: TFunc;
  i18n: I18n;
};

function useTranslation(): UseTranslation {
  const { t: tOrig, i18n } = useTranslationOrig();

  const t: TFunc = (key, params) => {
    return tOrig(key, params);
  };

  return { t, i18n };
}

export default useTranslation;
