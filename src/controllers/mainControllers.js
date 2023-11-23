const mainControllers = {
    home: (res, req) => res.send('Route for Home view'),
    contact: (res,req) => (req,res) => res.send('Route for Contact view'),
    about: (res,req) => (req,res) => res.send('Route for About view'),
    faqs: (res,req) => (req,res) => res.send('Route for faqs view'),

}

module.exports= mainControllers;