type BurgerProps = {
  dictionary: Dictionaries;
  lang: Locale;
};

type Person = {
  textFields: {
    uk: {
      firstName: string;
      lastName: string;
    };
    en: {
      firstName: string;
      lastName: string;
    };
  };
  id: number;
  img: StaticImageData;
  profession: string;
  linkedin: string;
  telegram: string;
  github: string;
  resume: string;
};

type Service = {
  id: number;
  textFields: {
    uk: {
      serviceName: string;
    };
    en: {
      serviceName: string;
    };
  };
};

type projectItem = {
  id: number;
  poster: string;
  label: string;
  discription: string;
  icons: ane[];
};
