import React from 'react';
import PropTypes from 'prop-types';

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;

    return (
      <section>
        {children}
      </section>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppLayout;