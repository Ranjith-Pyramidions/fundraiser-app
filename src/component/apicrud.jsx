const apiCrud = {
  postData: async function (url = "", data = {}, token) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      redirect: 'follow',
      body: JSON.stringify(data),
    });
    return response.json();
  },
  postData1: async function (url = "", data = {}, token) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken1"),
        lang: "en",
      },
      redirect: 'follow',
      body: JSON.stringify(data),
    });
    return response.json();
  },
  putData: async function (url = "", data = {}, token) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      redirect: 'follow', 
      body: JSON.stringify(data),
    });
    return response.json(); 
  },

  getData: async function (url = "", token) {
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      redirect: 'follow',
      body: JSON.stringify(),
    });
    return response.json();
  },
  getData1: async function (url = "", token) {
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        authorization: "jwt" + " " + localStorage.getItem("accessToken1"),
        lang: "en",
      },
      redirect: 'follow',
      body: JSON.stringify(),
    });
    return response.json();
  },
  postFormData: async function (
    url = "",
    data = {},
    formDataFlag = false,
    token
  ) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      body: JSON.stringify(data),
      redirect: "follow", 
    });

    return response.json(); 
  },

  postFormData1: async function (
    url = "",
    data = {},
    formDataFlag = false,
    token
  ) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken1"),
        lang: "en",
      },
      body: JSON.stringify(data),
      redirect: "follow", 
    });

    return response.json(); 
  },

  putFormData: async function (
    url = "",
    data = {},
    formDataFlag = false,
    token
  ) {
    const response = await fetch(url, {
      method: "PUT", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    return response.json();
  },
  deleteFormData: async function (
    url = "",
    data = {},
    formDataFlag = false,
    token
  ) {

    const response = await fetch(url, {
      method: "DELETE", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    return response.json();
  },
  fileData: async function (url = "", data) {
    const formData = new FormData();
    formData.append("uploaded_file", data);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      redirect: "follow",
    });
    return response.json();
  },

  deleteData: async function (url = "", data = {}, token) {
    const response = await fetch(url, {
      method: "DELETE", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: "jwt" + " " + localStorage.getItem("accessToken"),
        lang: "en",
      },
      body: JSON.stringify(data),
      redirect: 'follow',
    });
    return response.json();
  },
};

export default apiCrud;
