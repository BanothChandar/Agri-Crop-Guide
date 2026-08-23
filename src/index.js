const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const { collection, connectDatabase } = require("./config");

const app = express();


// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "farmerGuideSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


// ================= VIEW ENGINE =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));


// ================= ROUTES =================

// Landing Page
app.get("/", (req, res) => {
    res.render("ui");
});

// Login Page
app.get("/login", (req, res) => {
    res.render("login");
});

// Signup Page
app.get("/signup", (req, res) => {
    res.render("signup");
});


// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.send("Please fill all fields");
        }

        const existingUser = await collection.findOne({ name: username });

        if (existingUser) {
            return res.send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await collection.create({
            name: username,
            password: hashedPassword
        });

        res.redirect("/login");

    } catch (error) {
        console.log(error);
        res.send("Error registering user");
    }
});


// ================= LOGIN =================
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await collection.findOne({ name: username });

        if (!user) {
            return res.send("Username not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("Wrong password");
        }

        req.session.user = user.name;

        res.redirect("/home");

    } catch (error) {
        console.log(error);
        res.send("Login failed");
    }
});


// ================= AUTH MIDDLEWARE =================
function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect("/login");
}


// ================= PROTECTED PAGES =================
app.get("/home", isAuthenticated, (req, res) => {
    res.render("home", {
        user: req.session.user,
        activePage: "home"
    });
});

app.get("/red", isAuthenticated, (req, res) => {
    res.render("red", { activePage: "red" });
});

app.get("/black", isAuthenticated, (req, res) => {
    res.render("black", { activePage: "black" });
});

app.get("/clay", isAuthenticated, (req, res) => {
    res.render("clay", { activePage: "clay" });
});

app.get("/peaty", isAuthenticated, (req, res) => {
    res.render("peaty", { activePage: "peaty" });
});

app.get("/salin", isAuthenticated, (req, res) => {
    res.render("salin", { activePage: "salin" });
});

app.get("/forest", isAuthenticated, (req, res) => {
    res.render("forest", { activePage: "forest" });
});

app.get("/result", isAuthenticated, (req, res) => {
    res.render("result", { activePage: "result" });
});


// ================= LOGOUT =================
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});


// ================= SERVER =================
const port = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDatabase();
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Server was not started because the database is unavailable.");
        process.exit(1);
    }
}

startServer();
