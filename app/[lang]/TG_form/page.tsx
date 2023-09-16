import {getDictionary} from "@/get-dictionary";
import {Locale} from "../../../i18n-config";
import {TG_form} from "./TG_form";

export default async function TGformPage({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <h1 style={{color: "white", textAlign: "center", paddingBottom: 40}}>
        TGformPage
      </h1>
      <TG_form />
    </>
  );
}
