const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
 
//  public static path
const static_path = (path.join(__dirname,"../public"));
const tempate_path = (path.join(__dirname,"../templates/views"));
const partails_path = (path.join(__dirname,"../templates/partials"));

app.set('view engine', 'hbs');
app.set('views', tempate_path);
hbs.registerPartials(partails_path);

app.use(express.static(static_path));




// routeing
app.get("/", (req,res)=>{
res.render('index')
});

app.get("/about", (req,res)=>{
    res.render('about')
    });

    app.get("/weather", (req,res)=>{
        res.render('weather')
        });

        app.get("*", (req,res)=>{
            res.render('404error',{
                errorMsg : 'Opps ! Page Not Found'
            })
            });

app.listen(port, ()=>{
    console.log(`Listening to the port at ${port}`)
})
 