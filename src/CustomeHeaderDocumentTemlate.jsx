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

    // The header and footer need to live inside the table structure so the browser or PDF engine
    // can repeat them on every generated page instead of only rendering them once.
    const headerStyle = {
        minHeight: headerHeight + "px",
        height: headerHeight + "px"
    };

    const footerStyle = {
        minHeight: footerHeight + "px",
        height: footerHeight + "px"
    };

    return (
        <div className={className} style={rootStyle}>
            <table className="layout-table">
                {(headerFooter === "header" || headerFooter === "both") && (
                    <thead>
                        <tr className="header-row">
                            <td className="header-cell">
                                <div className="se-document-header" style={headerStyle}>
                                    {headerContent}
                                </div>
                            </td>
                        </tr>
                    </thead>
                )}
                <tbody>
                    <tr className="body-row">
                        <td className="body-cell">
                            <div className="se-document-body">{bodyContent}</div>
                        </td>
                    </tr>
                </tbody>
                {(headerFooter === "footer" || headerFooter === "both") && (
                    <tfoot>
                        <tr className="footer-row">
                            <td className="footer-cell">
                                <div className="se-document-footer" style={footerStyle}>
                                    {footerContent}
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
}
