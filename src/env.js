export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : 'https://sandbox.codeworksacademy.com'
export const servePath = dev ? '' : '/thenetwork/'
export const useSockets = false
export const domain = 'codeworksclassroom.auth0.com'
export const audience = 'https://codeworksclassroom.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
// export const domain = 'dev-eux5v4apdr8nm4hz.us.auth0.com'
// export const audience = 'classroom2'
// export const clientId = 'Rur2HYRUEOc9CFa5kFMGh67L2LmsuzQH'