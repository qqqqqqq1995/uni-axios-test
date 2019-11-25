import axios from './axios.js'

export const get200 = () => axios.get("https://www.fastmock.site/mock/848517155615356f2cbfc0d935619ba9/axios/get200", {showLoading: true})

export const post200 = () => axios.post("https://www.fastmock.site/mock/848517155615356f2cbfc0d935619ba9/axios/post200", {name: "zhangsan"}, {showLoading: true})