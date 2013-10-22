define({ api: [
  {
    "type": "get",
    "url": "/decode?source=url",
    "title": "GET decode",
    "version": "0.1.0",
    "group": "Decode",
    "description": "Decode an image and return a json object with the secret message.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "source",
            "optional": false,
            "description": "The image url you want to decode."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"meta\": {\n       \"code\": 200,\n       \"version\": \"0.1.0\",\n       \"url\": \"http://api.glitxt.com\"\n     },\n     \"response\": {\n       \"message\": \"The decoded message\"\n       \"source\": \"http://www.foo.com/bar.gif\"\n     }\n   }\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl -i http://api.glitxt.com/decode?source=https://dl.dropboxusercontent.com/u/2874680/glitxt/hello-world.gif\n"
      }
    ],
    "filename": "routes/decode.js"
  },
  {
    "type": "get",
    "url": "/encode?text=message&source=url",
    "title": "GET encode",
    "version": "0.1.0",
    "group": "Encode",
    "description": "Encode a text message and return the generated image.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "text",
            "optional": false,
            "description": "The text you want to encode into the image."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "source",
            "optional": false,
            "description": "The image url you want to encode."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "   http://api.glitxt.com/encode?text=hello&source=glitxt.com/glitxt/test/files/test.gif\n"
      }
    ],
    "filename": "routes/encode.js"
  },
  {
    "type": "get",
    "url": "/ping",
    "title": "GET ping",
    "version": "0.1.0",
    "group": "Ping",
    "description": "Send a ping request to check if the glitxt API is still working.",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"meta\": {\n       \"code\": 200,\n       \"version\": \"0.1.0\",\n       \"url\": \"http://api.glitxt.com\"\n     },\n     \"response\": {\n       \"message\": \"pong\"\n     }\n   }\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl -i http://api.glitxt.com/ping\n"
      }
    ],
    "filename": "routes/ping.js"
  }
] });