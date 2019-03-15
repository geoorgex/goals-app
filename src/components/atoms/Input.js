import styled from '@emotion/styled';

const Input = styled.input(props => ({
  borderRadius: 5,
  height: '35px',
  border: `1px solid ${props.theme.colors.black}`
}));

export default Input;
