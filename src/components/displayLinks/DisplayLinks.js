import React from "react";

function DisplayLinks({links}) {
    return (
        <ul>
          {links.map((link, id) => 
            <li key={id}> 
              <a href={link.href} children={link.title} />
            </li>
          )}
        </ul>
    )
}

export default DisplayLinks;