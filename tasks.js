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
  const tasks = await loadTasks();
  
  if (tasks.length === 0) {
    console.log('Tidak ada tugas untuk ditampilkan.');
    return;
  }
  
  console.log('--- DAFTAR TUGAS ---');
  tasks.forEach(task => {
    const statusIcon = task.status === 'done' ? '✓' : '○';
    const statusText = task.status === 'done' ? '(Selesai)' : '';
    console.log(`[${task.id}] ${statusIcon} ${task.description} ${statusText}`);
  });
  console.log('--------------------');
}

export async function markTaskDone(taskId) {
  const tasks = await loadTasks();
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    console.error('Error: Tugas dengan ID tersebut tidak ditemukan.');
    return;
  }
  
  if (tasks[taskIndex].status === 'done') {
    console.log(`[!] Tugas "${tasks[taskIndex].description}" sudah selesai.`);
    return;
  }
  
  tasks[taskIndex].status = 'done';
  await saveTasks(tasks);
  
  console.log(`[✓] Tugas ditandai selesai: "${tasks[taskIndex].description}"`);
}

export async function removeTask(taskId) {
  console.log('Fitur [remove] belum diimplementasi.');
}