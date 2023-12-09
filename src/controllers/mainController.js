 export const home = (req, res) => res.render('../src/views/index.ejs');

export const contact = (req, res) => res.render('../src/views/contact.ejs');

export const about = (req, res) => res.send("Router for About view");

export const faqs = (req, res) => res.send("Router for Faqs view");


