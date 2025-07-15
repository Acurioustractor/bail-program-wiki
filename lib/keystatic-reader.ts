import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';

export const reader = createReader(process.cwd(), config);

// Helper functions to get content
export async function getSections() {
  try {
    const sections = await reader.collections.sections.all();
    return sections.map(section => ({
      id: section.slug,
      title: section.entry.title,
      sectionId: section.entry.sectionId,
      stats: section.entry.stats,
      content: section.entry.content,
    }));
  } catch (error) {
    console.error('Error loading sections:', error);
    return [];
  }
}

export async function getVoices() {
  try {
    const voices = await reader.collections.voices.all();
    return voices.map(voice => ({
      name: voice.entry.name,
      role: voice.entry.role,
      category: voice.entry.category,
      avatar: voice.entry.avatar,
      photo: voice.entry.photo,
      quote: voice.entry.quote,
    }));
  } catch (error) {
    console.error('Error loading voices:', error);
    return [];
  }
}

export async function getMedia() {
  try {
    const media = await reader.collections.media.all();
    return media.map(item => ({
      title: item.entry.title,
      type: item.entry.type,
      category: item.entry.category,
      image: item.entry.image,
      videoUrl: item.entry.videoUrl,
      audioUrl: item.entry.audioUrl,
      documentUrl: item.entry.documentUrl,
      description: item.entry.description,
    }));
  } catch (error) {
    console.error('Error loading media:', error);
    return [];
  }
}

export async function getPartners() {
  try {
    const partners = await reader.collections.partners.all();
    return partners.map(partner => ({
      name: partner.entry.name,
      role: partner.entry.role,
      category: partner.entry.category,
      organization: partner.entry.organization,
      avatar: partner.entry.avatar,
      photo: partner.entry.photo,
      website: partner.entry.website,
      email: partner.entry.email,
      description: partner.entry.description,
    }));
  } catch (error) {
    console.error('Error loading partners:', error);
    return [];
  }
}

export async function getSettings() {
  try {
    const settings = await reader.singletons.settings.read();
    return settings || {
      siteTitle: 'BAIL Program Wiki',
      siteSubtitle: 'Be An Indigenous Leader Program',
      footerText: '',
      primaryColor: '#8B4513',
      secondaryColor: '#D2691E',
    };
  } catch (error) {
    console.error('Error loading settings:', error);
    return {
      siteTitle: 'BAIL Program Wiki',
      siteSubtitle: 'Be An Indigenous Leader Program',
      footerText: '',
      primaryColor: '#8B4513',
      secondaryColor: '#D2691E',
    };
  }
}