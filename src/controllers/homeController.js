import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await CRUDService.getAllUser();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    try {
        let message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.redirect('/get-crud');
    } catch (e) {
        console.log(e);
        return res.status(500).send('Error creating user: ' + e.message);
    }
}

let displayGetCRUD = async (req, res) => {
    try {
        let data = await CRUDService.getAllUser();
        return res.render('displayCRUD.ejs', {
            dataTable: data
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send('Error retrieving users: ' + e.message);
    }
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        try {
            let userData = await CRUDService.getUserInfoById(userId);
            return res.render('editCRUD.ejs', {
                user: userData
            });
        } catch (e) {
            console.log(e);
            return res.status(500).send('Error retrieving user: ' + e.message);
        }
    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    try {
        let data = req.body;
        let allUsers = await CRUDService.updateUser(data);
        return res.redirect('/get-crud');
    } catch (e) {
        console.log(e);
        return res.status(500).send('Error updating user: ' + e.message);
    }
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        try {
            await CRUDService.deleteUserById(id);
            return res.redirect('/get-crud');
        } catch (e) {
            console.log(e);
            return res.status(500).send('Error deleting user: ' + e.message);
        }
    } else {
        return res.send('User not found!');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}
