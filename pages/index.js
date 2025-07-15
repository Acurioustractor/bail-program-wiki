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

// Static data fallback with all rich content
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
              { type: 'text', text: ' is a transformative 10-day wilderness camp experience designed specifically for Indigenous youth aged 12-17. Rooted in the ' },
              { type: 'text', text: 'CAMPFIRE', bold: true },
              { type: 'text', text: ' strategic framework, our program combines traditional Indigenous knowledge with modern leadership development to create lasting positive change in participants\' lives.' }
            ]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Our Mission' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'To empower Indigenous youth through culturally-grounded leadership development, fostering resilience, identity, and community connection in a supportive wilderness environment.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Program Highlights' }]
          },
          {
            type: 'ul',
            children: [
              { type: 'li', children: [{ type: 'text', text: '10-day intensive wilderness experience' }] },
              { type: 'li', children: [{ type: 'text', text: 'Cultural immersion and traditional teachings' }] },
              { type: 'li', children: [{ type: 'text', text: 'Leadership skill development' }] },
              { type: 'li', children: [{ type: 'text', text: 'Physical fitness and outdoor activities' }] },
              { type: 'li', children: [{ type: 'text', text: 'Mentorship with Indigenous leaders' }] },
              { type: 'li', children: [{ type: 'text', text: 'Family and community involvement' }] }
            ]
          }
        ]
      }
    },
    {
      id: 'campfire-model',
      title: 'CAMPFIRE Model',
      sectionId: 'campfire-model',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🔥 The CAMPFIRE Framework' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Our innovative framework combines eight key elements that work together to create transformative experiences for young Indigenous people. Each element of CAMPFIRE works together like the components of a traditional campfire - each piece is essential, and together they create something powerful and transformative.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'The Eight Elements' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'C - Culture' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Deep immersion in traditional practices and knowledge systems. Participants engage with traditional Aboriginal and Torres Strait Islander practices, learning about their cultural heritage, customs, and spiritual connections to Country.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'A - Ancestral Wisdom' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Learning from Elders and traditional knowledge holders. Direct mentorship from respected Elders who share ancient wisdom, traditional stories, and cultural protocols that have been passed down through generations.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'M - Mentoring' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'One-on-one guidance from culturally strong role models. Individualized support from Indigenous mentors who understand the challenges young people face and can provide culturally appropriate guidance.' }]
          }
        ]
      }
    },
    {
      id: 'impact-stats',
      title: 'Impact Statistics', 
      sectionId: 'impact-stats',
      stats: [
        { number: '85%', label: 'Program Completion Rate' },
        { number: '70%', label: 'Education Re-engagement' },
        { number: '30%', label: 'Reduction in Police Contacts' },
        { number: '95%', label: 'Improved Family Relationships' }
      ],
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📊 Measuring Success' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The BAIL Program tracks both quantitative outcomes and qualitative cultural indicators to understand the full impact of our work. Our evaluation combines Western measurement tools with Indigenous evaluation practices to provide a complete picture of transformation.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Long-term Outcomes' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'Immediate (0-6 months)' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Increased cultural knowledge, improved fitness levels, stronger mentor relationships, enhanced self-esteem and confidence.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'Medium-term (6-18 months)' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Reduced involvement with justice system, educational re-engagement, improved family relationships, leadership roles in community.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'Long-term (18+ months)' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Sustainable lifestyle changes, community leadership roles, cultural ambassadorship, mentoring other young people.' }]
          }
        ]
      }
    }
  ],
  voices: [
    // Elder Voices
    {
      name: 'Uncle Malcolm',
      role: 'Kalkadoon Elder & Cultural Advisor',
      category: 'elder',
      avatar: 'UM',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'Country teaches what no classroom can. When these young fellas come out bush with us, they start to understand who they are. The land holds our stories, our laws, our healing. This program, it\'s bringing our kids home to themselves.' }]
          }
        ]
      }
    },
    {
      name: 'Aunty Margaret',
      role: 'Traditional Knowledge Holder',
      category: 'elder',
      avatar: 'AM',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'These young ones, they\'ve been lost in the whitefella world. But when they sit by the fire, listen to the old stories, learn the old ways - that\'s when the healing starts. Brodie, he understands this. He\'s doing good work.' }]
          }
        ]
      }
    },
    {
      name: 'Uncle James',
      role: 'Cultural Teaching Elder',
      category: 'elder',
      avatar: 'UJ',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'The old people, we knew how to raise strong kids. This program, it brings back the old ways - teaching respect, responsibility, connection to Country. The young people, they hungry for this knowledge.' }]
          }
        ]
      }
    },
    // Youth Voices
    {
      name: 'Jordan T.',
      role: 'Program Participant, Age 16',
      category: 'youth',
      avatar: 'JT',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'Before this program, I was angry all the time. Didn\'t know where I belonged. Now I know my mob, my country. Brodie showed me I can be strong without hurting people. I want to help other kids like me now.' }]
          }
        ]
      }
    },
    {
      name: 'Kylie C.',
      role: 'Program Graduate, Now Youth Mentor',
      category: 'youth',
      avatar: 'KC',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'I was in and out of trouble for years. The camps changed everything. Learning to fish with Uncle, hearing the stories around the fire, training with Brodie - it all made sense. Now I\'m helping run the program for other kids.' }]
          }
        ]
      }
    },
    {
      name: 'Marcus W.',
      role: 'Program Participant, Age 15',
      category: 'youth',
      avatar: 'MW',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'My family was worried about me getting into gangs. The camp showed me there\'s another way to be tough - through culture, through fitness, through helping your people. I\'m proud of who I am now.' }]
          }
        ]
      }
    },
    // Family Voices
    {
      name: 'Sarah M.',
      role: 'Mother of Program Participant',
      category: 'family',
      avatar: 'SM',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'I didn\'t know my son anymore before this program. He was angry, getting into trouble. After the camps, he started talking to me again, helping around the house. He found himself out there on Country.' }]
          }
        ]
      }
    },
    {
      name: 'David K.',
      role: 'Father and Community Leader',
      category: 'family',
      avatar: 'DK',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'This program gives our kids what we sometimes can\'t - connection to their culture in a strong, positive way. Brodie and the Elders, they\'re doing what we all wish we could do for our young people.' }]
          }
        ]
      }
    },
    {
      name: 'Linda T.',
      role: 'Grandmother and Traditional Owner',
      category: 'family',
      avatar: 'LT',
      quote: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [{ type: 'text', text: 'My grandson came back from camp different. He wanted to learn language, asked me about the old stories. For the first time in years, he was proud to be blackfella. That\'s worth everything.' }]
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
  // For now, just return static data until TinaCMS is properly configured
  return {
    props: {
      data: {
        sectionConnection: { 
          edges: staticData.sections.map(section => ({ node: section }))
        },
        voiceConnection: { 
          edges: staticData.voices.map(voice => ({ node: voice }))
        },
        mediaConnection: { 
          edges: staticData.media.map(item => ({ node: item }))
        },
        partnerConnection: { 
          edges: staticData.partners.map(partner => ({ node: partner }))
        },
        settingsConnection: { 
          edges: [{ node: staticSettings }]
        }
      }
    }
  }
}