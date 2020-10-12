const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';
const CONFIRM_PASSWORD_FIELD = 'confirm_password';
const USER_NAME_FIELD = 'username';
const ERROR_EMAIL_EXIST_MESSAGE = 'Email already exists';
const ERROR_MESSAGE = 'Email or Password is invalid';
const TOKEN_EXPIRATION_TIME = '24h';
const COOKIE_EXPIRATION_TIME = 86400000;
const EMAIL_VALID_NAMES = ["com", "net", "ru", "co", "il"];

module.exports = {
    EMAIL_FIELD,
    PASSWORD_FIELD,
    CONFIRM_PASSWORD_FIELD,
    USER_NAME_FIELD,
    ERROR_EMAIL_EXIST_MESSAGE,
    ERROR_MESSAGE,
    TOKEN_EXPIRATION_TIME,
    COOKIE_EXPIRATION_TIME,
    EMAIL_VALID_NAMES
};
