import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"
import { resolve } from "path";


const sleep = () => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})


const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phone: {
          type: 'text',
          label: '手机号'
        },
        captcha: {
          type: 'text',
          label: '验证码'
        }
      },
      async authorize(credentials) {
        await sleep()
        if(credentials?.phone === '12345678912') {
          //从数据库取
          return {
            id: '1',
            name: 'zs',
            phone: '12345678912'
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  // secret: 'sj10PHVwmVNpm+ySLq08xdrLvuJ+g1a+gVjKsdyJqWA=',
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST, authOptions}
