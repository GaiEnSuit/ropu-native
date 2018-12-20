import React from 'react';

// Modules
import { withRouter } from '../modules/Routing';

// Components
import BottomNavigationButton from '../components/BottomNavigationButton';

// Layout
import Flex from '../layout/Flex';

const BottomNavigationBar = ({location, history, button}) => {
  return (
    <Flex
      style={{
        height: 56,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
      }}
      direction='row'
    >
      {
        buttons.map((button, index)=>{
          return(
            <BottomNavigationButton
              key={index}
              selected={location.pathname.includes(button.path)}
              image={button.image}
              alternateImage={button.alternateImage}
              onPress={()=>{
                history.push(button.path)
              }}
              text={button.text}
            />
          )
        })
      }
    </Flex>
  )
}

export default withRouter(BottomNavigationBar)
