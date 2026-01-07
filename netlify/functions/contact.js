exports.handler = async (event) => {
    try {
      if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
      }
  
      const data = JSON.parse(event.body || "{}");
  
      const name = String(data.name || "").trim();
      const email = String(data.email || "").trim();
      const topic = String(data.topic || "").trim();
      const message = String(data.message || "").trim();
  
      if (!name || !email || !topic || !message) {
        return { statusCode: 400, body: "Missing required fields" };
      }
  
      console.log("CONTACT SUBMISSION:", { name, email, topic, message });
  
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ok: true }),
      };
    } catch (err) {
      console.error(err);
      return { statusCode: 500, body: "Server error" };
    }
  };