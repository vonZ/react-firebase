import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInvite } from '../actions/get_invite';
import { addToInvite } from '../actions/add_invite';
import { deleteInvite } from '../actions/delete_invite';
import { watchGuestAddedEvent } from '../actions/guest_added_event';
import Invite from '../components/invite_component.js';

class ListPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            name: '',
            baseUrl: ''
        }

        this.getImgPreview = this.getImgPreview.bind(this);
        this.updatePostState = this.updatePostState.bind(this);
        this.postData = this.postData.bind(this);

    }

    getImgPreview() {
        const preview = document.querySelector('img');
        const file    = document.querySelector('input[type=file]').files[0];
        const reader  = new FileReader();

        reader.addEventListener("load", () => {
            preview.src = reader.result;
            this.setState({baseUrl: preview.src});
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    updatePostState(e) {
        this.setState({name: e.target.value});
    }

    postData() {
        this.props.onAddToInvite(this.state);
    }

    render() {

        return (
            <Invite
                onPostData = {this.postData}
                onChange = {this.updatePostState}
                baseUrl = {this.state.baseUrl}
                inviteObject = {this.props.invite}
                onGetInvite = {this.props.onGetInvite}
                onAddToInvite = {this.props.onAddToInvite}
                onDeleteInvite = {this.props.onDeleteInvite}
                onGetImgPreview = {this.getImgPreview}
            />
        );
    }
}

/**
  Redux connect and related functions
**/
function mapStateToProps(state, ownProps) {
    return {
      invite: state.invite
    };
}

function mapDispatchToProps(dispatch) {
    watchGuestAddedEvent(dispatch);
    return {
        onGetInvite: bindActionCreators(getInvite, dispatch),
        onAddToInvite: bindActionCreators(addToInvite, dispatch),
        onDeleteInvite: bindActionCreators(deleteInvite, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
