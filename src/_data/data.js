const Cache = require("@11ty/eleventy-cache-assets");
require('dotenv').config();

const apiBaseUrl = process.env.API_BASE_URL;

async function fetchData(apiPath) {
  const url = `${apiBaseUrl}${apiPath}`;

  try {
    let json = await Cache(url, {
      duration: '5s',
      type: 'json'
    });
    return json;
  } catch(e) {
    console.error(`[API] error fetching ${url}`);
    return null;
  }
}

module.exports = async function() {
  // TODO: make a forEach apiPaths
  const data = {
    t: await fetchData('/translations'),
    site: await fetchData('/site'),
    pages: await fetchData('/pages'),
    pricetable: await fetchData('/prices')
  };

  let result = {}

  // translations
  data.t.forEach(row => {
    result[row.code] = row;
  });
  data.t = result;

  // pages
  // from [{id:1, name: "room", title: "aaa"},...]
  // to [{room: {title: "aaa"},...}]
  result = {};
  data.pages.forEach(row => {
    result[row.name] = row;
  });
  data.pages = result;
  console.log(data);

  return data;
};
