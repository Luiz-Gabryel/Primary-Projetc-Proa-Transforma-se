// Coloque a URL do seu projeto Supabase aqui (deve começar com https://)
const supabaseUrl = "https://pzqtxjjqvkvcmfxmcqpg.supabase.co";

// Coloque a sua chave pública (anon key) aqui.
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cXR4ampxdmt2Y21meG1jcXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MzMyNDUsImV4cCI6MjEwNjIwOTI0NX0.Sfp3xoJxRzMC74ZknAYNaqjAH0BCn6TYyb7AGivSGS8";

// Criamos a ferramenta principal do nosso app chamada 'clienteSupabase'.
// Usaremos ela em todos os outros arquivos para enviar e receber dados.
const clienteSupabase = window.supabase.createClient(supabaseUrl, supabaseKey);
