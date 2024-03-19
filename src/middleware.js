export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/calendar',
        '/profile',
        '/teams/:path*',
        '/'
    ]
}