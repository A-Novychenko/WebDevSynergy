import {getDictionary} from "../../get-dictionary";
import {Locale} from "../../i18n-config";

import styles from "./page.module.css";

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className={styles.main}>
      <div
        style={{
          width: "1920px",
          textAlign: "center",
          backgroundColor: "#030712",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "40px",
          }}
        >
          <p style={{fontSize: 40, fontWeight: 700}}>WDS</p>
          <h1 style={{fontSize: 40, marginLeft: "32px"}}>WebDevSynergy</h1>
        </div>
        <p>{dictionary.descr}</p>
      </div>
    </main>
  );
}
