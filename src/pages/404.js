import * as React from "react";
import { Link } from "gatsby";
//color - teksti värv
//padding - tekitab ruumi elemendi SEES
//fontFamily - elemendi font
const pageStyles = {color: "#232129",padding: "96px",fontFamily: "-apple-system, Roboto, sans-serif, serif"};
//margin - tekitab ruumi elemendi ÜMBER
//maxWidth - elemendi max laius, pressib kokku vajadusel
const headingStyles = {marginTop: 0,marginBottom: 64,maxWidth: 320};
const paragraphStyles = {marginBottom: 48};
//backgroundColor - elemendi tausta värv
//fontSize - määrab ära fondi suuruse
//borderRadius - lisamaks ümaraid nurki
const codeStyles = {color: "#8A6534",padding: 4,backgroundColor: "#FFF4DB",fontSize: "1.25rem",borderRadius: 4};
//komponendi defineerimine: const komponent = () => {return(HTML)};
const NotFoundPage = () => {

return (
//main - dokumendi peasisu
<main style={pageStyles}>
    {/*title - pealkirjakene üleval*/}
    <title>Not found</title>
    {/*h1 - kõige suuremat tüüpi pealkiri*/}
    <h1 style={headingStyles}>Page not found</h1>
    {/*p - tavaline tekst*/}
    <p style={paragraphStyles}>
        {/*span - märkimaks mingit osa tekstist*/}
        {/*role?*/} 
        {/*aria-label?*/}
        Sorry{" "}<span role="img" aria-label="Pensive emoji">😔</span>{" "}we couldn’t find what you were looking for.

        <br />
        {/*?*/}
        {/*code - tekitab koodiliku kirja*/}
        {process.env.NODE_ENV === "development" ? (<><br />Try creating a page in <code style={codeStyles}>src/pages/</code>.<br /></>) : null}

        <br />

        <Link to="/">Go home</Link>.

    </p>

</main>

)

};

export default NotFoundPage;
