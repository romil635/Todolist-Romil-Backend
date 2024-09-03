const express = require('express')
const profileRoutes = express.Router()
const {
    showProfilePage,
    profilePage,
    editProfile,
    updateProfile,
    deleteProfile
} = require("../controller/profile.controller")


profileRoutes.get("/", showProfilePage)
profileRoutes.post("/", profilePage)

profileRoutes.get("/:id/edit", editProfile)
profileRoutes.post("/:id/edit", updateProfile)
profileRoutes.post("/:id", deleteProfile)

module.exports = profileRoutes