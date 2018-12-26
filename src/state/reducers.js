import initialstate from './initialstate';

// action actiontypes
import {
  TOGGLE_LOG_IN,
  TOGGLE_LOG_IN_MODAL,
  TOGGLE_PASSWORD_HIDDEN,
  TOGGLE_TERMS_OF_SERVICE_MODAL,
  DISABLE_LOG_IN_MODAL,
  TOGGLE_SIGN_UP_MODAL,
  TOGGLE_TERMS_NOT_ACCEPTED,
  TOGGLE_PRIVACY_POLICY_MODAL,
  TOGGLE_INFORMATION_MODAL,
  TOGGLE_ABOUT_US_MODAL,
  TOGGLE_HELP_MODAL,
  TOGGLE_APP_SETTINGS_MODAL,
  TOGGLE_DARK_MODE,
  TOGGLE_FILTER_MODAL,
  UPDATE_SIGN_UP_FIRST_NAME,
  UPDATE_SIGN_UP_LAST_NAME,
  UPDATE_SIGN_UP_EMAIL,
  UPDATE_SIGN_UP_PASSWORD,
  UPDATE_LOG_IN_EMAIL,
  UPDATE_LOG_IN_PASSWORD
} from './actiontypes';

const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOGGLE_LOG_IN:
      return {...state, ...action.isLoggedIn}
    case TOGGLE_LOG_IN_MODAL:
      return {...state, ...action.logInModal}
    case TOGGLE_PASSWORD_HIDDEN:
      return {...state, ...action.passwordHidden}
    case TOGGLE_TERMS_OF_SERVICE_MODAL:
      return {...state, ...action.termsOfServiceModal}
    case DISABLE_LOG_IN_MODAL:
      return {...state, ...action.isFirstTime}
    case TOGGLE_SIGN_UP_MODAL:
      return {...state, ...action.signUpModal}
    case TOGGLE_TERMS_NOT_ACCEPTED:
      return {...state, ...action.termsNotAccepted}
    case TOGGLE_PRIVACY_POLICY_MODAL:
      return {...state, ...action.privacyPolicyModal}
    case TOGGLE_INFORMATION_MODAL:
      return {...state, ...action.informationModal}
    case TOGGLE_ABOUT_US_MODAL:
      return {...state, ...action.aboutUsModal}
    case TOGGLE_HELP_MODAL:
      return {...state, ...action.helpModal}
    case TOGGLE_APP_SETTINGS_MODAL:
      return {...state, ...action.appSettingsModal}
    case TOGGLE_DARK_MODE:
      return {...state, ...action.darkMode}
    case TOGGLE_FILTER_MODAL:
      return {...state, ...action.filterModal}
    case UPDATE_SIGN_UP_FIRST_NAME:
      return {...state, ...action.signUpFirstName}
    case UPDATE_SIGN_UP_LAST_NAME:
      return {...state, ...action.signUpLastName}
    case UPDATE_SIGN_UP_EMAIL:
      return {...state, ...action.signUpEmail}
    case UPDATE_SIGN_UP_PASSWORD:
      return {...state, ...action.signUpPassword}
    case UPDATE_LOG_IN_EMAIL:
      return {...state, ...action.logInEmail}
    case UPDATE_LOG_IN_PASSWORD:
      return{...state, ...action.logInPassword}
    default:
      return state
  }
};

export default rootReducer;
