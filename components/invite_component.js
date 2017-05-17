import React from 'react';
import UserInput from '../components/invite_userInput.js';
import PostedList from '../components/invite_postedList.js';

export default class Invite extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      baseUrl: '',
    };
  }

  componentDidMount() {
    this.props.onGetInvite();
    this.setState({baseUrl: this.props.baseUrl})
  }

  render() {
    const styles = {
        width: "100%",
        maxWidth: "500px"
    }
    return (
        <div className="container">
            <UserInput
                onChange = {this.props.onChange}
                getImgPreview = {this.props.onGetImgPreview}
                onClick = {this.props.onPostData}
             />
             <PostedList
                 inviteObject = {this.props.inviteObject}
                 onDeleteInvite = {this.props.onDeleteInvite}
                 style = {styles}
              />
        </div>
    );
  }
}
