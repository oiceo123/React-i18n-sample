import "./App.css";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
  };

  return (
    <>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <Trans i18nKey={"description"}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </Trans>
      </p>
      <p>{t("learn")}</p>
    </>
  );
}

export default App;
