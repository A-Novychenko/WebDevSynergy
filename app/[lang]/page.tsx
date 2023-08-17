import {getDictionary} from "../../get-dictionary";
import {Locale} from "../../i18n-config";

import styles from "./page.module.css";

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className={styles.main}>
      <div style={{width: "700px", textAlign: "center"}}>
        <h1>ProJuniors</h1>
        <p>{dictionary.or}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "40px",
          }}
        >
          <p style={{fontSize: 40, fontWeight: 700}}>WDS</p>
          <h2 style={{fontSize: 40, marginLeft: "32px"}}>WebDevSynergy</h2>
        </div>
        <p>{dictionary.descr}</p>
      </div>
    </main>
  );
}
