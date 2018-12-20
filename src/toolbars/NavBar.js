import React from 'react';

// Components
import IconButton from '../components/IconButton';
import { Text } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Styles
import styles from '../styles/styles';

/*
  Props

  title: 'string'
  leftIcon & rightIcon: 'IconButton Node'
  backgroundColor & colo: 'string'

*/

const NavBar = ({title, leftIcon, rightIcon, backgroundColor, color, children, darkMode}) => {
  return(
    <Flex
      direction='row'
      justify='center'
      align='center'
      style={{
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        paddingTop: leftIcon || rightIcon ? 4 : 16,
        paddingBottom: leftIcon || rightIcon ? 4 : 16,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        backgroundColor: backgroundColor? (backgroundColor) : (darkMode? 'grey' : null),
        height: 56
      }}
    >
      {
        leftIcon? (
          <Flex
            style={{
              flexGrow: 1
            }}
            direction='row'
            justify='flex-start'
          >
            {leftIcon}
          </Flex>
        ) : null
      }
      {
        title?
        (
          <Flex
            justify='center'
            align='center'
            style={{
              position: 'absolute'
            }}
          >
            <Text
              style={[
                styles.h6,
                {
                  color: darkMode? 'white' : 'black'
                }
              ]}
            >
              {title}
            </Text>
          </Flex>
        ) : null
      }
      {
        children
      }
      {
        rightIcon? (
          <Flex
            style={{
              flexGrow: 1
            }}
            direction='row'
            justify='flex-end'
          >
            {rightIcon}
          </Flex>
        ) : null
      }
    </Flex>
  )
}

export default NavBar;
