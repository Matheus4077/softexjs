import {users} from "../models/user.js";

export function getAllUsers(req,res) {
    res.json(users)
};

export function getAllUsersById(req,res){
    const findUser = users.find((user) => user.id == req.params.id);
    if(!findUser) return res.send("User not found");
    res.send(findUser);
}