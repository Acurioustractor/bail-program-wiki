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
  
  // Get all sections from data
  const sections = data.sectionConnection?.edges?.map(edge => edge.node) || []
  const voices = data.voiceConnection?.edges?.map(edge => edge.node) || []
  const media = data.mediaConnection?.edges?.map(edge => edge.node) || []
  const partners = data.partnerConnection?.edges?.map(edge => edge.node) || []
  const settings = data.settingsConnection?.edges?.[0]?.node || {}

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

export const getStaticProps = async () => {
  const tinaProps = await client.queries.homeQuery()
  return {
    props: {
      ...tinaProps,
    },
  }
}