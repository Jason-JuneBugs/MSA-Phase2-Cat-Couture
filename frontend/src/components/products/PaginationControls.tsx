// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

// const StyledPaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const StyledPaginationControls = styled.div`
//   width: 100%;
//   max-width: 200px;
//   padding-top: 3rem;
//   padding-bottom: 3rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const PaginationControls = ({
//   onPrev,
//   onNext,
//   currentPage = null,
//   totalPages = null,
// }) => {
//   const preDisabled = currentPage > 1 ? false : true;
//   const nextDisabled = currentPage < totalPages ? false : true;
//   return (
//     <StyledPaginationContainer>
//       <StyledPaginationControls>
//         <div>
//           <button
//             aria-label="Previous page"
//             onClick={onPrev}
//             disabled={preDisabled}
//           >
//             <FontAwesomeIcon icon={faChevronLeft} size="2x" />
//           </button>
//         </div>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <div>
//           <button
//             aria-label="Next page"
//             onClick={onNext}
//             disabled={nextDisabled}
//           >
//             <FontAwesomeIcon icon={faChevronRight} size="2x" />
//           </button>
//         </div>
//       </StyledPaginationControls>
//     </StyledPaginationContainer>
//   );
// };

// export default PaginationControls;
import React from "react";
import { styled } from "@mui/system"; // Import MUI styled utility
import Button from "@mui/material/Button"; // Import MUI Button component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // You can keep this import if needed
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const StyledPaginationContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

const StyledPaginationControls = styled("div")`
  width: 100%;
  max-width: 200px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PaginationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentPage?: number | null;
  totalPages?: number | null;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  onPrev,
  onNext,
  currentPage = null,
  totalPages = null,
}) => {
  const preDisabled = currentPage !== null && currentPage > 1;
  const nextDisabled =
    currentPage !== null && totalPages !== null && currentPage >= totalPages;

  return (
    <StyledPaginationContainer>
      <StyledPaginationControls>
        <div>
          <Button
            aria-label="Previous page"
            onClick={onPrev}
            disabled={preDisabled}
          >
             <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </Button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <Button
            aria-label="Next page"
            onClick={onNext}
            disabled={nextDisabled}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </Button>
        </div>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;
