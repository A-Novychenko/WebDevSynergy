type Dictionaries = {
  "server-component": { header: { links: DictionariesLinks }; contact: Contact};
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
}
