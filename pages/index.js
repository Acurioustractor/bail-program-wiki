import { useState } from 'react'
import WikiLayout from '../components/WikiLayout'
import Section from '../components/Section'

export default function Home() {
  const [activeSection, setActiveSection] = useState('program-overview')
  
  // Use static data for now
  const sections = staticData.sections
  const voices = staticData.voices
  const media = staticData.media
  const partners = staticData.partners
  const settings = staticSettings

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
              { type: 'text', text: ' strategic framework, our program combines traditional Indigenous knowledge with modern leadership development to create lasting positive change in participants lives.' }
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
    },
    // ADD ALL MISSING SECTIONS HERE
    {
      id: 'elder-voices',
      title: 'Elder Voices',
      sectionId: 'elder-voices',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '👵 Elder Wisdom & Guidance' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Our Elders provide the cultural foundation and wisdom that guides everything we do. Their voices carry the authority of tradition and the power of lived experience. They are the cornerstone of our program cultural integrity.' }]
          }
        ]
      }
    },
    {
      id: 'youth-perspectives',
      title: 'Youth Perspectives',
      sectionId: 'youth-perspectives',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🧑 Young Voices' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The young people who participate in our program are the real proof of its effectiveness. Their stories of transformation inspire us and guide our approach. These are their voices, their journeys, their truth.' }]
          }
        ]
      }
    },
    {
      id: 'family-impacts',
      title: 'Family Impacts',
      sectionId: 'family-impacts',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '👨‍👩‍👧‍👦 Family Voices' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The program impact extends beyond individual participants to their families and communities. Parents and siblings witness profound changes that strengthen family bonds and restore hope for the future.' }]
          }
        ]
      }
    },
    {
      id: 'success-stories',
      title: 'Success Stories',
      sectionId: 'success-stories',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '⭐ Celebrating Success' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Every youth who participates in the BAIL Program has a unique story of growth, resilience, and achievement.' }]
          }
        ]
      }
    },
    {
      id: 'video-gallery',
      title: 'Video Gallery',
      sectionId: 'video-gallery',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🎥 Video Stories' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Watch powerful stories from BAIL Program participants, families, and community members.' }]
          }
        ]
      }
    },
    {
      id: 'photo-gallery',
      title: 'Photo Gallery',
      sectionId: 'photo-gallery',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📷 Photo Memories' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Explore visual stories from BAIL Program camps and activities.' }]
          }
        ]
      }
    },
    {
      id: 'audio-stories',
      title: 'Audio Stories',
      sectionId: 'audio-stories',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🎵 Audio Stories & Teachings' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Listen to traditional stories, songs, and teachings from Elders and community members.' }]
          }
        ]
      }
    },
    {
      id: 'documents',
      title: 'Documents',
      sectionId: 'documents',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📄 Program Documents' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Access important program materials, research, and resources.' }]
          }
        ]
      }
    },
    {
      id: 'network-partners',
      title: 'Network Partners',
      sectionId: 'network-partners',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🤝 Our Network Partners' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Meet the dedicated team members and collaborators who make the BAIL Program possible.' }]
          }
        ]
      }
    },
    {
      id: 'community-partners',
      title: 'Community Partners',
      sectionId: 'community-partners',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🏘️ Community Partners' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Discover the Indigenous communities and organizations that support the BAIL Program.' }]
          }
        ]
      }
    },
    {
      id: 'funding-partners',
      title: 'Funding Partners',
      sectionId: 'funding-partners',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '💰 Funding Partners' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Learn about the organizations and foundations that invest in Indigenous youth development.' }]
          }
        ]
      }
    },
    {
      id: 'cultural-advisors',
      title: 'Cultural Advisors',
      sectionId: 'cultural-advisors',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🌟 Cultural Advisors' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Meet the Elders and cultural leaders who guide the BAIL Program.' }]
          }
        ]
      }
    },
    {
      id: 'current-programs',
      title: 'Current Programs',
      sectionId: 'current-programs',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🎯 Current Programs' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Explore the active BAIL Program offerings and initiatives.' }]
          }
        ]
      }
    },
    {
      id: 'upcoming-camps',
      title: 'Upcoming Camps',
      sectionId: 'upcoming-camps',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📅 Upcoming Camps' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Stay informed about future BAIL Program camp opportunities.' }]
          }
        ]
      }
    },
    {
      id: 'locations',
      title: 'Locations',
      sectionId: 'locations',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📍 Program Locations' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Learn about the beautiful and culturally significant locations where BAIL Programs take place.' }]
          }
        ]
      }
    },
    {
      id: 'evaluation',
      title: 'Evaluation',
      sectionId: 'evaluation',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '📈 Program Evaluation' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Discover how we measure success and continuously improve the BAIL Program.' }]
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
            children: [{ type: 'text', text: 'Country teaches what no classroom can. When these young fellas come out bush with us, they start to understand who they are. The land holds our stories, our laws, our healing. This program, it is bringing our kids home to themselves.' }]
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
            children: [{ type: 'text', text: 'These young ones, they have been lost in the whitefella world. But when they sit by the fire, listen to the old stories, learn the old ways - that is when the healing starts. Brodie, he understands this. He is doing good work.' }]
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
            children: [{ type: 'text', text: 'Before this program, I was angry all the time. Did not know where I belonged. Now I know my mob, my country. Brodie showed me I can be strong without hurting people. I want to help other kids like me now.' }]
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
            children: [{ type: 'text', text: 'I was in and out of trouble for years. The camps changed everything. Learning to fish with Uncle, hearing the stories around the fire, training with Brodie - it all made sense. Now I am helping run the program for other kids.' }]
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
            children: [{ type: 'text', text: 'My family was worried about me getting into gangs. The camp showed me there is another way to be tough - through culture, through fitness, through helping your people. I am proud of who I am now.' }]
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
            children: [{ type: 'text', text: 'I did not know my son anymore before this program. He was angry, getting into trouble. After the camps, he started talking to me again, helping around the house. He found himself out there on Country.' }]
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
            children: [{ type: 'text', text: 'This program gives our kids what we sometimes cannot - connection to their culture in a strong, positive way. Brodie and the Elders, they are doing what we all wish we could do for our young people.' }]
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
            children: [{ type: 'text', text: 'My grandson came back from camp different. He wanted to learn language, asked me about the old stories. For the first time in years, he was proud to be blackfella. That is worth everything.' }]
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

// Remove getStaticProps for now to avoid any issues