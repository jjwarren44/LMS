import MUtil from 'util/mm.jsx'
import axios from "axios";

const _mm = new MUtil();

class User {

    //user login
    //Change using axois to connect to the django backend
    login(loginInfo) {
        return _mm.request({
            type: 'post',
            url: 'https://laravel-lsm.herokuapp.com/api/v1/account/login',
            data: loginInfo
        });
    }

    register(userInfo) {
        return _mm.request({
            type: 'post',
            url: 'https://laravel-lsm.herokuapp.com/api/v1/account/signup',
            data: userInfo
        });
    }

    //check if login data is valid
    checkLoginInfo(loginInfo) {
        let email = $.trim(loginInfo.account.email),
            password = $.trim(loginInfo.account.password);
        // validate username
        if (typeof email !== 'string' || email.length === 0) {
            return {
                status: false,
                msg: 'Username cannot be empty'
            }
        }
        //validate password
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: 'password cannot be empty'
            }
        }
        return {
            status: true,
            msg: 'pass validation'
        }
    }
    // logout
    //not used right now, no such a api exist
    logout() {
        return _mm.request({
            type: 'post',
            url: 'manage/account/logout'
        });
    }

    // not used right now, no such a api exist
    getUserList(pageNum) {
        return _mm.request({
            type: 'post',
            url: '/user/list',
            data: {
                pageNum: pageNum
            }
        });
    }
}

export default User;