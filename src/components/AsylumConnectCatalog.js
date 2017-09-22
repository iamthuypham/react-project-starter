import React from 'react';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types'
import classNames from 'classnames';

require('./AsylumConnectCatalog.scss');

// 1. We define the styles.
const styles = theme => ({
  button: {
    color: theme.palette.primary[500],
    border: '1px solid #6a88c0',
    'border-radius': '50px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#6a88c0',
    },
  }
});

function MyLink(props) {
  const { children, classes, className, variant} = props;

  return (
    <Button className={classNames(
        classes.button,
        
        className,
      )}
    >
      {children}
    </Button>
  );
}

MyLink.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
};

// 2. We inject the styles.
const MyLinkStyled = withStyles(styles)(MyLink);

export default class AsylumConnectCatalog extends React.Component { 
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <header>
          <nav/>
        </header>
        <div className='content' >
          <Typography type='display1'>Heading 1 [display1]</Typography>
          <Typography type='display2'>Heading 2 [display2]</Typography>
          <Typography type='display3'>Heading 3 [display3]</Typography>
          <Typography type='display4'>Nav [display4]</Typography>
          <Typography type='body1'>Paragraph [body1]</Typography>
          <Typography type='body2'>Hint Text [body2]</Typography>
          <Button className="${classes.button}">Open</Button>
          <form noValidate autoComplete="off">
            <TextField
              label="With placeholder"
              placeholder="Placeholder"
              margin="normal"
            />
          </form>
          
          <MyLinkStyled href="#">{'MyLink'}</MyLinkStyled>
          {' - '}
          <MyLinkStyled href="#" variant="primary">
            {'primary'}
          </MyLinkStyled>
        </div>
        <footer />
      </div>
    );
  }
};