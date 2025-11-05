import { addTask, listTasks, markTaskDone, removeTask } from './tasks.js';

const [command, ...args] = process.argv.slice(2);
const taskDescription = args.join(' ');
const taskId = args[0];

async function main() {
  try {
    switch (command) {
      case 'add':
        if (!taskDescription) {
          console.error('Error: Deskripsi tugas tidak boleh kosong.');
          break;
        }
        await addTask(taskDescription);
        break;

      case 'list':
        await listTasks();
        break;

      case 'done':
        if (!taskId) {
          console.error('Error: Mohon masukkan ID tugas.');
          break;
        }
        await markTaskDone(Number(taskId));
        break;

      case 'remove':
        if (!taskId) {
          console.error('Error: Mohon masukkan ID tugas.');
          break;
        }
        await removeTask(Number(taskId));
        break;

      default:
        console.log('Perintah tidak dikenal.');
        console.log('Gunakan: add "deskripsi", list, done [ID], remove [ID]');
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  }
}

main();