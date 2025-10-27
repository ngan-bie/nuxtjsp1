// server/api/user.get.ts
export default defineEventHandler(async (event) => {
  // Giả lập dữ liệu user
  return {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Guest'
  }
})
