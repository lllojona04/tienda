export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
  
  // Usa ipapi para obtener ubicación (usa el primer ip en caso de que venga con coma)
  const ipClean = ip.split(',')[0].trim();

  try {
    const response = await fetch(`https://ipapi.co/${ipClean}/json/`);
    const data = await response.json();

    console.log(`[VISIT] ip=${ipClean} ciudad=${data.city} país=${data.country_name}`);

    res.status(200).json({ ip: ipClean, city: data.city, country: data.country_name });
  } catch (error) {
    console.log('[VISIT] Error al obtener datos de ubicación:', error);
    res.status(500).json({ error: 'Error al obtener datos de ubicación' });
  }
}
