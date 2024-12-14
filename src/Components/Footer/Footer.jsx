import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return <>
              <footer className="text-center py-4 cardBg text-white" >
        <p>&copy; {new Date().getFullYear()} Shady's Portfolio. All Rights Reserved.</p>
      </footer>
        </>
    }
}

export default Footer;