import axios from 'axios';
import env from '../../config/dev.env';
import Mint from 'mint-ui';
import qs from 'qs';
// const ajaxUrl = env === 'development' ?
//     location.protocol+'//192.168.3.33:8082/' :
//     env === 'production' ?
//     location.protocol+'//ronghuiyijie.com/api' :
//     'https://debug.url.com';
const ajaxUrl = process.env.API_ROOT
// var instance = axios.create({
//     headers:{'token': localStorage.getItem("token")},
//     baseURL: ajaxUrl,
//     timeout: 30000,
    // withCredentials:true,
    //headers: {'content-type': 'application/x-www-form-urlencoded'},
    // headers: {'content-type': 'application/json'}
// });

const get = (url, query, loading = true) => {

    if(localStorage.getItem("token")){
        var instance = axios.create({
            headers:{'token': localStorage.getItem("token")},
            baseURL: ajaxUrl,
            timeout: 30000,
            // withCredentials:true,
            //headers: {'content-type': 'application/x-www-form-urlencoded'},
            // headers: {'content-type': 'application/json'}
        });
    }else{
        var instance = axios.create({
            baseURL: ajaxUrl,
            timeout: 30000,
            // withCredentials:true,
            //headers: {'content-type': 'application/x-www-form-urlencoded'},
            // headers: {'content-type': 'application/json'}
        });
    }


    let queryAry = [];
    for (let key in query) {
        queryAry.push(key + '=' + query[key]);
    }
    let isIndexOfWen = url.indexOf('?') > -1;
    if (!isIndexOfWen && queryAry.length > 0) {
        url = url + '?' + queryAry.join('&');
    } else if (isIndexOfWen && queryAry.length > 0) {
        url = url + '&' + queryAry.join('&');
    }
    return new Promise((resolve, reject) => {
        axios.defaults.headers.token = localStorage.getItem('token');
        if (loading) {
            Mint.Indicator.open({
                text: '数据加载中...',
                spinnerType: 'fading-circle'
            });
        }
        return instance.get(url)
            .then((res) => {
                Mint.Indicator.close();
                if (res.status === 200 && res.data.code === 0) {
                    resolve(res.data);
                }else if (res.status === 200 && res.data.code === 201) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //     title: '系统错误',
                    //     content: '信息获取失败，您没有权限，请重新登录',
                    //     onOk: () => {
                    //         Cookies.set('user', '');
                    //         location.hash = '#/login';
                    //         Indicator.Modal.remove();
                    //     }
                    // });
                    // MessageBox({
                    //     title: '系统错误',
                    //     message: '信息获取失败，您没有权限，请重新登录?',
                    //     showCancelButton: true
                    // });
                }else if (res.status === 200 && res.data.code === 101) {
                    Mint.Toast(res.data.errMsg);
                }
                else {
                    Mint.Toast(res.data.errMsg || '信息获取失败，请稍后重试');
                    reject(res);
                }
            })
            .catch((err) => {
                if (!err.response) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //     title: '系统错误',
                    //     content: '信息获取失败，请重新登录',
                    //     onOk: () => {
                    //         Cookies.set('user', '');
                    //         location.hash = '#/login';
                    //         Indicator.Modal.remove();
                    //     }
                    // });
                    return ;
                }
                if (err.response.status===500) {
                    Mint.Toast('服务端错误，请联系管理员')
                }else if (err.response.status===400) {
                    Mint.Toast('参数错误,请检查是否有没有填写的信息')
                }else if (err.response.status===404) {
                    Mint.Toast('未找到资源,请刷新');
                }
                reject(err);
            })
    })
}

