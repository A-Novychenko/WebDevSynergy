import {BannerSwiper} from "@/components/Elements/ProjectsSwiper/testSwiper";
import {Locale} from "@/i18n-config";

export const Project = ({lang}: {lang: Locale}) => {
  return <BannerSwiper lang={lang} />;
};
