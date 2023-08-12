import React from 'react';
import { useDrag } from 'react-dnd';

import TaskItem from './TaskItem'; // Update the import path as needed

const DraggableTaskItem = ({ task, deleteTask }) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'TASK',
		item: { id: task._id },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<div
			ref={drag}
			style={{ opacity: isDragging ? 0.5 : 1 }}
		>
			<TaskItem
				task={task}
				deleteTask={deleteTask}
			/>
		</div>
	);
};

export default DraggableTaskItem;
