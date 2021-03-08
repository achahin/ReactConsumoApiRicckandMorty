import { Row, Col, Pagination } from "react-bootstrap";
const Paginate = ({ pages, next, prev, handlePages, currentPage }) => {
    const listPages = (totalPages) => {
        let arrayPages = [];
        let pageNumber = 0;
        for (let i = 0; i <= totalPages - 1; i++) {
            pageNumber++;
            arrayPages.push({
                pageIndex: pageNumber - 1,
                pageDisplay: pageNumber,
            });
        }
        return arrayPages;
    };

    const handlerArrayPage = (indexPage) => {
        const query = `page=${indexPage}`;
        handlePages(query);
    };

    const handlerNext = () => {
        const indexPage = parseInt(currentPage) + 1;
        const query = `page=${indexPage}`;

        handlePages(query);
    };

    const handlerPrev = () => {
        const indexPage = parseInt(currentPage) - 1;
        const query = `page=${indexPage}`;

        handlePages(query);
    };

    let arrayPages = listPages(pages);
    console.log("pagina actual es " + currentPage);
    return (
        <Row>
            <Col>
                <Pagination>
                    <Pagination.First
                        onClick={() => {
                            handlerArrayPage(1);
                        }}
                    />
                    {/* Evaluo si prev es true para mostrar el elemento previo */}
                    {!!prev && <Pagination.Prev onClick={handlerPrev} />}

                    {arrayPages.map((aPage) =>
                        aPage.pageIndex < 15 ? (
                            <Pagination.Item
                                key={aPage.pageIndex}
                                className={`page-item ${
                                    aPage.pageDisplay === currentPage
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => {
                                    handlerArrayPage(aPage.pageDisplay);
                                }}
                            >
                                {aPage.pageDisplay}
                            </Pagination.Item>
                        ) : (
                            ""
                        )
                    )}
                    {pages > 14 && <Pagination.Ellipsis />}

                    {!!next && <Pagination.Next onClick={handlerNext} />}
                    <Pagination.Last
                        onClick={() => {
                            handlerArrayPage(pages);
                        }}
                    />
                </Pagination>
            </Col>
        </Row>
    );
};

export default Paginate;
