import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null :
                    return ;
            case false :
                    return <a className="button is-primary" href="/auth/google"> Log In</a>;
            default :
                    return <a className="button is-primary "> Log Out</a>;
        }

    }

    render(){
        console.log(this.props.auth);
        return(
           <div>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" >
                           <h2> EMAILY </h2>
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    {this.renderContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
           </div>
        )
    }
}

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header)