const express = require("express");
const router = express.Router();

const users = [
    { id: 1, name: "User 1", email: "user1@gmail.com" },
    { id: 2, name: "User 2", email: "user2@gmail.com" },
    { id: 3, name: "User 3", email: "user3@gmail.com" },
    { id: 4, name: "User 4", email: "user4@gmail.com" }
];

router.get("/users", (req, res) => {
    return res.json({
        status: false,
        message: "Users list",
        users
    })
});

router.get("/user/:id", (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
    if(user){
        return res.json({
            status: true,
            message: "User found",
            user
        });
    }
    return res.json({
        status: false,
        message: "User not found"
    });
});

router.post("/user/add", (req, res) => {
    const { name, email } = req.body;
    const lastUserID = users.at(-1)?.id;
    if(name=="" || email==""){
        return res.json({
            status: false,
            message: "name and email values are required"
        });
    }

    users.push({
        id: lastUserID + 1,
        name,
        email
    })

    return res.json({
        status: true,
        message: "Successfully, user created",
        users
    });
});

module.exports = router;