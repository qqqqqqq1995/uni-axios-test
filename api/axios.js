import axios from 'uni-axios';

// 最先执行的拦截器， 可以多个
// 注意这里的config是你传输过来的config
axios.interceptors.first.use(function (config){
	const showLoading = config.showLoading;
	if(showLoading){
		uni.showLoading({
			title: config.showLoading === true ? '加载中...' : showLoading,
			mask: true
		})
	}
	return config;
})
// 注意这里的config是你传输过来的config
axios.interceptors.last.use(function (config){
	if(config.showLoading){
		uni.hideLoading();
	}
})

// 这里的config是axios合并过的config，可能会丢失自定义的配置
axios.interceptors.request.use(function (config){
	return config;
})
//
axios.interceptors.response.use(function (response){
	if(response.data.code === 200){
		return response.data
	} else {
		uni.showToast({
			title: response.data.errMsg,
			icon: 'none'
		})
		return Promise.reject(response.data)
	}
}, function (err){
	return Promise.reject(err);
})
export default axios;