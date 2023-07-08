const React = require("react");

function Default(html) {
  const me = "Brandon";
  return (
    <html>
      <head>
        <title>Default</title>
      </head>
      <body>
        <h1>HTML Rendered! hello {me}</h1>
        <div className="container">{html.children}</div>
      </body>
    </html>
  );
}

module.exports = Default;
