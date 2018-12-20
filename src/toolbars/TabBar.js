import React from 'react';

// Modules
import { withRouter } from '../modules/Routing';

// styles
import styles from '../styles/styles';

// Layout
import Flex from '../layout/Flex';

// Components
import TabButton from '../components/TabButton';

const TabBar = ({tabs, history, location}) => {
  return (
    <Flex
      direction='row'
      justify='space-around'
    >
      {
        tabs.map((tab, index)=>{
          return(
            <TabButton
              key={index}
              onPress={()=>{
                history.push(tab.link)
              }}
              text={tab.text}
              selected={location.pathname.includes(tab.link)}
            />
          )
        })
      }
    </Flex>
  )
}

export default withRouter(TabBar);
