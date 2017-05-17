import React from 'react';

export default class PostedList extends React.Component {

  constructor() {
    super();
  }

  render() {
        return (
            <div className="meeting-list">
              <h2>Guests</h2>
              {this.props.inviteObject.guests && this.props.inviteObject.guests.length > 0 ? (
                <div>
                  {this.props.inviteObject.guests.map((guest, index) => {
                    return (
                        <div key={index}>
                            <p>{guest.name}</p>
                            {guest.baseImg ? (
                                <img
                                    src = {guest.baseImg}
                                    style = {this.props.style}
                                />
                            ) : null}
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.props.onDeleteInvite('-KhwbGCOklksLn6qmUnn')}
                            >
                              Delete me!
                            </button>
                        </div>
                    );
                  })}
                </div>
            ) : null}
            </div>
        );
  }
}
