
import fs from 'fs';
import Papa from 'papaparse';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { value } = req.body;

    // Path to your CSV file
    const filePath = '../../public/codes.csv';

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Error reading file' });
        return;
      }

      const parsed = Papa.parse(data, { header: false });
      const updatedData = parsed.data.filter(row => row[0] !== value);
      const updatedCsv = Papa.unparse(updatedData);

      fs.writeFile(filePath, updatedCsv, 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Error writing file' });
          return;
        }
        res.status(200).json({ message: 'CSV updated successfully' });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
