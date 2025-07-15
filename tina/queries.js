export const homeQuery = `
  query HomeQuery {
    sectionConnection {
      edges {
        node {
          id
          title
          sectionId
          content
          icon
          stats {
            number
            label
          }
        }
      }
    }
    voiceConnection {
      edges {
        node {
          name
          role
          category
          avatar
          quote
          photo
        }
      }
    }
    mediaConnection {
      edges {
        node {
          title
          type
          category
          description
          videoUrl
          image
          duration
        }
      }
    }
    partnerConnection {
      edges {
        node {
          name
          role
          category
          organization
          avatar
          description
          website
          contact
          amount
          status
        }
      }
    }
    settingsConnection {
      edges {
        node {
          siteTitle
          siteSubtitle
          campfireSubtitle
          footerText
        }
      }
    }
  }
`