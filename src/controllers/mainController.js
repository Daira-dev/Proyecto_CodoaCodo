export const home = (req, res) => {
    console.log(req.body)
    res.send(__dirname + '../public/index.html');
};

export const contact = (req, res) => res.send('Router for Contact view');

export const about = (req, res) => res.send('Router for About view');

export const faqs = (req, res) => res.send('Router for Faqs view');