export const $fetch = async (
  input: string | URL | globalThis.Request,
  init?: RequestInit
) => {
  const preFetch = await fetch(input, {
    method: 'OPTIONS',
    credentials: 'include',
  })
  const cookie = preFetch.headers.getSetCookie()

  return fetch(input, {
    ...init,
    headers: {
      Cookie: cookie[0],
      ...init?.headers,
    },
  })
}
