import React from 'react';

// Components
import { TouchableOpacity, Text, Image } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Style
import styles from '../styles/styles';

const FAB = ({image, text, mini, color, bottom, left, right, top, onPress, position}) => {
  return(
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: position? position : 'absolute',
        bottom: bottom? bottom : null,
        right: right? right : null,
        left: left? left : null,
        top: top? top : null,
        height: mini? 40 : (text? 48 : 56),
        backgroundColor: color? color : '#007bc2',
        borderRadius: 28,
        width: text? null : (mini? 40 : 56 ),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        image? (
          <Flex
            style={{
              padding: mini? 8 : 16
            }}
          >
            <Image
              source={image}
              style={{
                width: 24,
                height: 24
              }}
            />
          </Flex>
        ): null
      }
      {
        text && !mini? (
          <Text
            style={[
              styles.button,
              {
                color: 'white',
                paddingRight: 20
              }
            ]}
          >
            {text}
          </Text>
        ) : null
      }
    </TouchableOpacity>
  )
}

export default FAB;
