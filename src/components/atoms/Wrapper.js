import { styled } from '@material-ui/styles';
import * as PropTypes from 'prop-types';

const Wrapper = styled('div')(props => ({
  display: 'flex',
  flexDirection: props.direction,
  width: props.cwidth,
  height: props.cheight,
  justifyContent: props.justify,
  alignItems: props.align,
  margin: props.m,
  marginTop: props.mt,
  marginBottom: props.mb,
  marginLeft: props.ml,
  marginRight: props.mr,
  padding: props.p,
  paddingTop: props.pt,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  paddingRight: props.pr,
  color: props.color,
  backgroundColor: props.backgroundColor,
}));

Wrapper.propTypes = {
  cwidth: PropTypes.string,
  cheight: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  direction: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  m: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  p: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
};

export default Wrapper;
