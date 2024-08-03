 

 
import React from "react";
import { styled } from "@mui/system"; // Import MUI styled utility
import Button from "@mui/material/Button"; // Import MUI Button component
import Typography from "@mui/material/Typography";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
  const preDisabled = currentPage !== null && currentPage === 1;
  const nextDisabled =
    currentPage !== null && totalPages !== null && currentPage >= totalPages;
  console.log(preDisabled,nextDisabled)

  return (
    <StyledPaginationContainer>
      <StyledPaginationControls>
     
        <Button
            aria-label="Previous page"
           onClick={onPrev}
           disabled={preDisabled}
        >
        <ArrowLeftIcon fontSize="large" />
        </Button>
        <Typography variant="body1" style={{ whiteSpace: "nowrap" }}>
           Page {currentPage} of {totalPages}
        </Typography>
     
        <Button
          aria-label="Next page"
          onClick={onNext}
          disabled={nextDisabled}
        >
       <ArrowRightIcon fontSize="large" />
        </Button>
      </StyledPaginationControls>
    </StyledPaginationContainer>
  );
};

export default PaginationControls;

