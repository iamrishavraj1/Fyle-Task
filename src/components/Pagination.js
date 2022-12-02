import ReactPaginate from "react-paginate";

const Pagination = ({ handleClick1 }) => {
  return (
    <>
      <ReactPaginate
        previousLabel={"Older"}
        nextLabel={"Newer"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handleClick1}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Pagination;
