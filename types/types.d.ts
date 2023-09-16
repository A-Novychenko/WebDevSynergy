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
