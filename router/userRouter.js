const userRepositories = require('../repositories/userRepositories')
const { Router } = require('express')
const router = Router()

router.post('/register', async(req,res)=>{
    const payload = req.body
    const result = await userRepositories.regiterUser(payload)
    res.send(result)
})

router.get('/', async(req,res)=>{
    const payload = req.query
    const result = await userRepositories.getUser(payload)
    res.send(result)
})

router.get('/:id', async(req,res)=>{
    const payload = req.params
    const result = await userRepositories.getUserById(payload)
    res.send(result)
})

router.delete('/delete-user/:id', async(req,res)=>{
    const payload = req.params
    const result = await userRepositories.deleteUser(payload)
    res.send(result)
})

router.put('/update-user/:id', async(req,res)=>{
    const payload = req.body
    payload.id = req.params.id
    const result = await userRepositories.updateUser(payload)
    res.send(result)
})

module.exports = router
