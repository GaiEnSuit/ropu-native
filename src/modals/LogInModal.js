import React from 'react';

// Components
import { SafeAreaView, Image, Text } from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import IconButton from '../components/IconButton';

// Modules
import { Modal } from '../modules/Modal';
import { StatusBar }  from '../modules/StatusBar';
import { WingBlank, WhiteSpace } from '../modules/AntDesign';

// Layout
import Divider from '../layout/Divider';
import Flex from '../layout/Flex';

// State
import { connect } from 'react-redux';
import { toggleLogInModal } from '../state/actions';
import { Mutation } from 'react-apollo';
import { CUSTOMER_ACCESS_TOKEN_CREATE } from '../state/queries';

// Styles
import styles from '../styles/styles';

// Images
import ropu_black from '../images/ropu_black.png';
import facebook from '../images/facebook.png';
import google from '../images/google.png';

const mapStateToProps = state => {
  return{
    logInModal: state.logInModal,
    logInButtonText: state.logInButtonText,
    inputEmailPlaceHolder: state.inputEmailPlaceHolder,
    inputPasswordPlaceHolder: state.inputPasswordPlaceHolder,
    signUpButtonText: state.signUpButtonText,
    logInEmail: state.logInEmail,
    logInPassword: state.logInPassword
  }
}

const mapDispatchToProps = dispatch => {
  return({
    toggleLogInModal: (logInModal) => dispatch(toggleLogInModal(logInModal)),
    toggleLogIn: isLoggedIn => dispatch(toggleLogIn(isLoggedIn)),
    toggleSignUpModal: signUpModal => dispatch(toggleSignUpModal(signUpModal)),
    updateLogInEmail: logInEmail => dispatch(updateLogInEmail(logInEmail)),
    updateLogInPassword: logInPassword => dispatch(updateLogInPassword(logInPassword))
  })
}

const LogInModal = props => {
  return(
    <Modal
      visible={props.logInModal}
      style={{
        marginTop: StatusBar.currentHeight
      }}
      onRequestClose={()=>{
        let logInModal = false;
        props.toggleLogInModal({logInModal});
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <Image
          style={{
            height: 100,
            width: undefined
          }}
          source={ropu_black}
          resizeMode='contain'
        />
        <WingBlank>
          <WhiteSpace />
          <TextField
            type='email'
            placeholder={props.inputEmailPlaceHolder}
            onChangeText={(text)=>{
              let logInEmail = text
              props.updateLogInEmail({logInEmail})
            }}
          />
          <WhiteSpace />
          <TextField
            type='password'
            placeholder={props.inputPasswordPlaceHolder}
            onChangeText={(text)=>{
              let logInPassword = text
              props.updateLogInPassword({logInPassword})
            }}
          />
          <WhiteSpace />
          <Mutation
            mutation={CUSTOMER_ACCESS_TOKEN_CREATE}
            variables={
              {
                "input": {
                  "email": props.logInEmail,
                  "password": props.logInPassword
                }
              }
            }
            onError={(error)=>{console.log(error)}}
            onCompleted={(data)=>{
              console.log(data)
              if (data.customerAccessTokenCreate.customerAccessToken == null){
                return
              } else {
                let logInModal = false
                props.toggleLogInModal({logInModal})
              }
            }}
          >
            {(mutate)=>{
              return(
                <Button
                  type='outlined'
                  color='black'
                  onPress={()=>{
                    mutate()
                  }}
                  title={props.logInButtonText}
                />
              )
            }}
          </Mutation>
          <WhiteSpace />
          <Flex
            justify='center'
            align='center'
          >
            <Text
              style={styles.body1}
            >
              or
            </Text>
           </Flex>
          <WhiteSpace />
          <Button
            type='outlined'
            color='black'
            onPress={()=>{
              let signUpModal = true
              props.toggleSignUpModal({signUpModal})
            }}
            title={props.signUpButtonText}
          />
          <WhiteSpace />
          <Flex
            direction='row'
            justify='space-around'
          >
            <Flex
              flex={1}
            >
              <Button
                color='#4267b2'
                icon={facebook}
                title='Facebook'
              />
            </Flex>
            <Flex
              flex={.05}
            />
            <Flex
              flex={1}
            >
              <Button
                type='outlined'
                color='black'
                icon={google}
                title='Google'
              />
            </Flex>
          </Flex>
          <WhiteSpace />
        </WingBlank>
        <Divider />
        <WhiteSpace />
        <WingBlank>
          <Button
            type='text'
            color='red'
            title='continue as guest'
            onPress={()=>{
              let logInModal = false
              props.toggleLogInModal({logInModal})
            }}
          />
        </WingBlank>
      </SafeAreaView>
    </Modal>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInModal);
