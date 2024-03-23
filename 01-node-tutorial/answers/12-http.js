const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // Display the feedback form
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <form method="POST" action="/">
          <label for="feedback">Enter your feedback:</label><br>
          <textarea id="feedback" name="feedback" rows="4" cols="50" required></textarea><br>
          <button type="submit">Submit Feedback</button>
      </form>
    `);
    res.end();
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      // Parse the form data
      const formData = qs.parse(body);
      const feedback = formData.feedback;

      // Display the submitted feedback
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <h2>Your Feedback:</h2>
        <p>${feedback}</p>
        <hr>
        <p>Thank you for your feedback!</p>
        <p><a href="/">Back to Feedback Form</a></p>
      `);
      res.end();
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});