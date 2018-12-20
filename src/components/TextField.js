import React, { Component } from 'react';

import { TextInput, Text } from 'react-native';

// Styles
import styles from '../styles/styles';

// Layout
import Flex from '../layout/Flex';

class TextField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    }
  }

  render () {

    const {
      style,
      placeholder,
      leftIcon,
      rightIcon,
      type,
      helperText,
      onChange,
      onChangeText,
      ...props
    } = this.props;

    const {
      isFocused
    } = this.state;

    return(
      <Flex>
        {
          isFocused &&
          <Text
            style={[
              {
                color: 'rgba(0, 0, 0, .60)',
                position: 'absolute',
                top: -6,
                left: 14,
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: 'white'
              },
              styles.caption
            ]}
          >
            {placeholder}
          </Text>
        }
        {
          leftIcon?
          (
            <Flex
              style={{
                position: 'absolute',
                left: 0,
                top: 4,
                marginRight: 48
              }}
            >
              {leftIcon}
            </Flex>
          ) : null
        }
        <TextInput
          {...props}
          style={[
            {
              height: 56,
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: leftIcon? 48 : 12,
              paddingRight: rightIcon? 48 : 12,
              borderColor: 'rgba(0, 0, 0, .12)',
              borderWidth: 1,
              flexGrow: 1,
              borderRadius: 8
            },
            styles.subtitle1,
            style
          ]}
          secureTextEntry={type == 'password'? true : false}
          placeholder={isFocused? null : placeholder}
          placeholderTextColor='rgba(0, 0, 0, .60)'
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          onChange={onChange}
          onChangeText={onChangeText}
          onFocus={()=>{
            this.setState({
              isFocused: true
            })
          }}
          onBlur={()=>{
            this.setState({
              isFocused: false
            })
          }}
        />
        {
          helperText != null && helperText != undefined &&
          <Text
            style={[
              {
                color: 'rgba(0, 0, 0, .60)',
                paddingLeft: 12
              },
              styles.caption
            ]}
          >
            {helperText}
          </Text>
        }
        {
          rightIcon?
          (
            <Flex
              style={{
                position: 'absolute',
                right: 0,
                top: 4
              }}
              direction='row'
            >
              {rightIcon}
            </Flex>
          ) : null
        }
      </Flex>
    )
  }
}

export default TextField;
