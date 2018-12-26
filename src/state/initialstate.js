const initialstate = {
  // Version
  version: '0.0.1',

  // Modals
  logInModal: false,

  // UI State
  darkMode: false,
  isLoggedin: false,
  isFirstTime: true,
  passwordHidden: true,
  termsNotAccepted: true,

  // Forms State
  logInEmail: '',
  logInPassword: '',
  signUpFirstName: '',
  signUpLastName: '',
  signUpEmail: '',
  signUpPassword: '',

  // Profile Information
  profile: {
   id: 0,
   name: "Foo Bar",
   given_name: "Foo",
   family_name: "Bar",
   link: null,
   picture: null,
   gender: "male",
   locale: "english",
   size: 10,
   email: "foobar@gmail.com"
  },

  // Text
  anotherPageText: 'Another Page',
  errorPageText: 'How did you get here? ERROR',
  errorPageButton: 'Click to go to go back to home',
  logInTitle: 'ZAVER',
  logInButtonText: 'Log In',
  signUpButtonText: 'Sign Up',
  startBrowsingText: 'Skip',
  startBrowsingText: 'Start Browsing',
  productDetailTitle: 'Product Page',
  productPageButton: 'See product',
  inputEmailPlaceHolder: 'Email',
  inputPasswordPlaceHolder: 'Password',
  termsOfService: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  privacyPolicy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

  // Data
  newsFeed: [
    {
      text: 'Test',
      image: require('../images/update_post.png')
    },
    {
      text: 'Test1',
      image: require('../images/update_post.png')
    },
    {
      text: 'Test2',
      image: require('../images/update_post.png')
    },
    {
      text: 'Test3',
      image: require('../images/update_post.png')
    },
    {
      text: 'Test4',
      image: require('../images/update_post.png')
    }
  ]
}

export default initialstate;
