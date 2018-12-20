import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

// Components
import { Image } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Styles
import styles from '../styles/styles';

/*

  PROPS

  type: 'outlined', 'text', 'contained'(default)

  icon: path to image (only for contained)

  color: color (sets backgroundColor for contained, sets text color for text or outlined)

  title: set button text

*/

const Button = ({ onPress, type, color, title, size, icon, disabled }) => {

    switch (type) {
      case 'text':
      return(
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          style={{
            minWidth: 64,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: 'transparent',
            height: 36,
            borderRadius: 8
          }}
        >
          <Flex
            flex={1}
            justify='center'
            align='center'
            direction='row'
          >
            <Text
              style={[
                styles.button,
                {
                  color: color || disabled ? color : '#007bc2'
                }
              ]}
            >
             {title? title.toUpperCase() : title}
            </Text>
          </Flex>
        </TouchableOpacity>
      )
      case 'outlined':
        return(
          <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={{
              minWidth: 64,
              paddingLeft: icon? 12: 16,
              paddingRight: 16,
              backgroundColor: 'transparent',
              height: 36,
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              borderTopColor: 'lightgrey',
              borderTopWidth: 1,
              borderLeftColor: 'lightgrey',
              borderLeftWidth: 1,
              borderRightColor: 'lightgrey',
              borderRightWidth: 1,
              borderRadius: 8
            }}
          >
            <Flex
              flex={1}
              justify='center'
              align='center'
              direction='row'
            >
              {
                icon?
                (
                  <Image
                    style={{
                      width: 18,
                      height: 18
                    }}
                    source={icon}
                  />
                ): null
              }
              {
                title?
                (
                  <Text
                    style={[
                      styles.button,
                      {
                        color: color || disabled? color : 'black',
                        paddingLeft: icon? 8 : 0
                      }
                    ]}
                  >
                   {title.toUpperCase()}
                  </Text>
                ) : null
              }
            </Flex>
          </TouchableOpacity>
        )
      default:
        return(
          <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={{
              minWidth: 64,
              paddingLeft: icon? 12: 16,
              paddingRight: 16,
              backgroundColor: disabled? ('grey') : (color? color : '#007bc2'),
              height: 36,
              borderRadius: 8
            }}
          >
            <Flex
              flex={1}
              justify='center'
              align='center'
              direction='row'
            >
              {
                icon?
                (
                  <Image
                    style={{
                      width: 18,
                      height: 18
                    }}
                    source={icon}
                  />
                ): null
              }
              {
                title? (
                  <Text
                    style={[
                      styles.button,
                      {
                        color: color == 'white'? 'black' : 'white',
                        paddingLeft: icon? 8 : 0,
                      }
                    ]}
                  >
                   {title? title.toUpperCase() : title}
                  </Text>
                ): null
              }
            </Flex>
          </TouchableOpacity>
        )
    }
};

export default Button;
