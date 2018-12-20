import React from 'react';

import { View } from 'react-native';

const Flex = (props) => {
  return(
    <View
      style={[
        {
          flex: props.flex? props.flex : 0,
          flexDirection: props.direction? props.direction : 'column',
          justifyContent: props.justify? props.justify : 'flex-start',
          alignItems: props.align? props.align : 'stretch',
          alignContent: props.alignContent? props.lignContent : 'stretch',
          flexWrap: props.wrap? 'wrap' : 'nowrap'
        },
        props.style
      ]}
    >
      {props.children}
    </View>
  )
}

export default Flex;
