import React from 'react';

import { ActivityIndicator } from 'react-native';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//Twitter Widget
const TwitterWidget = (props) => {
  if(navigator.onLine) {
    return(
      <TwitterTimelineEmbed
        sourceType="collection"
        id="1010648304001081344"
        options={{
          chrome: "noheader nofooter",
          width: '600px',
          height: '70vh'
        }}
      />
    )
  } else {
    return(
      <ActivityIndicator
        style={{padding: '24px'}}
        color="red"
        size='large'
      />
    )
  }
}

export default TwitterWidget;
