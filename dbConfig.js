import dotenv from 'dotenv'; //dotenv - библиотека для подрубки сторонних сервисов 
import { createClient } from '@supabase/supabase-js'; 

dotenv.config(); 

const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseKey = process.env.SUPABASE_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey); 

export default supabase; 