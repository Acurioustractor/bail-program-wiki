import styled from 'styled-components'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

const SectionContainer = styled.div`
  max-width: 100%;
`

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 2rem;
    color: #8B4513;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #666;
    font-style: italic;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const StatCard = styled.div`
  background: linear-gradient(135deg, #8B4513 0%, #CD853F 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  
  .number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1rem;
    opacity: 0.9;
  }
`

const VoicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const VoiceCard = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #8B4513;
  padding: 1.5rem;
  border-radius: 8px;
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #8B4513;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .name {
    font-weight: bold;
    color: #8B4513;
    margin-bottom: 0.3rem;
  }
  
  .role {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .quote {
    font-style: italic;
    line-height: 1.6;
  }
`

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const MediaCard = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .thumbnail {
    width: 100%;
    height: 150px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  
  .content {
    padding: 1rem;
    
    h4 {
      color: #8B4513;
      margin-bottom: 0.5rem;
    }
    
    .type {
      background: #8B4513;
      color: white;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    
    .description {
      color: #666;
      font-size: 0.9rem;
    }
  }
`

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const PartnerCard = styled.div`
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      background: #8B4513;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    .info {
      .name {
        font-weight: bold;
        color: #8B4513;
      }
      
      .role {
        color: #666;
        font-size: 0.9rem;
      }
    }
  }
  
  .category {
    background: #8B4513;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    display: inline-block;
    margin-bottom: 1rem;
  }
`

const Content = styled.div`
  line-height: 1.6;
  
  h3 {
    color: #8B4513;
    margin: 1.5rem 0 1rem 0;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`

export default function Section({ activeSection, sections, voices, media, partners }) {
  const currentSection = sections.find(section => section.sectionId === activeSection)
  
  if (!currentSection) {
    return (
      <SectionContainer>
        <SectionHeader>
          <h2>🏕️ Welcome to the BAIL Program Wiki</h2>
          <div className="subtitle">Be An Indigenous Leader Program - CAMPFIRE Framework</div>
        </SectionHeader>
        <Content>
          <p>Select a section from the sidebar to explore the BAIL Program wiki.</p>
        </Content>
      </SectionContainer>
    )
  }

  const renderStats = () => {
    if (currentSection.stats && currentSection.stats.length > 0) {
      return (
        <StatsGrid>
          {currentSection.stats.map((stat, index) => (
            <StatCard key={index}>
              <div className="number">{stat.number}</div>
              <div className="label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsGrid>
      )
    }
    return null
  }

  const renderVoices = (category) => {
    const filteredVoices = voices.filter(voice => voice.category === category)
    if (filteredVoices.length === 0) return null
    
    return (
      <VoicesGrid>
        {filteredVoices.map((voice, index) => (
          <VoiceCard key={index}>
            <div className="avatar">{voice.avatar}</div>
            <div className="name">{voice.name}</div>
            <div className="role">{voice.role}</div>
            <div className="quote">
              <TinaMarkdown content={voice.quote} />
            </div>
          </VoiceCard>
        ))}
      </VoicesGrid>
    )
  }

  const renderMedia = (type) => {
    const filteredMedia = media.filter(item => item.type === type)
    if (filteredMedia.length === 0) return null
    
    return (
      <MediaGrid>
        {filteredMedia.map((item, index) => (
          <MediaCard key={index}>
            <div className="thumbnail">
              {item.type === 'video' && '🎥'}
              {item.type === 'photo' && '📷'}
              {item.type === 'audio' && '🎵'}
              {item.type === 'document' && '📄'}
            </div>
            <div className="content">
              <h4>{item.title}</h4>
              <div className="type">{item.type}</div>
              <div className="description">{item.description}</div>
            </div>
          </MediaCard>
        ))}
      </MediaGrid>
    )
  }

  const renderPartners = (category) => {
    const filteredPartners = partners.filter(partner => partner.category === category)
    if (filteredPartners.length === 0) return null
    
    return (
      <PartnersGrid>
        {filteredPartners.map((partner, index) => (
          <PartnerCard key={index}>
            <div className="header">
              <div className="avatar">{partner.avatar}</div>
              <div className="info">
                <div className="name">{partner.name}</div>
                <div className="role">{partner.role}</div>
              </div>
            </div>
            <div className="category">{partner.category}</div>
            <TinaMarkdown content={partner.description} />
          </PartnerCard>
        ))}
      </PartnersGrid>
    )
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <h2>
          {getSectionIcon(activeSection)}
          {currentSection.title}
        </h2>
      </SectionHeader>
      
      {renderStats()}
      
      <Content>
        <TinaMarkdown content={currentSection.content} />
      </Content>
      
      {activeSection === 'elder-voices' && renderVoices('elder')}
      {activeSection === 'youth-perspectives' && renderVoices('youth')}
      {activeSection === 'family-impacts' && renderVoices('family')}
      {activeSection === 'success-stories' && renderVoices('success')}
      
      {activeSection === 'video-gallery' && renderMedia('video')}
      {activeSection === 'photo-gallery' && renderMedia('photo')}
      {activeSection === 'audio-stories' && renderMedia('audio')}
      {activeSection === 'documents' && renderMedia('document')}
      
      {activeSection === 'network-partners' && renderPartners('team')}
      {activeSection === 'community-partners' && renderPartners('community')}
      {activeSection === 'funding-partners' && renderPartners('funding')}
      {activeSection === 'cultural-advisors' && renderPartners('cultural')}
    </SectionContainer>
  )
}

function getSectionIcon(sectionId) {
  const icons = {
    'program-overview': '🏕️',
    'campfire-model': '🔥',
    'impact-statistics': '📊',
    'community-voices': '🗣️',
    'elder-voices': '👵',
    'youth-perspectives': '🧑',
    'family-impacts': '👨‍👩‍👧‍👦',
    'success-stories': '⭐',
    'video-gallery': '🎥',
    'photo-gallery': '📷',
    'audio-stories': '🎵',
    'documents': '📄',
    'network-partners': '🤝',
    'community-partners': '🏘️',
    'funding-partners': '💰',
    'cultural-advisors': '🌟',
    'current-programs': '🎯',
    'upcoming-camps': '📅',
    'locations': '📍',
    'evaluation': '📈'
  }
  return icons[sectionId] || '📄'
}