import React from 'react';

// Components
import { FlatList } from 'react-native';

// Layout
import Flex from '../layout/Flex';

// Toolbars
import NavBar from '../toolbars/NavBar';

const CharacterSelectionPage = props => {
  return (
    <Flex
      flex={1}
    >
      <NavBar
        title='Select Your Character'
      />
      <FlatList
        data={props.characterList}
        keyExtractor={item => item.text}
        ItemSeparatorComponent={()=><Divider />}
        renderItem={({item})=>(
          <Card
            text={item.text}
            image={item.image}
          />
        )}
      />
    </Flex>
  )
}

export default CharacterSelectionPage;
