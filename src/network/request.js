import axios from 'axios'

export function request(config, success, failure){
    return new Promise((resolve, reject) => {
        //1、创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2、axios网络拦截
    //2.1、请求拦截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);
        //1、比如config中的一些信息不符合服务器的要求
        //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3、某吸血网络请求（比如登录（token）），必须携带一些特殊的信息
        return config
    },err => {
        console.log(err);
    })

    //2.2、响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data;
    }, err => {
        console.log(err);
    })

    //3、真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        resolve(err)
      })
    })
    return instance(config)
}
