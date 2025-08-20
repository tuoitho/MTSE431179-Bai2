import db from '../models/index';
import bcrypt from 'bcryptjs';

let createNewUser = async (data) => {
    // Validate that password is provided
    if (!data.password) {
        throw new Error('Password is required');
    }
    
    let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        image: data.image,
        roleId: data.roleId,
        positionId: data.positionId
    });
    return 'Create new user succeed!';
}

let getAllUser = async () => {
    let users = await db.User.findAll({
        raw: true
    });
    return users;
}

let getUserInfoById = async (userId) => {
    let user = await db.User.findOne({
        where: { id: userId },
        raw: true
    });
    
    return user || {};
}

let updateUser = async (data) => {
    let updateData = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        image: data.image,
        roleId: data.roleId,
        positionId: data.positionId
    };

    // Only hash password if it's provided and not empty
    if (data.password && data.password.trim() !== '') {
        updateData.password = await hashUserPassword(data.password);
    }

    await db.User.update(updateData, {
        where: { id: data.id }
    });
    return 'Update user succeed!';
}

let deleteUserById = async (userId) => {
    await db.User.destroy({
        where: { id: userId }
    });
    return 'Delete user succeed!';
}

let hashUserPassword = async (password) => {
    // Validate that password is provided and is a string
    if (!password || typeof password !== 'string') {
        throw new Error('Password must be a non-empty string');
    }
    
    let hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUser: updateUser,
    deleteUserById: deleteUserById
}