const post = (url, body, headerJson, params, loading = true) => {


    if(localStorage.getItem("token")){
        var instance = axios.create({
            headers:{'token': localStorage.getItem("token")},
            baseURL: ajaxUrl,
            timeout: 30000,
            // withCredentials:true,
            //headers: {'content-type': 'application/x-www-form-urlencoded'},
            // headers: {'content-type': 'application/json'}
        });
    }else{
        var instance = axios.create({
            baseURL: ajaxUrl,
            timeout: 30000,
            // withCredentials:true,
            //headers: {'content-type': 'application/x-www-form-urlencoded'},
            // headers: {'content-type': 'application/json'}
        });
    }


    

    return new Promise((resolve, reject) => {
        // if (loading) {
        //     Mint.Indicator.open({
        //         text: '数据加载中...',
        //     });
        // }
        if(headerJson){
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.defaults.headers.token = localStorage.getItem('token');
        }else{
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios.defaults.headers.token = localStorage.getItem('token');
        }
        return instance.post(url, body, headerJson, qs.stringify(params))
            .then((res) => {
                Mint.Indicator.close();
                if (res.status === 200 && res.data.code === 0) {
                    resolve(res.data);
                }else if (res.status === 200 && res.data.code === 201) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //     title: '系统错误',
                    //     content: '信息获取失败，您没有权限，请重新登录',
                    //     onOk: () => {
                    //         Cookies.set('user', '');
                    //         location.hash = '#/login';
                    //         Indicator.Modal.remove();
                    //     }
                    // });
                }else if (res.status === 200 && res.code === 101) {
                    Mint.Toast(res.errMsg)
                }
                else {
                    Mint.Toast(res.data.errMsg || '信息获取失败，请稍后重试');
                    reject(res);
                }
            })
            .catch((err) => {
                if (!err.response) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //         title: '系统错误',
                    //         content: '信息获取失败，请重新登录',
                    //         onOk: () => {
                    //             Cookies.set('user', '');
                    //             location.hash = '#/login';
                    //             Indicator.Modal.remove();
                    //         }
                    // });
                    return ;
                }
                if (err.response.status===500) {
                    Mint.Toast('服务端错误，请联系管理员')
                }else if (err.response.status==400) {
                    Mint.Toast('参数错误,请检查是否有没有填写的信息')
                }else if (err.response.status===404) {
                    Mint.Toast('未找到资源')
                }
                reject(err);
            })
    })
}

const deletes = (url, query, loading = true) => {
    let queryAry = [];
    for (let key in query) {
        queryAry.push(key + '=' + query[key]);
    }
    let isIndexOfWen = url.indexOf('?') > -1;
    if (!isIndexOfWen && queryAry.length > 0) {
        url = url + '?' + queryAry.join('&');
    } else if (isIndexOfWen && queryAry.length > 0) {
        url = url + '&' + queryAry.join('&');
    }
    console.log(url);
    return new Promise((resolve, reject) => {
        if (loading) {
            Mint.Indicator.open({
                text: '数据加载中...',
            });
        }
        return instance.delete(url)
            .then((res) => {
                Mint.Indicator.close();
                if (res.status === 200 && res.data.code === 0) {
                    resolve(res.data);
                }else if (res.status === 200 && res.data.code === 201) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //     title: '系统错误',
                    //     content: '信息获取失败，您没有权限，请重新登录',
                    //     onOk: () => {
                    //         Cookies.set('user', '');
                    //         location.hash = '#/login';
                    //         Indicator.Modal.remove();
                    //     }
                    // });
                }else if (res.status === 200 && res.code === 101) {
                    Mint.Toast(res.errMsg)
                }
                else {
                    Mint.Toast(res.data.errMsg || '信息获取失败，请稍后重试');
                    reject(res);
                }
            })
            .catch((err) => {
                if (!err.response) {
                    Mint.Indicator.close();
                    // Indicator.Modal.error({
                    //     title: '系统错误',
                    //     content: '信息获取失败，请重新登录',
                    //     onOk: () => {
                    //         Cookies.set('user', '');
                    //         location.hash = '#/login';
                    //         Indicator.Modal.remove();
                    //     }
                    // });
                    return ;
                }
                if (err.response.status===500) {
                    Mint.Toast('服务端错误，请联系管理员')
                }else if (err.response.status===400) {
                    Mint.Toast('参数错误,请检查是否有没有填写的信息')
                }else if (err.response.status===404) {
                    Mint.Toast('未找到资源')
                }
                reject(err);
            })
    })
}

export default {
    get,
    deletes,
    post
};