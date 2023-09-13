# UserManagement API
The UserManagement API is used to manage users. It provides endpoints for adding new users, fetching users, updateing users' data and deleting users.

## Getting Started
* Install the required packages in the package.json file using the "npm install" command.
* To set up your database connection (Mongo DB), add your database URI to a .env file and deploy on any efficient server of your choice.

## Contact Support
Name: Oluwademilade Akinsola
Email: oluwademiladeakinsola@gmail.com

### Documentation Link
[https://documenter.getpostman.com/view/28211163/2s9YC4VYtV](https://documenter.getpostman.com/view/28211163/2s9YC4VYtV)

const apiDocumentation = {
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Server",
    },
    {
      url: "https://user-management-vb6v.onrender.com",
      description: "Production Server",
    },
  ],
  tags: [
    {
      name: "Persons",
    },
  ],
  paths: {
    '/api': {
      get: fetchPerson,
    },
    '/api/{user_id}': {
        post: createPerson,
    },
    '/api/{user_id}': {
        put: updatePerson,
    }
    '/api/{user_id}': {
        delete: deletePerson,
    }
  },
};

const fetchPerson = {
  tags: ["Persons"],
  description: "Fetch a particular user from the database",
  operationId: "api",
   parameters: [
    {
      name: "user_id",
      in: "path",
      description: "Mongodb generated id of the user",
      required: true,
      schema: {
        type: "string",
        example: "6501dbe0b7331393eb5744c6",
      },
    },
  ],
  responses: {
    "200": {
      description: "User fetched successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
                  name: {
                type: "string",
                example: "Jake Jack",
              },
              _id: {
                type: "string",
                example: "6501dbe0b7331393eb5744c6",
              },
            },
          },
        },
      },
    },
    "404": {
      description: "User not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Not Found",
              },
            },
          },
        },
    },
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
},
};

const createPerson = {
  tags: ["Persons"],
  description: "Add a new user to the database",
  operationId: "add",
  requestBody: {
    content: {
      "application/json": {
        schema: {
            type: 'object',
            properties: {
                fullName: {
                    type: "string",
                    example: "Jack Robins"
                }
            }
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "User added successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "6501dbe0b7331393eb5744c6",
              },
              "name": {
                type: "string",
                example: "Jack Robins",
              },
            },
          },
        },
      },
    },
  "400": {
    description: "Bad Request",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Name parameter not found in the request.",
            },
          },
        },
      },
    },
  },
   "409": {
    description: "Conflict",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "This person already exists in the database.",
            },
          },
        },
      },
    },
  }
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};

const updatePerson = {
  tags: ["Persons"],
  description: "Update a particular user's information using the id parameter",
  operationId: "api",
   parameters: [
    {
      name: "user_id",
      in: "path",
      description: "Mongodb generated id of the user",
      required: true,
      schema: {
        type: "string",
        example: "6501dbe0b7331393eb5744c6",
      },
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
            type: 'object',
            properties: {
                fullName: {
                    type: "string",
                    example: "David King"
                }
            }
        },
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "User added successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                example: "6501dbe0b7331393eb5744c6",
              },
              "name": {
                type: "string",
                example: "David King",
              },
            },
          },
        },
      },
    },
  "400": {
    description: "Bad Request",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Value to be updated not found.",
            },
          },
        },
      },
    },
  },
    "404": {
    description: "Not Found",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "User not found.",
            },
          },
        },
      },
    },
  },
   "409": {
    description: "Conflict",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Name already exists. Try another name.",
            },
          },
        },
      },
    },
  },
    "500": {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};

const deletePerson = {
  tags: ["Persons"],
  description: "Delete a user",
  operationId: "api",
  parameters: [
    {
      name: "user_id",
      in: "path",
      description: "Mongodb generated id of the user",
      required: true,
      schema: {
        type: "string",
        example: "6501dbe0b7331393eb5744c6",
      },
    },
  ],
  responses: {
    200: {
      description: "User deleted successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              acknowledged: "boolean",
              deletedCount: "integer",
            },
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "User with the ID not found.",
              },
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Internal Server Error",
                },
              },
            },
          },
        },
      },
    },
  },
}; 

