import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../../i18n-config";
import { Contact } from "@/components/Sections/Contact/Contact";

export default async function ServicesPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Contact dictionary={dictionary} />
    </>
  )
}
