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
  linkedin: {
    linkedin: string;
    url: string;
  };
  telegram: {
    telegram: string;
    url: string;
  };
  github: {
    github: string;
    url: string;
  };
  resume: {
    resume: string;
    url: string;
  };
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
  img: StaticImageData;
};

type Project = {
  id: number;
  poster: any;
  title: string;
  discription: string;
  techIcon: any[];
};
