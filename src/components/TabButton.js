import React from 'react';

import { Image, TouchableOpacity, Text } from 'react-native';

// styles
import styles from '../styles/styles';

const TabButton = ({onPress, image, alternateImage, selected, text, back, color}) => {
  return(
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingLeft: 3,
        paddingRight: 3,
        minHeight: image && text ? 72 : 48,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: selected? '#007bc2' : 'transparent',
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

      {text?
        (
          <Text
            style={[
              styles.button,
              {
                color: selected? '#007bc2' : 'lightgrey',
                flexWrap: 'wrap',
                textAlign: 'center',
                fontSize: 10
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

export default TabButton;
