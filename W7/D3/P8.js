//JWT flow with login,refresh-style logic and secure verification.
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretkey = "Mysecretkey";
const refreshSecretkey = "Newsecretkey123";

//in-memory storage for refresh tokens
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing"
        });
    }
    try {
        req.user = jwt.verify(token, secretkey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        })
        next()
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            succes: false,
            message: "Access token is invalid"
        });
    }
}
app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "password@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid credential"
        })
    }
    const accessToken = jwt.sign({
        userId: 101,//payload
        email: email,//payload
        role: "member"
    }, secretkey, {
        expiresIn: "10m",
        algorithm: "HS256",
        issuer: "jwt-example"
    }
    );
    const refreshToken = jwt.sign({
        userId: 101,
        email: email
    }, refreshSecretkey, {
        expiresIn: "10d",//d=day,m=min,h=hour
        algorithm: "HS256",
        issuer: "jwt-example"
    })
    refreshTokens.push(refreshToken);
    res.json({
        succes: true,
        message: "login successfull",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});

app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            succes: false,
            message: "Refreshtoken is missing or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecretkey,
            {
                algorithms: ["HS256"],
                issuer: "jwt-example"
            });
        const NewAccessToken = jwt.sign({
            userId: decoded.userId,
            email: decoded.email,
            role: "member"
        }, secretkey,
            {
                expiresIn: "15m",
                algorithm: "HS256",
                issuer: "jwt-example"
            });
        res.json({
            success: true,
            accessToken: NewAccessToken
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Refresh token verification failed"
        });
    }
});
app.get("/me", authenticateAccessToken, function (req, res) {
    res.json({
        succes: true,
        message: "Protected user route",
        user: req.user
    })
})
app.listen(4000, function () {
    console.log("JWT protected route server running at http://localhost:4000");
});


//curl -X POST http://localhost:4000/login -H "Content-Type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"password@123\"}"
//curl -X POST http://localhost:4000/refresh -H "Content-Type:application/json" -d "{\"refreshToken\":
// curl http://localhost:4000/me -H "Authorixation:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTE0Mjg1LCJleHAiOjE3NzUxMTUxODUsImlzcyI6Imp3dC1leGFtcGxlIn0.pwRGzidNYqum3UZ5JYXfsYOf6JMjSLJmHOqvHRiwXG8"