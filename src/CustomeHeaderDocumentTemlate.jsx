import "./ui/CustomeHeaderDocumentTemlate.css";

export function CustomeHeaderDocumentTemlate(props) {
    const { headerFooter, headerContent, bodyContent, footerContent, headerHeight, footerHeight } = props;

    const className = ["se-document-layout-widget", "document-layout-widget", props.class].filter(Boolean).join(" ");

    const rootStyle = {
        "--header-height": headerHeight + "px",
        "--footer-height": footerHeight + "px"
    };

    // Created based on this blog post:
    // https://medium.com/@Idan_Co/the-ultimate-print-html-template-with-header-footer-568f415f6d2a

    // General idea is to use a table because the header and footer of a table will be repeated on every page.
    // The body is rendered in the table body after the header row, so it cannot overlap the header area.
    const footerStyle = {
        height: footerHeight + "px"
    };

    return (
        <div className={className} style={rootStyle}>
            <table className="layout-table">
                {(headerFooter === "header" || headerFooter === "both") && (
                    <thead>
                        <tr>
                            <td>
                                <div className="header-content">{headerContent}</div>
                            </td>
                        </tr>
                    </thead>
                )}
                <tbody>
                    <tr>
                        <td>
                            <div className="content">{bodyContent}</div>
                        </td>
                    </tr>
                </tbody>
                {(headerFooter === "footer" || headerFooter === "both") && (
                    <tfoot>
                        <tr>
                            <td>
                                <div className="footer-space" style={footerStyle} />
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
            {(headerFooter === "footer" || headerFooter === "both") && (
                <div className="footer" style={footerStyle}>
                    {footerContent}
                </div>
            )}
        </div>
    );
}
