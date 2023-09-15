import { type } from "os";

type Dictionaries = {
  "server-component": {
    team: any; header: { links: DictionariesLinks }; contact: Contact; team: Teams; technologies:Technologies
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
  subtitle: string,
  title: string,
  description: string,
  form: ContactForm
};

type ContactForm = {
  name: string,
  email: string,
  message: string,
  button: string
};
type Teams = {
  above_header: string,
  title: string,
  subtitle: string
};
type Technologies = {
  above_header:string,
  title:string,
  subtitle:string
}
