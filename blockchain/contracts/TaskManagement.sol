// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskManagement {
    uint256 public taskCounter;

    struct Task {
        uint256 id;
        string title;
        string description;
        uint256 createdAt;
        uint256 updatedAt;
        bool done;
    }

    mapping(uint256 => Task) public tasks;

    event TaskCreated(uint256 indexed id, string title);
    event TaskUpdated(uint256 indexed id, string title, bool done);
    event TaskDeleted(uint256 indexed id);

    /**
     * @notice Creates a new task
     * @param _title The title of the task
     * @param _description The description of the task
     */
    function createTask(
        string memory _title,
        string memory _description
    ) public {
        taskCounter++;
        tasks[taskCounter] = Task({
            id: taskCounter,
            title: _title,
            description: _description,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            done: false
        });

        emit TaskCreated(taskCounter, _title);
    }

    /**
     * @notice Retrieves a specific task by its id
     * @param _id The id of the task to retrieve
     * @return The task with the specified id
     */
    function getTask(uint256 _id) public view returns (Task memory) {
        require(tasks[_id].id != 0, "Task does not exist");
        return tasks[_id];
    }

    /**
     * @notice Updates a task's details
     * @param _id The ID of the task to update
     * @param _title The new title of the task
     * @param _description The new description of the task
     * @param _done The completion status of the task
     */
    function updateTask(
        uint256 _id,
        string memory _title,
        string memory _description,
        bool _done
    ) public {
        require(tasks[_id].id != 0, "Task does not exist");

        Task storage task = tasks[_id];
        task.title = _title;
        task.description = _description;
        task.done = _done;
        task.updatedAt = block.timestamp;

        emit TaskUpdated(_id, _title, _done);
    }

    /**
     * @notice Deletes a task by its ID
     * @param _id The ID of the task to delete
     */
    function deleteTask(uint256 _id) public {
        require(tasks[_id].id != 0, "Task does not exist");

        delete tasks[_id];

        emit TaskDeleted(_id);
    }
}