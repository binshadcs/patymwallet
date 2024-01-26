const zod = require('zod');

const userSignupSchema = zod.object({
    username : zod.string(),
    firstname : zod.string(),
    lastname : zod.string(),
    password : zod.string()
})

const userSigninSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})

const userUpdateSchema = zod.object({
    firstname : zod.string(),
    lastname : zod.string(),
    password : zod.string()
})

module.exports = {userSignupSchema, userSigninSchema, userUpdateSchema}