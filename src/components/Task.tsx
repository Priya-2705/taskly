interface TaskProps {
    id: number;
    name: string;
    description: string;
    completed? : boolean;
    onRemove?: (id: number) => void;
}

function Task(props : TaskProps) {
    return (
        <div className="border p-4 rounded shadow mb-4 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{props.name}</h2>
          {props.description && <p className="text-gray-600 text-sm">{props.description}</p>}
        </div>
        <button
          onClick={() => props.onRemove?.(props.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
    );
}

export default Task;