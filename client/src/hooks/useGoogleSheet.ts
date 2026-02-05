import { useState, useEffect } from 'react';

export interface Event {
  date: string;
  title: string;
  description: string;
  time: string;
  imageUrl: string;
}

const SHEET_ID: string = '1YhGNWfMyulDWL-Fe-kPzoDt1CVUdqUK8kRhB6XLLfXI'; // Kullanıcı bunu değiştirecek
const SHEET_NAME = 'Sheet1';

export function useGoogleSheet() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        
        // Google Sheets CSV export URL
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Sheet verisi alınamadı');
        
        const csv = await response.text();
        const lines = csv.split('\n').slice(1); // Başlık satırını atla
        
        const parsedEvents: Event[] = lines
          .filter(line => line.trim().length > 0)
          .map(line => {
            const [date, title, description, time, imageUrl] = line
              .split(',')
              .map(cell => cell.trim().replace(/^"|"$/g, ''));
            
            return {
              date: date || '',
              title: title || '',
              description: description || '',
              time: time || '',
              imageUrl: imageUrl || '',
            };
          })
          .filter(event => event.title); // Boş başlıkları filtrele
        
        setEvents(parsedEvents);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    if (SHEET_ID !== 'YOUR_SHEET_ID_HERE') {
      fetchEvents();
      
      // Her 5 dakikada bir güncelle
      const interval = setInterval(fetchEvents, 5 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return { events, loading, error };
}
