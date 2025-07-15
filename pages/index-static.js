import { useState } from 'react'
import WikiLayout from '../components/WikiLayout'
import Section from '../components/Section'

// Static data for deployment without TinaCMS
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
              { type: 'text', text: ' is a transformative 10-day wilderness camp experience designed specifically for Indigenous youth aged 12-17.' }
            ]
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
        { number: '78%', label: 'Continue in Leadership Roles' }
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
            children: [{ type: 'text', text: 'The BAIL Program has achieved remarkable success since its inception.' }]
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
            children: [{ type: 'text', text: 'When I see these young ones come to camp, many have lost their way. But after ten days in the wilderness, learning the old ways alongside the new, they walk taller.' }]
          }
        ]
      }
    }
  ],
  media: [],
  partners: [
    {
      name: 'Brodie Knight',
      role: 'Founder & Program Director',
      category: 'team',
      avatar: 'BK',
      description: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'Brodie Knight is the visionary founder of the BAIL Program, bringing over 15 years of experience in Indigenous youth development.' }]
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