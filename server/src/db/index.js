import { useSupabase } from '../config.js';
import { jsonStore } from './jsonStore.js';
import { supabaseStore } from './supabaseStore.js';

// Select the database based on configuration.
export const db = useSupabase ? supabaseStore : jsonStore;