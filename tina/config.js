import { defineConfig } from "tinacms";
import { homeQuery } from "./queries";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
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
        name: "section",
        label: "Wiki Sections",
        path: "content/sections",
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
            name: "content",
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
            label: "Role/Title",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["elder", "youth", "family", "success"],
            required: true,
          },
          {
            type: "string",
            name: "avatar",
            label: "Avatar Initials",
            required: true,
          },
          {
            type: "rich-text",
            name: "quote",
            label: "Quote/Story",
            isBody: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Photo (optional)",
          },
        ],
      },
      {
        name: "media",
        label: "Media Gallery",
        path: "content/media",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Media Type",
            options: ["video", "photo", "audio", "document"],
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["camp-activities", "cultural-learning", "fitness", "storytelling", "graduation"],
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL (YouTube/Vimeo)",
          },
          {
            type: "image",
            name: "image",
            label: "Image/Thumbnail",
          },
          {
            type: "string",
            name: "duration",
            label: "Duration (for audio/video)",
          },
        ],
      },
      {
        name: "partner",
        label: "Network Partners",
        path: "content/partners",
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
            label: "Role/Title",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Partner Type",
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
            label: "Avatar/Logo Initials",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "string",
            name: "website",
            label: "Website",
          },
          {
            type: "string",
            name: "contact",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "amount",
            label: "Funding Amount (if applicable)",
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["approved", "pending", "in-discussion"],
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
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
            name: "campfireSubtitle",
            label: "CAMPFIRE Subtitle",
          },
          {
            type: "rich-text",
            name: "footerText",
            label: "Footer Text",
          },
        ],
      },
    ],
  },
  queries: {
    homeQuery,
  },
});