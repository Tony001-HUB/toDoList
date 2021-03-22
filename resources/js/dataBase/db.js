import generateId from '../components/idGenerator.js'

let tasks = {
    current: [ {
            tasrTitle: "test1",
            taskText: "Hello world",
            taskId: generateId(),
            taskPriority: {
                low: false,
                hedium: false,
                high: false
            },
            tasrTitle: "test2",
            taskText: "Hello world",
            taskId: generateId(),
            taskPriority: {
                low: false,
                hedium: false,
                high: false
            },
            tasrTitle: "test3",
            taskText: "Hello world",
            taskId: generateId(),
            taskPriority: {
                low: false,
                hedium: false,
                high: false
            }
        }
    ],
    done: [ {
            tasrTitle: "test4",
                taskText: "Hello world",
                taskId: generateId(),
                taskPriority: {
                    low: false,
                    hedium: false,
                    high: false
                },
        }
    ]
}
    
export {tasks};