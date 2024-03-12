import axios from 'axios'

axios.interceptors.request.use(
    config => {
        /*
    var token = localStorage.getItem('token')
    if (token && config.url != "/oauth/token" && config.url.indexOf(process.env.REACT_APP_S3_DOWNLOAD_BUCKET) < 0) {
      let tokenObj = JSON.parse(token);
      config.headers['Authorization'] = `Bearer ${tokenObj.access_token}`;
    }
    */
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

axios.interceptors.response.use(
    response => {
        return response.status == 200 ? response.data : response
        //return response.data ? response.data : response;
    },
    async error => {
        const originalRequest = error.config

        //console.log("interceptors.response.err" , error , error.code);

        if (error.code == 'ERR_CANCELED') {
            // axios cancel
            //console.log("ERR_CANCELED");
            return Promise.reject(error)
        }

        /*
    if (error.response && (error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try{


        let data = await authService.refreshToken();
        let token = data;
        //console.log("token",token);

        originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
        authService.saveToken(token);
  //        console.log("refreshToken complete" , originalRequest);
        return axios(originalRequest);

      }catch(error){
        console.log("use exception" , error);
        authService.signOut();
      }
  
    }
    */

        return Promise.reject(error)
    },
)

export default axios
