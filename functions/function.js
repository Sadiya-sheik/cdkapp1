export async function handler (event) {
    console.log("request:", JSON.stringify(event));
  
    // return response back to upstream caller my change
    return sendRes(200, "HELLLOOO this is my sample webpage");
  }
  
  const sendRes = (status, body) => {
    var response = {
      statusCode: status,
      headers: {
        "Content-Type": "text/html",
      },
      body: body,
    };
    return response;
  };