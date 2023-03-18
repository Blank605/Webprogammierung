const express = require("express");
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
const { v4: uuid } = require("uuid");
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());


var users = [];

const Personalisierung = async function Personalisierung(req, res, next) {
    let user = {
        usercookie : ""
    }
	//setzt die userid in req.userid. Falls es keine gibt, dann wird eine erstellt
	if (req.cookies.usercookie === undefined) {
		const zeit = new Date();
		zeit.setTime(zeit.getTime() + (2 * 365 * 24 * 60 * 60 * 1000));
		const usercookie = uuid();
		res.cookie("usercookie", usercookie, { expires: zeit, httpOnly: true });
        user.usercookie = usercookie;
        users.push(user);
		req.usercookie = usercookie;
	}else{
		req.usercookie = req.cookies.usercookie;
	}
	next();
}
app.use(Personalisierung);

app.get('/', (req, res) => {
	res.cookie("lastvisited","/home",{httpOnly: true, SameSite: "None"});
	res.sendFile('/home.html', { root: 'Website' });
});
app.get('/index', (req, res) => {
    res.cookie("lastvisited","/home",{httpOnly: true, SameSite: "None"});
	res.sendFile('/home.html', { root: 'Website' });
});
app.get('/TaskSummary', (req, res) => {
    res.cookie("lastvisited","/home",{httpOnly: true, SameSite: "None"});
	res.sendFile('/TaskSummary.html', { root: 'Website' });
});
app.use(express.static('Website'));
app.listen(8080, () => {
	console.log("Server started on port 8081");
});