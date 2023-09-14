import {getDictionary} from "@/get-dictionary";
import {Locale} from "../../../i18n-config";

export default async function OurTeamPage({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return <h1 style={{color: "white", textAlign: "center"}}>Our team</h1>;
}
