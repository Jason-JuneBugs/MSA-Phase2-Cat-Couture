// import styled from "styled-components";

// const StyledTable = styled.div`
//   width: auto;
//   overflow: scroll;
//   & > table {
//     color: #333333;
//     background: #ffffff;
//     border: 1px solid grey;
//     border-collapse: collapse;
//     width: 100%;
//   }
// `;
// const Table = ({ children, className }) => {
//   return (
//     <StyledTable className={className}>
//       <table>{children}</table>
//     </StyledTable>
//   );
// };

// export default Table;


import { styled } from '@mui/system';

const StyledTable = styled('div')({
  width: 'auto',
  overflow: 'scroll',
  '& > table': {
    color: '#333333',
    background: '#ffffff',
    border: '1px solid grey',
    borderCollapse: 'collapse',
    width: '100%',
  },
});

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <StyledTable className={className}>
      <table>{children}</table>
    </StyledTable>
  );
};

export default Table;
