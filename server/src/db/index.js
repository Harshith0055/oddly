import { useSupabase } from '../config.js';
import { jsonStore } from './jsonStore.js';
import { supabaseStore } from './supabaseStore.js';

// Supabase is used automatically when SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY are set.
// Static imports (no top-level await) so the Netlify Function can be bundled as CommonJS.
export const db = useSupabase ? supabaseStore : jsonStore;
