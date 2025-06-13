import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import './ToDo.css'
export default function ToDo() {

    const{t, i18n} = useTranslation();
    const [tasks, setTasks] = useState(() => {

        const saved = localStorage.getItem("todo-tasks");
        return saved ? JSON.parse(saved) : [];
      });
    
      const [taskInput, setTaskInput] = useState("");
      const [editIndex, setEditIndex] = useState(null);
    
     
      useEffect(() => {
        localStorage.setItem("todo-tasks", JSON.stringify(tasks));
      }, [tasks]);
    
      const handleAddOrEdit = () => {
        if (taskInput.trim() === "") return;
    
        if (editIndex !== null) {
          const updated = [...tasks];
          updated[editIndex] = taskInput;
          setTasks(updated);
          setEditIndex(null);
        } else {
          setTasks([...tasks, taskInput]);
        }
    
        setTaskInput("");
      };
    
      const handleDelete = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
      };
    
      const handleEdit = (index) => {
        setTaskInput(tasks[index]);
        setEditIndex(index);
      };
    
      return (
        <div className='todo-list text-light flex-col'>
          <h2>{t('Todo_list')}</h2>
    
         <div className="input-div">
          <input
              className='w-100'
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder={t('enter_task')}
            />
            <button onClick={handleAddOrEdit}>
              {editIndex !== null ? `${t('edit')}` : `${t('add')}` }
            </button>
         </div>
    
          <ul style={{ padding: 0, marginTop: "20px" }}>
            {tasks.map((task, index) => (
              <li key={index} className='flex-bw'>
                {task}
              <div className="li-button">
                 <button onClick={() => handleEdit(index)} ><i className="fa-solid fa-pen"></i></button>
                 <button onClick={() => handleDelete(index)} style={{ marginLeft: "15px" }}><i className="fa-solid fa-trash"></i></button>
              </div>
              </li>
            ))}
          </ul>
        </div>
      );
}
