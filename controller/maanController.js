const maan = {
    main: (req, res) => { 
        res.render('index');
    },
    about: (req, res) => { 
        res.render('about');
    },
    store: (req, res) => { 
        res.render('store');
    },
    contact: (req, res) => { 
        res.render('contact');
    },
    cart: (req, res) => { 
        res.render('cart');
    }



};

module.exports = maan;