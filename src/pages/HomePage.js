import React from 'react';

// Layout
import Flex from '../layout/Flex';
import Divider from '../layout/Divider';

// Components
import { FlatList } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

// Images
import sword_01b from '../images/sword_01b.png';
import book_05f from '../images/book_05f.png';
import potion_03g from '../images/potion_03g.png';
import book_05g from '../images/book_05g.png';
import coin_05d from '../images/coin_05d.png';

// Toolbars
import NavBar from '../toolbars/NavBar';

// Modules
import { WhiteSpace, WingBlank } from '../modules/AntDesign';
import { withRouter } from '../modules/Routing';

// State
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return{
    newsFeed: state.newsFeed
  }
}

const HomePage = props => {
  return(
    <Flex
      flex={1}
    >

      <WingBlank>
        <WhiteSpace />
        <Button
          type='outlined'
          title='Player'
          icon={sword_01b}
          onPress={()=>{
            props.history.push('/player/characterlist')
          }}
        />
        <WhiteSpace />
        <Button
          type='outlined'
          title='Game Master'
          icon={book_05f}
        />
        <WhiteSpace />
        <Button
          type='outlined'
          title='Home Brew'
          icon={potion_03g}
        />
        <WhiteSpace />
        <Button
          type='outlined'
          title='Rules'
          icon={book_05g}
        />
        <WhiteSpace />
        <Button
          type='outlined'
          title='Market'
          icon={coin_05d}
        />
        <WhiteSpace />
      </WingBlank>
      <NavBar
        title='News Feed'
      />
      <FlatList
        data={props.newsFeed}
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

export default withRouter(connect(mapStateToProps)(HomePage));
