import { NextResponse } from 'next/server'
import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const dataFilePath = path.join(dataDir, 'attendance.json');

async function ensureDirExists() {
    try {
        await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
        // Ignore error if directory already exists
        if (error.code !== 'EEXIST') {
            throw error;
        }
    }
}

async function readData() {
    try {
        await ensureDirExists();
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return []; // Return empty array if file doesn't exist
        }
        throw error;
    }
}

async function writeData(data) {
    await ensureDirExists();
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function POST(request) {
  const body = await request.json()
  const data = await readData();

  const index = data.findIndex(item => item.date.split('T')[0] === body.date.split('T')[0]);

  if (index !== -1) {
    data[index] = body;
  } else {
    data.push(body);
  }

  await writeData(data);
  return NextResponse.json({ message: 'Attendance data saved' })
}

export async function GET(request) {
    const data = await readData();
    return NextResponse.json(data);
}
