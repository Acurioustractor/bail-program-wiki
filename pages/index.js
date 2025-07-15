import { useState } from 'react'
import WikiLayout from '../components/WikiLayout'
import Section from '../components/Section'

// Static data for deployment
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

const settings = {
  siteTitle: 'BAIL Program Wiki',
  siteSubtitle: 'Be An Indigenous Leader Program'
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('program-overview')

  return (
    <WikiLayout 
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      settings={settings}
    >
      <Section 
        activeSection={activeSection}
        sections={staticData.sections}
        voices={staticData.voices}
        media={staticData.media}
        partners={staticData.partners}
      />
    </WikiLayout>
  )
}