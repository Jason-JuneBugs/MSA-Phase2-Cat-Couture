// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const StyledFooter = styled.footer`
//   width: 100%;
//   align-self: flex-end;
//   background-color: #eeeeee;
//   display: flex;

//   .footer-item {
//     padding-top: 1rem;
//     padding-bottom: 1rem;
//     padding-left: 0.5rem;
//     padding-right: 0.5rem;
//     margin: 0;

//     color: black;

//     &.visited {
//       color: black;
//     }
//   }
// `;

// const Footer = () => {
//   return (
//     <StyledFooter className={"page-padding section-padding"}>
//       <p className="footer-item">Copyright Placeholder</p>
//       <Link to="/" className="footer-item">
//         Terms of use
//       </Link>
//       <Link to="/" className="footer-item">
//         Privacy policy
//       </Link>
//     </StyledFooter>
//   );
// };

// export default Footer;



import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledFooter = styled('footer')({
  width: '100%',
  alignSelf: 'flex-end',
  backgroundColor: '#eeeeee',
  display: 'flex',

  '.footer-item': {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    margin: 0,
    color: 'black',

    '&.visited': {
      color: 'black',
    },
  },
});

const Footer: React.FC = () => {
  return (
    <StyledFooter className="page-padding section-padding">
      <p className="footer-item">Copyright Placeholder</p>
      <Link to="/" className="footer-item">
        Terms of use
      </Link>
      <Link to="/" className="footer-item">
        Privacy policy
      </Link>
    </StyledFooter>
  );
};

export default Footer;
