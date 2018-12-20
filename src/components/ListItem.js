import React from 'react';

// Components
import { TouchableOpacity, Text, Image } from 'react-native';

// Styles
import styles from '../styles/styles';

const ListItem = ({text, image, ...props}) => {
  return(
    <TouchableOpacity
      style={{
        height: 72,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
    >
      {
        image?
        (
          <Image
            source={image}
            resizeMode='contain'
            style={{
              width: 56,
              height: 56
            }}
          />
        ) : null
      }
      <Text
        style={[
          styles.subtitle1,
          {
            marginLeft: 16
          }
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default ListItem;
