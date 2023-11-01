type BurgerProps = {
  dictionary: Dictionaries;
  lang: Locale;
};

type Person = {
  textFields: TeamNameType;
  id: number;
  img: StaticImageData;
  imgAbout: StaticImageData;
  profession: string;
  address: AddresType;
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
  profile: {summary: TeamSummaryType; aboutMe: AboutMeType};
};

type TeamNameType = {
  [key: string]: {
    firstName: string;
    lastName: string;
  };
};
type AddresType = {
  [key: string]: string;
};
type TeamSummaryType = {
  [key: string]: string;
};
type AboutMeType = {
  [key: string]: string;
};

type Service = {
  id: number;
  textFields: {
    uk: {
      serviceName: string;
      price: string;
      subtitle: string;
      serciceTitle: string;
      discription: string;
      details: string[];
    };
    en: {
      serviceName: string;
      price: string;
      subtitle: string;
      serciceTitle: string;
      discription: string;
      details: string[];
    };
  };
  img: StaticImageData;
};

type Project = {
  id: number;
  poster: any;
  title: string;
  discription: {en: string; uk: string};
  techIcon: any[];
};
