import React from 'react';
import "./user.styles.scss";

function Account() {
    return (
        <div className="container">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item">User</li>
            <li className="breadcrumb-item active" aria-current="page">
              Profile Settings
            </li>
          </ol>
        </nav>
        <div className="row" gutters-sm>
          <div className="col-md-4 d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <nav className="nav flex-column nav-pills nav-gap-y-1">
                  <a
                    href="creatorprofile"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user mr-2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Profile Information
                  </a>
                  <a
                    href="accountsettings"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded active"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-settings mr-2"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Privacy
                  </a>
                  
                  <a
                    href="notifications"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell mr-2"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Alerts
                  </a>
                  <a
                    href="billing"
                    data-toggle="tab"
                    className="nav-item nav-link has-icon nav-link-faded"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-credit-card mr-2"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    Listing Payment Status
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header border-bottom mb-3 d-flex d-md-none">
                <ul
                  className="nav nav-tabs card-header-tabs nav-gap-x-1"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      href="#profile"
                      data-toggle="tab"
                      className="nav-link has-icon active"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#account"
                      data-toggle="tab"
                      className="nav-link has-icon"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-settings"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#security"
                      data-toggle="tab"
                      className="nav-link has-icon"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-shield"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#notification"
                      data-toggle="tab"
                      className="nav-link has-icon"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-bell"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#billing"
                      data-toggle="tab"
                      className="nav-link has-icon"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-credit-card"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body tab-content">
                <div className="tab-pana" id="account">
                  <h5>Privacy</h5>
                  <hr></hr>
                  <form>
                  <h6 className="topic">User name</h6>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter your username"
                      />
                      <small id="usernameHelp" className="form-text text-muted">
                        After changing your username, your old username becomes
                        available for anyone else to claim.
                      </small>
                    </div>
                    <p></p>
                    <div className="form-group">
                      <label className="d-block text-danger">
                        Delete Account
                      </label>
                      <p className="text-muted font-size-sm">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                    </div>
                    <button className="btn btn-danger" type="button">
                      Delete Account
                    </button>
                    <h6 className="topic">Email</h6>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        After changing your email, all the activities of account with new email account.
                      </small>
                    </div>
                    <p></p>
                    <h6 className="topic">Update email</h6>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="New email address"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        After changing your email, all the activities of account with new email account.
                      </small>
                    </div>
                    <div className="form-group">
                      <p className="text-muted font-size-sm">
                        When Updating your email account, the system will send a new notifications.
                        
                      </p>
                    </div>
                    <button className="btn btn-danger" type="button">
                      Update Email Account
                    </button>
                    <h6 className="topic">Change password</h6>
                    <div className="form-group">
                      <p></p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your old password"
                      />
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="New password"
                      />
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Confirm new password"
                      ></input>
                    </div>
                  </form>
  
                  <form>
                  <h6 className="topic">Two Factor Authentication</h6>
                    <div className="form-group">
                      <button className="btn btn-info" type="button">
                        Enable two-factor authentication
                      </button>
                      <p className="small text-muted mt-2">
                        Two-factor authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                      </p>
                    </div>
                  </form>
  
                  <form>
                  <h6 className="topic">Session</h6>
                    <div className="form-group mb-0">
                      <p className="font-size-sm text-secondary">
                        This is a list of devices that have logged into your
                        account. Revoke any sessions that you do not recognize.
                      </p>
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          <button
                            className="btn btn-light btn-sm ml-auto"
                            type="button"
                          >
                            More info
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Account

