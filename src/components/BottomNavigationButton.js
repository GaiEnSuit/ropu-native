import React from 'react';

import { TouchableOpacity, Image, Text } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Styes
import styles from '../styles/styles';

const BottomNavigationButton = ({onPress, image, alternateImage, selected, text, back, color}) => {
  return(
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 56,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selected? ('#007bc2') : ('white'),
        flex: 1
      }}
    >
      {image?
        (
          <Image
            style={{
              width: 24,
              height: 24
            }}
            source={selected? image : alternateImage}
          />
        ) : null
      }

      {text && selected?
        (
          <Text
            style={[
              styles.caption,
              {
                color: selected? 'white' : 'black',
                textAlign: 'center'
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

export default BottomNavigationButton;
