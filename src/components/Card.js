import React from 'react';

// Components
import { Image, Text, TouchableOpacity } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Styles
import styles from '../styles/styles';

// Modules
import { WhiteSpace } from '../modules/AntDesign';

const Card = ({onPress, image, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Flex
        direction='row'
        flex={1}
        style={{
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16
        }}
        justify='space-between'
      >
        <Flex
          flex={1}
        >
          <Text
            style={styles.subtitle1}
          >
            Grand Release!
          </Text>
          <WhiteSpace />
          <Text
            style={styles.body2}
          >
            Join us in our greatest adventure
          </Text>
        </Flex>
        <Image
          style={{
            height: 80,
            width:80
          }}
          source={image}
        />
      </Flex>
    </TouchableOpacity>
  )
}

export default Card
