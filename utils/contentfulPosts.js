const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntriesCode() {
  const entries = await client.getEntries({
    content_type: 'code'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntriesDesign() {
  const entries = await client.getEntries({
    content_type: 'design'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntriesPost() {
  const entries = await client.getEntries({
    content_type: 'post'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntriesAbout() {
  const entries = await client.getEntries({
    content_type: 'about'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntriesCode, fetchEntriesDesign, fetchEntriesPost, fetchEntriesAbout }