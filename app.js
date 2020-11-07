const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const products = require('./src/products.json');

const hbs = handlebars.create({
    helpers: {
        toFix: function (data) {
            return data.toFixed(2)
        },
        imgMod: function (data) {
            const str = data.substr(data.length - 4);
            const vars = ['.jpg', '.ttf', '.png', '.JPG'];

            for (let i = 0; i < vars.length; i++) {
                if (str === vars[i]) {
                    return data.replace(vars[i], '_220x220_1' + vars[i])
                }
            }
        },
        short: function (data) {
            return data.substr(5)
        }
    },
    extname: 'handlebars',
    defaultLayout: 'main',
    partialsDir: 'views/partials',
    layoutsDir: 'views/layouts'
});

app.engine( 'handlebars', hbs.engine);

app.set( 'view engine', 'handlebars' );
app.set('views', __dirname + '/views');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/src'));
app.get('/', function (req, res) {
    res.render('home', {title: 'Тестовое задание', products})
});


app.listen(app.get('port'), function () {
    console.log('Server is on')
});
