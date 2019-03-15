import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button(props => ({
  height: 40,
  margin: 0,
  borderRadius: '5px',
  width: props.fullWidth ? '100%' : 'auto',
  background: props.theme.colors.primary,
  color: props.theme.colors.white,
}));

Button.propTypes = {
  fullWidth: PropTypes.bool,
};

export default Button;
