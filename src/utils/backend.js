/* eslint-disable camelcase */

import axios from 'axios';
import store from '../redux/store';
import { config } from '../config';

const GET = 'get';
const POST = 'post';
const PUT = 'put';

class Backend {
    constructor() {
        this.instance = axios.create({
            baseURL: config.api.rootUrl,
            timeout: 15000
        });
        this.request = this.request.bind(this);
    }

    request(options) {
        const { instance } = this;
        instance.defaults.headers.common['Authorization'] = store.getState().auth.token;
        instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
        return new Promise((resolve, reject) => {
            instance[options.method](options.path, options.body).then((response) => {
                const { data } = response;
                if(response.status === 200) return resolve(data.data);
                return reject(data.message);
            }).catch((error) => {
                console.log('request error: ', error);
                return reject(error);
            });
        });
    }

    authenticate() {
        const { authToken } = store.getState().user;
        return axios.post(config.api.rootUrl, {
            token: authToken
        });
    }

    signIn(body) {
        const { request } = this;

        let params = {
            email: body.email,
            password: body.password,
            alias: body.alias,
        };

        let formBody = [];
        for (let property in params) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        return request({
            method: POST,
            path: config.api.rootUrl + '/v1/login',
            body: formBody,
        });
    }
}

export default new Backend();
