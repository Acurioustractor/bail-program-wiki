import { useState } from 'react'
import styled from 'styled-components'

const WikiContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  min-height: 100vh;
`

const Header = styled.header`
  background: linear-gradient(135deg, #8B4513 0%, #CD853F 100%);
  color: white;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  gap: 1rem;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`

const HeaderTitle = styled.div`
  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.3rem;
    font-weight: 300;
  }
`

const Subtitle = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-style: italic;
`

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 200px;
  min-height: calc(100vh - 120px);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside`
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`

const SidebarTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #8B4513;
  font-weight: 600;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`

const NavLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  border: none;
  background: ${props => props.active ? '#8B4513' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.active ? '#8B4513' : '#e9ecef'};
  }
`

const ContentArea = styled.main`
  padding: 2rem;
  overflow-y: auto;
`

const Tools = styled.aside`
  background: #f8f9fa;
  border-left: 1px solid #e9ecef;
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMenuBtn = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem;
  min-width: 40px;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 4px;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const menuItems = [
  { id: 'program-overview', label: 'Program Overview', icon: '🏕️' },
  { id: 'campfire-model', label: 'CAMPFIRE Model', icon: '🔥' },
  { id: 'impact-stats', label: 'Impact Statistics', icon: '📊' },
  { id: 'elder-voices', label: 'Elder Voices', icon: '👵' },
  { id: 'youth-perspectives', label: 'Youth Perspectives', icon: '🧑' },
  { id: 'family-impacts', label: 'Family Impacts', icon: '👨‍👩‍👧‍👦' },
  { id: 'success-stories', label: 'Success Stories', icon: '⭐' },
  { id: 'video-gallery', label: 'Video Gallery', icon: '🎥' },
  { id: 'photo-gallery', label: 'Photo Gallery', icon: '📷' },
  { id: 'audio-stories', label: 'Audio Stories', icon: '🎵' },
  { id: 'documents', label: 'Documents', icon: '📄' },
  { id: 'network-partners', label: 'Network Partners', icon: '🤝' },
  { id: 'community-partners', label: 'Community Partners', icon: '🏘️' },
  { id: 'funding-partners', label: 'Funding Partners', icon: '💰' },
  { id: 'cultural-advisors', label: 'Cultural Advisors', icon: '🌟' },
  { id: 'current-programs', label: 'Current Programs', icon: '🎯' },
  { id: 'upcoming-camps', label: 'Upcoming Camps', icon: '📅' },
  { id: 'locations', label: 'Locations', icon: '📍' },
  { id: 'evaluation', label: 'Evaluation', icon: '📈' }
]

export default function WikiLayout({ children, activeSection, setActiveSection, settings }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <WikiContainer>
      <Header>
        <HeaderContent>
          <HeaderLeft>
            <MobileMenuBtn onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </MobileMenuBtn>
            <HeaderTitle>
              <h1>{settings.siteTitle || 'BAIL Program Wiki'}</h1>
              <Subtitle>{settings.siteSubtitle || 'Be An Indigenous Leader Program'}</Subtitle>
            </HeaderTitle>
          </HeaderLeft>
        </HeaderContent>
      </Header>
      
      <MainLayout>
        <Sidebar isOpen={sidebarOpen}>
          <SidebarTitle>📚 Wiki Navigation</SidebarTitle>
          <NavList>
            {menuItems.map(item => (
              <NavItem key={item.id}>
                <NavLink
                  active={activeSection === item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Sidebar>
        
        <ContentArea>
          {children}
        </ContentArea>
        
        <Tools>
          <SidebarTitle>🛠️ Tools</SidebarTitle>
          <p>Quick Actions</p>
        </Tools>
      </MainLayout>
    </WikiContainer>
  )
}