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
      {
        name: "voice",
        label: "Community Voices",
        path: "content/voices",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Person's Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role/Title",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["elder", "youth", "family", "partner"],
            required: true,
          },
          {
            type: "string",
            name: "avatar",
            label: "Avatar Initials",
          },
          {
            type: "rich-text",
            name: "quote",
            label: "Quote/Testimonial",
            isBody: true,
          },
        ],
      },
      {
        name: "partner",
        label: "Partners & Team",
        path: "content/partners",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role/Position",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["team", "community", "funding", "cultural"],
            required: true,
          },
          {
            type: "string",
            name: "organization",
            label: "Organization",
          },
          {
            type: "string",
            name: "avatar",
            label: "Avatar Initials",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "media",
        label: "Media Gallery",
        path: "content/media",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Media Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Media Type",
            options: ["video", "photo", "audio"],
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["cultural-learning", "graduation", "camp-activities", "testimonials", "ceremonies"],
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Image",
          },
          {
            type: "string",
            name: "url",
            label: "Media URL",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "Site Title",
            required: true,
          },
          {
            type: "string",
            name: "siteSubtitle",
            label: "Site Subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "Site Description",
          },
        ],
      },
    ],
  },
});