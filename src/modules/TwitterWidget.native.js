import React from 'react';

import { WebView } from 'react-native-webview';

//Twitter Widget
const TwitterWidget = props => {
  const source =`<a class="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets - Curated tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

  return (
    <WebView
      source={{html: source}}
      javaScriptEnabled={true}
    />
  )
}

export default TwitterWidget;
