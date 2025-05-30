'use client';

import { useEffect, useState } from 'react';
import Task from '@/components/Task';

interface Album {
  userId: number;
  id: number;
  title: string;
}

export default function TaskList() {
  const [taskList, setTaskList] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        const albums = data.map((album: Album) => ({
          id: album.id,
          title: album.title,
          description: `Album by User ${album.userId}`
        }));
        setTaskList(albums);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }
  , []);
  const handleRemoveTask = (id: number) => {
    const updatedList = taskList.filter(task => task.id !== id);
    setTaskList(updatedList);
  };

  const filteredTasks = taskList.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <header title="Taskly - Task List" />
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <Task
              id={task.id}
              name={task.title}
              description={task.description}
              onRemove={handleRemoveTask}
            />
          </li>
        ))}
        {filteredTasks.length === 0 && (
          <li className="text-gray-500 text-center mt-4">No tasks found.</li>
        )}
      </ul>
    </div>
  );
}