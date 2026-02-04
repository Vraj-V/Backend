import dotenv from 'dotenv'
dotenv.config()

import { createClient } from '@supabase/supabase-js'

console.log("URL:", process.env.SUPABASE_URL)
console.log("KEY:", process.env.SUPABASE_SECRET_KEY?.slice(0, 10))

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
)

export default supabase
