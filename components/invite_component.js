import React from 'react';

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
    // const { host, agenda, guest_count, guests } = this.props.invite;
    return (
      <div className="container">
        <div className="well">
          <h1>Meeting invite</h1>
        </div>
        <div className="bg-warning meeting-summary">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Host:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {this.props.inviteObject.host}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Agenda:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {this.props.inviteObject.agenda}
            </div>
          </div>
        </div>
        <div className="bg-info meeting-form">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Name:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                <input
                  type="text"
                  onChange={this.props.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Image:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                <input
                  type="file"
                  id="inputFileToLoad"
                  onChange={this.props.onGetImgPreview}
                />
              <img src="" height="300" alt="Image preview..."  />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.props.onPostData}
                >
                  I am coming!
                </button>
              </div>
            </div>
        </div>
        <div className="meeting-list">
          <h2>Guests</h2>
          {this.props.inviteObject.guests && this.props.inviteObject.guests.length > 0 ? (
            <ul>
              {this.props.inviteObject.guests.map((guest, index) => {
                return (
                    <li key={index}>
                        <p>{guest.name}</p>
                        {guest.baseImg ? (
                            <img src={guest.baseImg} />
                        ) : null}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.props.onDeleteInvite('-KhwbScMUdXOXiLDa-o_')}
                        >
                          Delete me!
                        </button>
                    </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
