import { $fetch } from '@/shared/api/$fetch'
import { BASE_URL } from '@/shared/config/base-url'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams
  const url = searchParams.get('url')
  if (!url) {
    return
  }

  const urlPath = url
    .split('/')
    .map((el) => el.trim())
    .filter(Boolean)
    .join('/')

  const response = await $fetch(`${BASE_URL}/${urlPath}`, {
    cache: 'no-cache',
  })

  return new Response(response.body)
}
