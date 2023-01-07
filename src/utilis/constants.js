export const PRODUCTS_API = (typeOfCategory) => 
`https://fakestoreapi.com/products/category/${typeOfCategory}?limit=4`;

export const ERROR_REGISTRATION_MESSAGE = 'This account is already registered on takealot-clone';
export const SUCCESS_REGISTRATION_MESSAGE = 'successful registered a user!';
export const ERROR_LOGIN_MESSAGE = 'Incorrect Email or Password. Please try again'
export const RegistrationToastObj = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    theme: "colored",
}
export const SUCCESS_LOGOUT = "Successfully logged out!";

export const errorRegistrationToastObj = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}