/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const contentfulManagement = require('contentful-management')

module.exports = async () => {
  console.log('token =>>>>>>>>>>>', process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  const space = await contentfulClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
  return await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT)
}
