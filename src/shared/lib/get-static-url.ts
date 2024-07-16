'use client'

export const getStaticUrl = (image?: string | null) => {
  try {
    const a = new URL(image || '')
    return `/api/static?url=${a.pathname}`
  } catch {
    return 'https://placehold.co/600x400'
  }
}
