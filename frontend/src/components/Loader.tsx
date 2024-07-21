// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// const Loader = () => {
//   return (
//     <div>
//       <FontAwesomeIcon icon={faSpinner} spin title="Loading" />
//     </div>
//   );
// };

// export default Loader;

//  

import React from 'react';
import Icon from '@mui/material/Icon';

const Loader: React.FC = () => {
  return (
    <div>
      <Icon>spinner</Icon>
    </div>
  );
};

export default Loader;
