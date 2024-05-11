const BASE_URL=process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1/auth'
const PROFILE_URL='http://localhost:4000/api/v1/profile'
console.log(BASE_URL)
export const auth={
    SIGNUP_API:BASE_URL+'/signup',
    SENDOTP_API:BASE_URL+'/getotp',
    LOGIN_API:BASE_URL+'/login'
}
export const profile={
    GETENROLLEDCOURSES_API:PROFILE_URL+'/dashboard/getenrolledcourses'
}