// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Assignee {
    address addr;
    string name;
    string role;
    string email;
}

struct Comment {
    address commenter;
    string message;
    uint256 timestamp;
}

struct Task {
    uint256 id;
    string title;
    string description;
    bool done;
    uint256 createdAt;
    uint256 updatedAt;
    uint256 dueDate;
    Priority priority;
    Status status;
    string[] tags;
    Assignee[] assignees;
    Comment[] comments;
}

enum Priority {
    P0, // Highest priority
    P1,
    P2,
    P3 // Lowest priority
}

enum Status {
    BACKLOG,
    IN_PROGRESS,
    DONE
}
