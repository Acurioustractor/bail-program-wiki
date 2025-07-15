import { useState } from 'react'
import WikiLayout from '../components/WikiLayout'
import Section from '../components/Section'

export default function Home(props) {
  const [activeSection, setActiveSection] = useState('program-overview')
  
  // Use static data for now (TinaCMS integration will be added gradually)
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

// EXACT content from original HTML file - bail-program-wiki-full.html
export const staticData = {
  sections: [
    {
      id: 'program-overview',
      title: 'Program Overview',
      sectionId: 'program-overview',
      stats: [
        { number: '10', label: 'Camps Conducted\nAcross 5 Locations' },
        { number: '400', label: 'Young Indigenous Men\nDirectly Impacted' },
        { number: '4 Years', label: 'Proven Track Record\nof Success' },
        { number: '$200k', label: 'Total Project Investment\n(2025 Initiative)' }
      ],
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: '🎯 Mission Statement' }]
          },
          {
            type: 'p',
            children: [
              { type: 'text', text: 'The BAIL (Be An Indigenous Leader) Program', bold: true },
              { type: 'text', text: ', delivered through the innovative CAMPFIRE model, represents a transformative approach to addressing youth crime and disconnection among Aboriginal and Torres Strait Islander young people in Mount Isa and Doomadgee.' }
            ]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Led by Brodie Germaine Fitness (BG Fit), this culturally-grounded initiative combines the healing power of Country with fitness, mentoring, and Elder guidance to break cycles of disadvantage and empower young Indigenous leaders.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '🔥 The CAMPFIRE Model' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Our innovative framework combines eight key elements that work together to create transformative experiences for young Indigenous people.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'C - Culture: Deep immersion in traditional practices' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'A - Ancestral Wisdom: Learning from Elders' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'M - Mentoring: One-on-one guidance' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'P - Personal Growth: Individual development' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'F - Fitness: Physical foundation' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'I - Identity: Cultural identity' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'R - Resilience: Overcoming challenges' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'E - Empowerment: Leadership development' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '📺 Brodie\'s Story - Program Introduction' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Brodie shares his vision for the BAIL Program and the importance of connection to Country.' }]
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
    // Community Voices section - matches original HTML voices section
    {
      id: 'community-voices',
      title: 'Community Voices & Insights',
      sectionId: 'community-voices',
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: 'Community Voices & Insights' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The BAIL Program is driven by the voices and experiences of our community. Here you will find perspectives from Elders who guide us, young people who have been transformed, and families who have witnessed the change.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '👴 Elder Wisdom & Guidance' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '👦 Youth Perspectives' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'See all community voices in the sidebar sections for Elder Voices, Youth Perspectives, Family Impacts, and Success Stories.' }]
          }
        ]
      }
    },
    // Network & Partners section - matches original HTML network section  
    {
      id: 'network-partners',
      title: 'Network & Partners',
      sectionId: 'network-partners',
      stats: [
        { number: '$100k', label: 'Youth Development\nPartnership Fund' },
        { number: '$32k', label: 'Queensland\nGambling Grant' },
        { number: '$68k', label: 'In-kind & Partner\nContributions' },
        { number: '$200k', label: 'Total Project\nInvestment' }
      ],
      content: {
        type: 'root',
        children: [
          {
            type: 'h1',
            children: [{ type: 'text', text: 'Network & Partners' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'The BAIL Program is strengthened by a diverse network of community leaders, organizations, and cultural advisors who work together to support young Indigenous people.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '🤝 Brodie\'s Core Team' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'Brodie Germaine - Program Founder & Director' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Indigenous fitness trainer, community leader, and visionary behind the BAIL Program. Expertise in Indigenous Leadership, Youth Mentoring, and Cultural Connection.' }]
          },
          {
            type: 'h3',
            children: [{ type: 'text', text: 'Benjamin Knight - Program Coordinator' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Strategic coordinator supporting program implementation and community engagement with expertise in Program Coordination and Strategic Planning.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: '💰 Funding Partners' }]
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
            children: [{ type: 'text', text: '👴 Elder Wisdom & Guidance' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Our Elders provide the cultural foundation and wisdom that guides everything we do. Their voices carry the authority of tradition and the power of lived experience. They are the cornerstone of our program cultural integrity.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Video Content' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: '📺 Elder Voices - Cultural Wisdom: "Cultural teachings and traditional wisdom"' }]
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
            children: [{ type: 'text', text: 'These are the stories that inspire us to continue this work. Each success story represents not just one young person transformation, but the ripple effect that touches families, communities, and future generations.' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Thomas C. - From Custody to Community Leader' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Age 17, Program Graduate: "Thomas entered the program while on remand, facing serious charges. Through intensive cultural connection and mentoring, he discovered his passion for traditional arts. Today, he is completing Year 12, teaching younger kids traditional crafts, and has had no further contact with police for 18 months."' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Amy S. - Breaking the Cycle' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Age 16, Youth Mentor: "Amy came from a family with a three-generation history of incarceration. The BAIL Program connected her with strong female Elders who became her cultural mothers. She is now studying to become a youth worker and mentors other at-risk girls in her community."' }]
          },
          {
            type: 'h2',
            children: [{ type: 'text', text: 'Jake W. - Finding Purpose Through Culture' }]
          },
          {
            type: 'p',
            children: [{ type: 'text', text: 'Age 18, Cultural Guide: "Jake struggled with substance abuse and had been expelled from school. The camps taught him traditional hunting and navigation skills. He is now sober, works as a cultural guide for tourists, and is training to become a ranger on Country."' }]
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

export const staticSettings = {
  siteTitle: 'BAIL Program Wiki',
  siteSubtitle: 'Be An Indigenous Leader Program'
}

// Remove getStaticProps for now to avoid any issues