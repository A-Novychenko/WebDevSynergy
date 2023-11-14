type Dictionaries = {
  "server-component": {
    team: any;
    header: { links: DictionariesLinks };
    contact: Contact;
    team: Teams;
    technologies: Technologies;
    service: dictionaryServices;
    hero: Hero;
    project: ProjectsSection;
  };
};

type Header = {
  header: DictionariesLinks;
};

type DictionariesLinks = {
  home: string;
  services: string;
  projects: string;
  technologies: string;
  ourTeam: string;
  contact: string;
};

type Contact = {
  subtitle: string;
  title: string;
  description: string;
  form: ContactForm;
};

type ContactForm = {
  name: string;
  email: string;
  message: string;
  button: string;
};

type Teams = {
  above_header: string;
  title: string;
  subtitle: string;
};

type Technologies = {
  above_header: string;
  title: string;
  subtitle: string;
};

type Hero = {
  subtitle: string;
  titleStart: string;
  accents: string;
  titleEnd: string;
  description: string;
  btnSecvice: string;
  btnProject: string;
};

type dictionaryServices = {
  header: string;
  subHeader: string;
  description: string;
  otherServices: string;
  moreServices: string;
};

type ProjectsSection = {
  subtitle: string;
  title: string;
  description: string;
  btnAll: string;
  btnDeveloper: string;
  btnDesign: string;
};
