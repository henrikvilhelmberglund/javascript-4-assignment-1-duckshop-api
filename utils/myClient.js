import fetch from "node-fetch";
import fs from "fs";
// hvb-console is my fun library for adding color to console logs and writing out line numbers for them
// replaces the normal console.log etc so remove it if necessary
import console from "hvb-console";

export async function myClient(endpoint, id) {
  const response = {
    statusCode: 200,
    message: "Success",
  };

  let mockData = JSON.parse(fs.readFileSync("mock.json", "utf-8"));

  if (id) {
    console.log(id);
    mockData = mockData.filter((product) => {
      if (+id === product.id) {
        return true;
      }
    });
    // don't want an array here
    mockData = mockData[0];
    if (mockData.length === 0) {
      response.statusCode = 404;
      response.message = `Product with id ${id} not found`;
    }
  }
  // url = `${process.env.BASE_URL}${process.env.API_BASE}${endpoint}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  // const response = await fetch("mock.json", options);
  // const response = await fetch(url, options);
  // const data = await response.json();
  // console.log(response);
  // console.log(mockData);
  return { ...response, mockData };
}
