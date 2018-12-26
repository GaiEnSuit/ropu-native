import {
          TOGGLE_LOG_IN,
          TOGGLE_LOG_IN_MODAL,
          TOGGLE_PASSWORD_HIDDEN,
          TOGGLE_TERMS_OF_SERVICE_MODAL,
          TOGGLE_PRIVACY_POLICY_MODAL,
          DISABLE_LOG_IN_MODAL,
          TOGGLE_SIGN_UP_MODAL,
          TOGGLE_TERMS_NOT_ACCEPTED,
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

export const toggleFilterModal = filterModal => ({
  type: TOGGLE_FILTER_MODAL,
  filterModal: filterModal
})

export const toggleLogIn = isLoggedIn => ({
  type: TOGGLE_LOG_IN,
  isLoggedIn: isLoggedIn
})

export const toggleLogInModal = (logInModal) => ({
  type: TOGGLE_LOG_IN_MODAL,
  logInModal: logInModal
})

export const togglePasswordHidden = (passwordHidden) => ({
  type: TOGGLE_PASSWORD_HIDDEN,
  passwordHidden: passwordHidden
})

export const toggleTermsOfServiceModal = (termsOfServiceModal) => ({
  type: TOGGLE_TERMS_OF_SERVICE_MODAL,
  termsOfServiceModal: termsOfServiceModal
})

export const disableLogInModal = (isFirstTime) => ({
  type: DISABLE_LOG_IN_MODAL,
  isFirstTime: isFirstTime
})

export const toggleSignUpModal = (signUpModal) => ({
  type: TOGGLE_SIGN_UP_MODAL,
  signUpModal: signUpModal
})

export const toggleTermsNotAccepted = (termsNotAccepted) => ({
  type: TOGGLE_TERMS_NOT_ACCEPTED,
  termsNotAccepted: termsNotAccepted
})

export const togglePrivacyPolicyModal = (privacyPolicyModal) => ({
  type: TOGGLE_PRIVACY_POLICY_MODAL,
  privacyPolicyModal: privacyPolicyModal
})

export const toggleInformationModal = (informationModal) => ({
  type: TOGGLE_INFORMATION_MODAL,
  informationModal: informationModal
})

export const toggleAboutUsModal = (aboutUsModal) => ({
  type: TOGGLE_ABOUT_US_MODAL,
  aboutUsModal: aboutUsModal
})

export const toggleHelpModal = (helpModal) => ({
  type: TOGGLE_HELP_MODAL,
  helpModal: helpModal
})

export const toggleAppSettingsModal = (appSettingsModal) => ({
  type: TOGGLE_APP_SETTINGS_MODAL,
  appSettingsModal: appSettingsModal
})

export const toggleDarkMode = (darkMode) => ({
  type: TOGGLE_DARK_MODE,
  darkMode: darkMode
})

export const updateSignUpFirstName = (signUpFirstName) => ({
  type: UPDATE_SIGN_UP_FIRST_NAME,
  signUpFirstName: signUpFirstName
})

export const updateSignUpLastName = (signUpLastName) => ({
  type: UPDATE_SIGN_UP_LAST_NAME,
  signUpLastName: signUpLastName
})

export const updateSignUpEmail = (signUpEmail) => ({
  type: UPDATE_SIGN_UP_EMAIL,
  signUpEmail: signUpEmail
})

export const updateSignUpPassword = (signUpPassword) => ({
  type: UPDATE_SIGN_UP_PASSWORD,
  signUpPassword: signUpPassword
})

export const updateLogInEmail = (logInEmail) => ({
  type: UPDATE_LOG_IN_EMAIL,
  logInEmail: logInEmail
})

export const updateLogInPassword = (logInPassword) => ({
  type: UPDATE_LOG_IN_PASSWORD,
  logInPassword: logInPassword
})
