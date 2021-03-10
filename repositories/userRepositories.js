const userModel = require('../model/userModel')

const regiterUser = async(payload)=>{
    const { name, status, role } = payload
    const data = {
        name,
        status,
        role
    }
    if (role == 1) {
        data.role = 'user'
    }else if (role == 2) {
        data.role = 'petugas'
    }else{
        data.role = 'admin'
    }
    const result = await userModel.create(data)
    return result
}

const getUser = async(payload)=>{
    const result = await userModel.find(payload)
    return result
}

const getUserById = async(payload)=>{
    const result = await userModel.findById(payload.id)
    return result
}

const deleteUser = async(payload)=>{
    const result = await userModel.deleteOne({_id: payload.id})
    return result
}

const updateUser = async(payload)=>{
    const { id, name, status, role} = payload
    const data ={
        name,
        status,
        role
    }
    if (role == 1) {
        data.role = 'user'
    }else if (role == 2) {
        data.role = 'petugas'
    }else{
        data.role = 'admin'
    }
    const result = await userModel.updateOne({_id: id}, data)
    return result
}

module.exports = {
    regiterUser,
    getUser,
    getUserById,
    deleteUser,
    updateUser
}