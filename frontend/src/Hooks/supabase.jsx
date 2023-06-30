import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://cntaivutiszwfozhvyqf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNudGFpdnV0aXN6d2Zvemh2eXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjkwODUsImV4cCI6MjAwMzY0NTA4NX0.y4g_GtOcTw7SvgakhFzp_hRNo1Zr19b9V0CQs6RJoVI'
);