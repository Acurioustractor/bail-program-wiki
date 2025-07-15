import { useState } from 'react'
import { client } from '../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import WikiLayout from '../components/WikiLayout'
import Section from '../components/Section'

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  
  const [activeSection, setActiveSection] = useState('program-overview')
  
  // Get all sections from data, fallback to static data
  const sections = data?.sectionConnection?.edges?.map(edge => edge.node) || staticData.sections
  const voices = data?.voiceConnection?.edges?.map(edge => edge.node) || staticData.voices
  const media = data?.mediaConnection?.edges?.map(edge => edge.node) || staticData.media
  const partners = data?.partnerConnection?.edges?.map(edge => edge.node) || staticData.partners
  const settings = data?.settingsConnection?.edges?.[0]?.node || staticSettings

  return (
    <WikiLayout 
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      settings={settings}
    >
      <Section 
        activeSection={activeSection}
        sections={sections}
        voices={voices}
        media={media}
        partners={partners}
      />
    </WikiLayout>
  )
}

// Static data fallback
const staticData = {
  sections: [
    {
      id: 'program-overview',
      title: 'Program Overview',
      sectionId: 'program-overview',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: 'Welcome to the BAIL Program' }]
          },
          {
            type: 'p',
            children: [
              { type: 'text', text: 'The ' },
              { type: 'text', text: 'Be An Indigenous Leader (BAIL) Program', bold: true },
              { type: 'text', text: ' is a transformative 10-day wilderness camp experience designed specifically for Indigenous youth aged 12-17. Rooted in the CAMPFIRE strategic framework, our program combines traditional Indigenous knowledge with modern leadership development.' }
            ]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Our Mission' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'To empower Indigenous youth through culturally-grounded leadership development, fostering resilience, identity, and community connection in a supportive wilderness environment.' }]
          }
        ]
      }
    },
    {
      id: 'impact-stats',
      title: 'Impact Statistics', 
      sectionId: 'impact-stats',
      stats: [
        { number: '500+', label: 'Youth Served' },
        { number: '85%', label: 'Completion Rate' },
        { number: '92%', label: 'Report Improved Confidence' },
        { number: '78%', label: 'Continue in Leadership Roles' },
        { number: '15', label: 'Partner Communities' },
        { number: '10', label: 'Years Running' }
      ],
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: 'Measuring Our Impact' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The BAIL Program has achieved remarkable success since its inception, with measurable outcomes that demonstrate the power of culturally-grounded programming.' }]
          }
        ]
      }
    }
  ],
  voices: [
    {
      name: 'Elder Mary Whitehorse',
      role: 'Traditional Knowledge Keeper',
      category: 'elder',
      avatar: 'MW',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'When I see these young ones come to camp, many have lost their way. But after ten days in the wilderness, learning the old ways alongside the new, they walk taller. They know who they are. The CAMPFIRE framework honors our ancestors while preparing our youth for the modern world.' }]
          }
        ]
      }
    },
    {
      name: 'Alex Bear',
      role: 'Program Graduate, Youth Mentor',
      category: 'youth',
      avatar: 'AB',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'Before BAIL, I felt disconnected from my culture and struggled with confidence. The program changed everything. Learning traditional skills while developing leadership abilities showed me I could be proud of who I am while achieving my dreams.' }]
          }
        ]
      }
    }
  ],
  media: [
    {
      title: 'Traditional Fire Making',
      type: 'video',
      category: 'cultural-learning',
      description: 'Youth learning traditional fire-making techniques from elders'
    },
    {
      title: 'Camp Graduation Ceremony',
      type: 'photo',
      category: 'graduation',
      description: 'Proud graduates with their families and mentors'
    }
  ],
  partners: [
    {
      name: 'Brodie Knight',
      role: 'Founder & Program Director',
      category: 'team',
      organization: 'BAIL Program Foundation',
      avatar: 'BK',
      description: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'Brodie Knight is the visionary founder of the BAIL Program, bringing over 15 years of experience in Indigenous youth development and wilderness education. His development of the CAMPFIRE framework has become a model for Indigenous youth programming across North America.' }]
          }
        ]
      }
    }
  ]
}

const staticSettings = {
  siteTitle: 'BAIL Program Wiki',
  siteSubtitle: 'Be An Indigenous Leader Program'
}

export const getStaticProps = async () => {
  try {
    const tinaProps = await client.queries.homeQuery()
    return {
      props: {
        ...tinaProps,
      },
    }
  } catch (error) {
    // Fallback if TinaCMS is not available
    return {
      props: {
        data: {
          sectionConnection: { edges: [] },
          voiceConnection: { edges: [] },
          mediaConnection: { edges: [] },
          partnerConnection: { edges: [] },
          settingsConnection: { edges: [] }
        }
      }
    }
  }
}