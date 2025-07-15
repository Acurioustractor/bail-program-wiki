import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from app.tina.io
  token: process.env.TINA_TOKEN, // Get this from app.tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
      {
        name: "section",
        label: "Wiki Sections",
        path: "content/sections",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "sectionId",
            label: "Section ID",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Number",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
            ],
          },
        ],
      },
    ],
  },
});