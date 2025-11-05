import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const tasksPath = path.join(process.cwd(), 'tasks.json');

async function loadTasks() {
  try {
    const data = await readFile(tasksPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function saveTasks(tasks) {
  await writeFile(tasksPath, JSON.stringify(tasks, null, 2));
}

export async function addTask(taskDescription) {
  const tasks = await loadTasks();
  
  let newId = 1;
  if (tasks.length > 0) {
    newId = Math.max(...tasks.map(t => t.id)) + 1;
  }
  
  const newTask = {
    id: newId,
    description: taskDescription,
    status: 'pending'
  };
  
  tasks.push(newTask);
  await saveTasks(tasks);
  
  console.log(`[+] Tugas ditambahkan: "${taskDescription}" (ID: ${newId})`);
}

export async function listTasks() {
  console.log('Fitur [list] belum diimplementasi.');
}

export async function markTaskDone(taskId) {
  console.log('Fitur [done] belum diimplementasi.');
}

export async function removeTask(taskId) {
  console.log('Fitur [remove] belum diimplementasi.');
}