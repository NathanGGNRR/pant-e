export default function (context) {
  const error = context.app.nuxt.err
  if (error) {
    console.log("Logged in error middleware", error)
  }
}
